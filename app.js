// State
let lectures = [];
let lecturesMap = new Map(); // Cache for loaded lecture content
let selectedLecture = null;
let activeTab = "summary";
let isDark = false;
let showAnswers = false;
let tocVisible = true;
let sidebarVisible = true;
let currentFontSize = 100; // Percentage
let completedLectures = new Set(); // Track completed IDs
let activeRecall = false; // Active Recall Mode State
let pendingResolvers = new Map(); // Registry for pending lecture loads
let currentBlock = null; // Block filter state for sidebar
let lectureTabMemory = {}; // { lectureId: tabName } — last tab viewed per lecture

function loadLectureTabMemory() {
  try {
    const saved = localStorage.getItem('onepass_tab_memory');
    if (saved) lectureTabMemory = JSON.parse(saved) || {};
  } catch (_) { lectureTabMemory = {}; }
}
function saveLectureTabMemory() {
  try { localStorage.setItem('onepass_tab_memory', JSON.stringify(lectureTabMemory)); } catch (_) {}
}

// Block Categorization System
const BLOCKS = {
  neuro: { name: "Neurology", shortName: "NEURO", range: "L1a – L46", color: "#2C3E6B", darkColor: "#7B93DB", start: 1, end: 46 },
  psych: { name: "Psychiatry", shortName: "PSYCH", range: "L47 – L96", color: "#7B4B7A", darkColor: "#C68BC5", start: 47, end: 96 },
  msk:   { name: "MSK", shortName: "MSK", range: "L97 – L147", color: "#2D6A4F", darkColor: "#6BBF8A", start: 97, end: 147 },
  heme:  { name: "Heme-Onc", shortName: "HEME", range: "L148 – L192", color: "#8B1A1A", darkColor: "#E05555", start: 148, end: 192 },
};

// Strip the "Lecture #XYZ:" prefix from titles before display.
// The L## hero / sidebar tag already conveys the lecture number, so the prefix
// is redundant in user-visible contexts. Search and data matching still use the
// full title (so "L170" or "Lecture #170" will still find the right row).
function displayTitle(title) {
  if (!title) return '';
  // Strips both "Lecture #N:" and "Lecture N:" prefixes (with or without #)
  return title.replace(/^Lecture\s*#?\s*[^:]+:\s*/i, '');
}

function getBlockInfo(id) {
  if (!id) return null;
  const numMatch = id.replace(/^l/i, "").match(/(\d+)/);
  if (!numMatch) return BLOCKS.neuro; // default for l1a etc
  const num = parseInt(numMatch[1]);
  if (num <= 46) return { ...BLOCKS.neuro, key: "neuro" };
  if (num <= 96) return { ...BLOCKS.psych, key: "psych" };
  if (num <= 147) return { ...BLOCKS.msk, key: "msk" };
  return { ...BLOCKS.heme, key: "heme" };
}

function openBlock(blockKey) {
  currentBlock = blockKey;
  // Show sidebar if hidden
  if (!sidebarVisible) {
    sidebarVisible = true;
    document.body.classList.remove("sidebar-hidden");
  }
  renderLectureList(document.getElementById("searchInput").value);
  // Scroll lecture list to top
  document.getElementById("lectureList").scrollTop = 0;
  // Re-render welcome page so the lead block swaps to whichever block was clicked
  updateWelcomeMessage();
}

function clearBlockFilter() {
  currentBlock = null;
  renderLectureList(document.getElementById("searchInput").value);
  updateWelcomeMessage();
}

// Global callback for lectures that use the window.receiveLectureContent(data) format
window.receiveLectureContent = (data) => {
  if (!data) return;
  
  // Try to find the ID. In newer files it's in metadata.id
  let id = (data.metadata && data.metadata.id) || data.id;
  
  // Fallback: If no ID is found in the data, try to infer it from pending resolvers
  if (!id && pendingResolvers.size === 1) {
    id = pendingResolvers.keys().next().value;
  }

  if (!id) {
    // If still no ID (e.g. multiple pending loads), store in buffer for script.onload to pick up
    window._lastReceivedLectureData = data;
    return;
  }

  const normalized = normalizeLectureData(data, id);
  lecturesMap.set(normalized.id, normalized);

  const resolver = pendingResolvers.get(normalized.id);
  if (resolver) {
    resolver(normalized);
    pendingResolvers.delete(normalized.id);
  }
};

document.addEventListener("DOMContentLoaded", async function () {
  // Load Theme
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark = false;
    document.documentElement.classList.remove("dark");
  }

  // Load Progress
  loadProgress();
  loadLectureTabMemory();

  // Load Lecture Index
  await loadLectureIndex();

  setupEventListeners();
  updateWelcomeMessage();
  setupKeyboardShortcuts();
  setupReadingProgress();
  setupWelcomeAnimation();
  setupLightbox();
  setupPearlbookModal();
});

let lightboxState = {
  zoom: 1,
  isDragging: false,
  startX: 0,
  startY: 0,
  translateX: 0,
  translateY: 0
};

function setupLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImage');
  const closeBtn = document.getElementById('lightboxClose');
  const zoomInBtn = document.getElementById('lightboxZoomIn');
  const zoomOutBtn = document.getElementById('lightboxZoomOut');

  if (!lightbox || !img) return;

  // Functions
  const openLightbox = (src) => {
    img.src = src;
    lightbox.classList.remove('hidden');
    // Small delay for fade in
    requestAnimationFrame(() => {
      lightbox.classList.remove('opacity-0');
    });
    resetZoom();
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    lightbox.classList.add('opacity-0');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      img.src = '';
    }, 300);
    document.body.style.overflow = '';
  };

  const resetZoom = () => {
    lightboxState = { zoom: 1, isDragging: false, startX: 0, startY: 0, translateX: 0, translateY: 0 };
    updateTransform();
  };

  const updateTransform = () => {
    img.style.transform = `scale(${lightboxState.zoom}) translate(${lightboxState.translateX}px, ${lightboxState.translateY}px)`;
  };

  // Event Listeners for Images (Global delegation or post-render attachment)
  // We attach this to document but only act if target matches
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.closest('#tabContent')) {
      openLightbox(e.target.src);
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.closest('.w-full')) closeLightbox();
  });

  // Zoom Controls
  zoomInBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxState.zoom = Math.min(lightboxState.zoom + 0.5, 4);
    updateTransform();
  });

  zoomOutBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxState.zoom = Math.max(lightboxState.zoom - 0.5, 0.5);
    updateTransform();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === '+' || e.key === '=') zoomInBtn.click();
      if (e.key === '-') zoomOutBtn.click();
    }
  });

  // Pan Logic (Mouse)
  img.addEventListener('mousedown', (e) => {
    if (lightboxState.zoom <= 1) return;
    e.preventDefault();
    lightboxState.isDragging = true;
    lightboxState.startX = e.clientX - lightboxState.translateX;
    lightboxState.startY = e.clientY - lightboxState.translateY;
    img.classList.add('cursor-grabbing');
  });

  window.addEventListener('mousemove', (e) => {
    if (!lightboxState.isDragging) return;
    e.preventDefault();
    lightboxState.translateX = e.clientX - lightboxState.startX;
    lightboxState.translateY = e.clientY - lightboxState.startY;
    updateTransform();
  });

  window.addEventListener('mouseup', () => {
    lightboxState.isDragging = false;
    img.classList.remove('cursor-grabbing');
  });

  // Wheel Zoom
  lightbox.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    lightboxState.zoom = Math.min(Math.max(0.5, lightboxState.zoom + delta), 4);
    updateTransform();
  });
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('onepass_progress');
    if (saved) {
      const data = JSON.parse(saved);
      // Migrate legacy format if needed, for now assume simple array of IDs
      if (Array.isArray(data)) {
        completedLectures = new Set(data);
      }
    }
  } catch (e) {
    console.error("Failed to load progress", e);
  }
}

function saveProgress() {
  localStorage.setItem('onepass_progress', JSON.stringify([...completedLectures]));
  renderLectureList(document.getElementById("searchInput").value);
}

function toggleLectureComplete(id) {
  if (completedLectures.has(id)) {
    completedLectures.delete(id);
  } else {
    completedLectures.add(id);
  }
  saveProgress();
  updateCompleteButton();
}

// Load Index
async function loadLectureIndex() {
  return new Promise((resolve) => {
    // Define callback for index
    window.receiveLectureIndex = (data) => {
      lectures = data;
      renderLectureList();
      checkDeepLink();
      resolve();
    };

    // Try loading the JS index
    const script = document.createElement('script');
    script.src = './lectures_index.js';
    script.onerror = () => {
      console.error("Failed to load lecture index script, falling back to global.");
      if (window.LECTURES_DATA) {
        lectures = window.LECTURES_DATA;
        renderLectureList();
        checkDeepLink();
      }
      resolve();
    };
    document.body.appendChild(script);
  });
}

function checkDeepLink() {
  // Check for deep link
  const params = new URLSearchParams(window.location.search);
  const lectureId = params.get('lecture');
  const tab = params.get('tab');

  if (lectureId) {
    if (tab) activeTab = tab;
    selectLecture(lectureId); // Don't await here to avoid blocking
    if (tab) switchTab(tab);
  }
}

async function getLectureContent(id, path) {
  if (lecturesMap.has(id)) return lecturesMap.get(id);

  // If already loading this specific ID, return the existing promise's result indirectly
  // (Simplest way is just to let it run; the pendingResolvers check below handles the callback)
  
  return new Promise((resolve, reject) => {
    // Register this promise's resolver
    pendingResolvers.set(id, resolve);

    const script = document.createElement('script');
    script.src = path;
    script.onerror = () => {
      pendingResolvers.delete(id);
      reject(new Error("Network error loading lecture content"));
    };
    document.body.appendChild(script);

    // After load, detect non-standard formats and normalize them
    script.onload = () => {
      setTimeout(() => {
        // Only proceed if the promise hasn't already resolved via receiveLectureContent
        if (lecturesMap.has(id)) {
          script.remove();
          return;
        }

        let rawData = null;

        // Fallback 0: Data was captured in buffer but ID was missing
        if (window._lastReceivedLectureData) {
          rawData = window._lastReceivedLectureData;
          window._lastReceivedLectureData = null;
        }

        // Format 1: window.contentData['lXXX'] (used by l123, l124, l125)
        if (!rawData && window.contentData && window.contentData[id]) {
          rawData = window.contentData[id];
          rawData._sourceId = id;
        }

        // Format 2: window.LXXX (used by l126, l127, l128, l129, l131, l132, l134, l135)
        if (!rawData) {
          const numId = id.replace(/^l/i, '');
          const globalKey = 'L' + numId;
          if (window[globalKey] && typeof window[globalKey] === 'object') {
            rawData = window[globalKey];
            rawData._sourceId = id;
          }
        }

        // Format 3: window.lectureData (used by l133)
        if (!rawData && window.lectureData && typeof window.lectureData === 'object') {
          rawData = window.lectureData;
          rawData._sourceId = id;
          // Clean up global to prevent bleed-over
          window.lectureData = null;
        }

        if (rawData) {
          const normalized = normalizeLectureData(rawData, id);
          lecturesMap.set(normalized.id, normalized);
          
          const resolver = pendingResolvers.get(id);
          if (resolver) {
            resolver(normalized);
            pendingResolvers.delete(id);
          }
        }

        script.remove();
      }, 150);
    };
  });
}

/**
 * Normalizes lecture data from any of the known formats to the standard format
 * expected by app.js rendering functions.
 * Standard format fields: id (string), title, summary, questions, flashcards, mindmap, anking, ankingResource, pearls, pdf
 */
function normalizeLectureData(data, expectedId) {
  if (!data || typeof data !== 'object') return data;

  const meta = data.metadata || {};

  // Determine the canonical string ID (always 'lXXX' format)
  let id = expectedId;
  if (!id) {
    // Try to derive from data or metadata
    const rawId = data.id || meta.id;
    if (rawId) {
      const numId = String(rawId).replace(/^l/i, '');
      id = 'l' + numId;
    } else if (data._sourceId) {
      id = data._sourceId;
    }
  }

  // Normalize: content -> summary
  const summary = data.summary || data.content || '';

  // Normalize: reviewQuestions -> questions, then normalize each question object
  const rawQuestions = data.questions || data.reviewQuestions || [];
  const questions = Array.isArray(rawQuestions)
    ? rawQuestions.map(q => normalizeQuestion(q))
    : rawQuestions;

  // Normalize: flashcards (handle q/a aliases)
  const rawFlashcards = data.flashcards || [];
  const flashcards = Array.isArray(rawFlashcards)
    ? rawFlashcards.map(f => ({
      ...f,
      front: f.front || f.q || '',
      back: f.back || f.a || '',
      tag: f.tag || 'Card'
    }))
    : rawFlashcards;

  // Normalize: mindMap -> mindmap (capital M variant)
  const mindmap = data.mindmap || data.mindMap || '';

  // Normalize: anking array
  let anking = data.anking || [];
  if (anking.length === 0 && data.resources && data.resources.anking) {
    anking = data.resources.anking;
  }

  // Normalize: ankingResource (handle resources alias)
  let ankingResource = data.ankingResource || data.resources || null;
  // Unwrap nested ankingResource if present (l149+ format)
  if (ankingResource && ankingResource.ankingResource) {
    ankingResource = ankingResource.ankingResource;
  }

  // Extract title/module from metadata if needed
  const title = data.title || meta.title || '';
  const module = data.module || meta.module || '';
  const lecturer = data.lecturer || meta.lecturer || '';
  const readingTime = data.readingTime || meta.readingTime || '';

  // Extract pdf path
  const pdf = data.pdf || meta.pdf || data.highYieldPdf || data.highYieldLink || null;

  return {
    ...data,                   // keep all original fields
    id: id,                    // normalized string ID
    title: title,
    module: module,
    lecturer: lecturer,
    readingTime: readingTime,
    summary: summary,          // always use 'summary'
    questions: questions,      // always use 'questions' (normalized)
    flashcards: flashcards,    // always use 'flashcards'
    mindmap: mindmap,          // always use 'mindmap' (lowercase m)
    anking: anking,
    ankingResource: ankingResource,
    pdf: pdf,
  };
}

/**
 * Normalizes an individual question object to the standard format:
 * { question, options, answer, rationale }
 * Handles: stem->question, explanation->rationale
 */
function normalizeQuestion(q) {
  if (!q || typeof q !== 'object') return q;

  // Normalize question text: stem, questionText -> question
  const questionText = q.question || q.stem || q.questionText || '';

  // Normalize rationale: explanation -> rationale
  const rationale = q.rationale || q.explanation || '';

  // Normalize answer: keep single letter like 'A', 'B', etc. as-is
  const answer = q.answer || '';
  let correctAnswer = q.correctAnswer;

  // Handle correctAnswerIndex alias (numeric)
  if (correctAnswer === undefined && q.correctAnswerIndex !== undefined) {
    correctAnswer = q.correctAnswerIndex;
  }

  if (correctAnswer === undefined && typeof answer === 'string' && /^[A-E]$/i.test(answer.trim())) {
    correctAnswer = answer.trim().toUpperCase().charCodeAt(0) - 65; // 'A'->0, 'B'->1, etc.
  }

  return {
    ...q,
    question: questionText,
    rationale: rationale,
    answer: answer,
    correctAnswer: correctAnswer,
  };
}



function setupWelcomeAnimation() {
  const welcomeScreen = document.getElementById("welcomeScreen");
  const welcomeCard = document.getElementById("welcomeCard");

  if (!welcomeScreen || !welcomeCard) return;

  document.addEventListener("mousemove", (e) => {
    if (welcomeScreen.classList.contains("hidden")) return;

    // Calculate rotation based on mouse position relative to center
    // Increased sensitivity for "floaty" feel
    const x = (window.innerWidth / 2 - e.pageX) / 20;
    const y = (window.innerHeight / 2 - e.pageY) / 20;

    welcomeCard.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  });
}

function setupEventListeners() {
  const debouncedSearch = debounce((value) => {
    renderLectureList(value);
    animateSearchIcon();
  }, 300);

  document.getElementById("searchInput").addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
  });
  document.getElementById("darkModeToggle")?.addEventListener("click", () => toggleDarkMode());
  document.getElementById("tocToggle").addEventListener("click", () => toggleTableOfContents());
  document.getElementById("sidebarToggle").addEventListener("click", () => toggleSidebar());
  document.getElementById("closeLecture").addEventListener("click", () => {
    closeLecture();
  });
  document.getElementById("prevLectureBtn")?.addEventListener("click", () => goToAdjacentLecture(-1));
  document.getElementById("nextLectureBtn")?.addEventListener("click", () => goToAdjacentLecture(1));
  document.getElementById("backToTop").addEventListener("click", () => {
    document
      .getElementById("contentScroll")
      .scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      switchTab(this.dataset.tab);
    });
  });

  // Handle Browser Back/Forward
  window.addEventListener('popstate', (e) => {
    const state = e.state;
    if (state && state.lecture) {
      if (selectedLecture?.id !== state.lecture) {
        selectLecture(state.lecture).then(() => {
          if (state.tab) switchTab(state.tab);
        });
      } else if (state.tab && activeTab !== state.tab) {
        switchTab(state.tab);
      }
    } else {
      // If no state or no lecture, close
      if (selectedLecture) closeLecture();
    }
  });

  // Add Mark Complete Listener
  const completeBtn = document.getElementById("markCompleteBtn");
  if (completeBtn) {
    completeBtn.addEventListener("click", () => {
      if (selectedLecture) {
        toggleLectureComplete(selectedLecture.id);
      }
    });
  }

  // Active Recall Click Toggle
  document.getElementById("tabContent").addEventListener("click", (e) => {
    // Only proceed if Active Recall Mode is active
    if (!activeRecall) return;

    // Check if clicked element is a recall target
    const target = e.target.closest(".recall-target");
    if (target) {
      target.classList.toggle("revealed");
    }
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Search Shortcut
    if (e.key === "/" && document.activeElement.id !== "searchInput") {
      e.preventDefault();
      document.getElementById("searchInput").focus();
    }

    // Close Lecture
    if (e.key === "Escape" && selectedLecture) {
      closeLecture();
    }

    // Sidebar Toggle
    if (e.key === "[" || e.key === "]") {
      toggleSidebar();
    }

    // Lecture Navigation Shortcuts
    if (selectedLecture) {
      // Tab Switching (Left/Right)
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        // Updated tabs to match HTML structure
        const tabs = ["summary", "questions", "flashcards", "mindmap", "anking", "high-yield"];
        const currentIndex = tabs.indexOf(activeTab);

        if (e.key === "ArrowLeft" && currentIndex > 0) {
          switchTab(tabs[currentIndex - 1]);
        } else if (e.key === "ArrowRight" && currentIndex < tabs.length - 1) {
          switchTab(tabs[currentIndex + 1]);
        }
      }

      // Scrolling (Up/Down)
      if ((e.key === "ArrowUp" || e.key === "ArrowDown") && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault(); // Prevent default page scroll
        const contentScroll = document.getElementById("contentScroll");
        if (contentScroll) {
          const scrollAmount = 100; // Pixels to scroll
          contentScroll.scrollBy({
            top: e.key === "ArrowUp" ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
          });
        }
      }

      // Toggle Complete Shortcut (C)
      if ((e.key === "c" || e.key === "C") && document.activeElement.tagName !== 'INPUT') {
        toggleLectureComplete(selectedLecture.id);
      }

      // Prev/Next lecture (J = prev, K = next, vim-style)
      if ((e.key === "j" || e.key === "J") && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        goToAdjacentLecture(-1);
      }
      if ((e.key === "k" || e.key === "K") && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        goToAdjacentLecture(1);
      }
    }
  });
}

function setupReadingProgress() {
  const contentScroll = document.getElementById("contentScroll");
  const backToTop = document.getElementById("backToTop");

  contentScroll?.addEventListener("scroll", () => {
    const scrollTop = contentScroll.scrollTop;
    const scrollHeight =
      contentScroll.scrollHeight - contentScroll.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    // Update Progress Bar
    const progressBar = document.getElementById("readingProgressBar");
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // Show/Hide Back to Top Button
    if (scrollTop > 300) {
      backToTop.classList.remove("opacity-0", "pointer-events-none");
    } else {
      backToTop.classList.add("opacity-0", "pointer-events-none");
    }

    // Scroll Spy Logic
    if (tocVisible) updateActiveToC();
  });
}

function updateActiveToC() {
  const headings = Array.from(document.getElementById("tabContent").querySelectorAll("h1, h2, h3"));
  if (!headings.length) return;

  // Default to first
  let activeId = headings[0].id;

  // Refined offset for sticky header (~150px)
  const offset = 150;

  // Find the last heading that is above the threshold (active section)
  for (let i = 0; i < headings.length; i++) {
    const rect = headings[i].getBoundingClientRect();

    // If heading is above our "reading line", it's a candidate for being active
    if (rect.top < offset) {
      activeId = headings[i].id;
    } else {
      // We hit a heading below the line, so the *previous* candidate matches
      break;
    }
  }

  // Highlight sidebar links using data-target attribute
  document.querySelectorAll(".toc-link").forEach(link => {
    if (link.dataset.target === activeId) {
      link.classList.add("text-claude-accent", "dark:text-dark-accent", "font-semibold");
      link.classList.remove("text-claude-text", "dark:text-dark-text");
    } else {
      link.classList.remove("text-claude-accent", "dark:text-dark-accent", "font-semibold");
      link.classList.add("text-claude-text", "dark:text-dark-text");
    }
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function createRipple(e) {
  // Disabled to prevent flex container layout shifts
  return;
}

function animateSearchIcon() {
  const icon = document.getElementById("searchIcon");
  icon.style.transform = "translate(-50%, -50%) scale(1.2) rotate(15deg)";
  setTimeout(
    () =>
      (icon.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)"),
    200
  );
}

function createConfetti(x, y, rain = false) {
  // Fallback if x,y not provided (random center)
  if (x === undefined && !rain) x = window.innerWidth / 2;
  if (y === undefined && !rain) y = window.innerHeight / 2;

  const colors = [
    "#268bd2",
    "#2aa198",
    "#dc322f",
    "#b58900",
    "#6c71c4",
    "#859900",
  ];

  const particleCount = rain ? 100 : 50;

  for (let i = 0; i < particleCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";

      if (rain) {
        // Rain Effect: Start from random X at top
        const startX = Math.random() * window.innerWidth;
        confetti.style.left = startX + "px";
        confetti.style.top = "-10px";

        // Downward trajectory with slight horizontal drift
        const drift = (Math.random() - 0.5) * 200; // -100 to 100 px drift
        confetti.style.setProperty('--tx', `${drift}px`);
      } else {
        // Burst Effect (Button or Center)
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";

        // Random spread
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * velocity;
        confetti.style.setProperty('--tx', `${tx}px`);
      }

      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.1 + "s";
      confetti.style.animationDuration = Math.random() * 1 + 1.5 + "s"; // Longer fall
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }, i * 10); // Stagger more for rain
  }
}

function toggleDarkMode() {
  isDark = !isDark;
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  // Update Icon
  const btn = document.getElementById("darkModeToggle");
  if (btn) {
    // Simple text/icon swap if strictly text, but usually it's SVG.
    // Assuming the button contains an SVG, we might want to rotate it or swap it.
    // For now, just ensure the class is applied.
  }

  if (selectedLecture) renderTabContent();
}

function toggleTableOfContents() {
  tocVisible = !tocVisible;
  const toc = document.getElementById("tableOfContents");
  if (tocVisible) {
    toc.classList.remove("hidden");
    toc.style.display = ""; // fallback to css classes
  } else {
    toc.classList.add("hidden");
    toc.style.display = "none"; // force hide over lg:block
  }
}

function toggleSidebar() {
  sidebarVisible = !sidebarVisible;
  const body = document.body;
  if (sidebarVisible) {
    body.classList.remove("sidebar-hidden");
  } else {
    body.classList.add("sidebar-hidden");
  }
}

function getModuleClass(module) {
  const moduleLower = (module || "").toLowerCase();
  if (moduleLower.includes("cardio")) return "module-card-cardiovascular";
  if (moduleLower.includes("resp")) return "module-card-respiratory";
  if (moduleLower.includes("renal")) return "module-card-renal";
  if (moduleLower.includes("gi") || moduleLower.includes("gastro"))
    return "module-card-gi";
  if (moduleLower.includes("neuro")) return "module-card-neuro";
  if (moduleLower.includes("endo")) return "module-card-endo";
  if (moduleLower.includes("heme")) return "module-card-heme";
  return "";
}

function renderLectureList(searchQuery = "") {
  let filtered = [];
  const query = searchQuery.toLowerCase().trim();
  const terms = query.split(/\s+/).filter(t => t.length > 0);

  // Search Logic
  if (!query) {
    filtered = lectures;
  } else if (window.SEARCH_INDEX) {
    const results = window.SEARCH_INDEX.map(item => {
      let score = 0;
      const titleLower = (item.title || "").toLowerCase();
      const moduleLower = (item.module || "").toLowerCase();
      const contentLower = (item.content || "").toLowerCase();
      if (titleLower.includes(query)) { score += 500; if (titleLower.startsWith(query)) score += 100; }
      let termsMatchedInTitle = 0;
      let allTermsMatched = true;
      terms.forEach(term => {
        let termMatched = false;
        if (titleLower.includes(term)) { score += 100; termsMatchedInTitle++; termMatched = true; }
        if (moduleLower.includes(term)) { score += 50; termMatched = true; }
        if (contentLower.includes(term)) { score += 10; termMatched = true; }
        if (!termMatched) allTermsMatched = false;
      });
      if (terms.length > 1) { if (allTermsMatched) score += 200; if (termsMatchedInTitle === terms.length) score += 100; }
      return { id: item.id, score };
    }).filter(r => r.score > 0).sort((a, b) => b.score - a.score);
    filtered = results.map(r => lectures.find(l => l.id === r.id)).filter(Boolean);
  } else {
    filtered = lectures.filter(lec => {
      const titleLower = (lec.title || "").toLowerCase();
      const tagsLower = (lec.tags || "").toLowerCase();
      const moduleLower = (lec.module || "").toLowerCase();
      return terms.every(term => titleLower.includes(term) || tagsLower.includes(term) || moduleLower.includes(term));
    });
  }

  // Block filter — applies even when searching, so users can search within a block
  if (currentBlock) {
    const block = BLOCKS[currentBlock];
    if (block) {
      filtered = filtered.filter(lec => {
        const bi = getBlockInfo(lec.id);
        return bi && bi.key === currentBlock;
      });
    }
  }

  // Group by block for section headers
  let lastBlock = null;
  let html = "";

  // Block filter header
  if (currentBlock) {
    const block = BLOCKS[currentBlock];
    html += `<div class="block-section-header flex items-center justify-between" style="color: ${isDark ? block.darkColor : block.color}">
      <span>${block.name} · ${block.range}</span>
      <button onclick="clearBlockFilter()" class="text-claude-muted dark:text-dark-muted hover:text-red-500 text-lg leading-none">&times;</button>
    </div>`;
  }

  filtered.forEach((lec) => {
    const block = getBlockInfo(lec.id);
    const blockColor = isDark ? (block?.darkColor || "#E8956D") : (block?.color || "#D97757");
    const isActive = selectedLecture?.id === lec.id;
    const isComplete = completedLectures.has(lec.id);

    // Section header for block grouping (when not filtered)
    if (!currentBlock && !query && block && block.key !== lastBlock) {
      lastBlock = block.key;
      html += `<div class="block-section-header" style="color: ${blockColor}">${block.name} · ${block.range}</div>`;
    }

    html += `<button onclick="selectLecture('${lec.id}')" class="group relative w-full text-left p-3 my-0.5 transition-all duration-200 border-l-3 ${
      isActive
        ? "bg-claude-highlight dark:bg-dark-highlight"
        : "hover:bg-claude-surface/50 dark:hover:bg-dark-hover"
    }" style="border-left: 3px solid ${isActive ? blockColor : blockColor + '40'}">
      <div class="flex justify-between items-center">
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between mb-1">
            <div class="text-[10px] font-bold uppercase tracking-wider font-sans truncate" style="color: ${blockColor}">${lec.module}</div>
            <div class="text-[10px] text-claude-muted dark:text-dark-muted font-sans opacity-60 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              ${lec.readingTime || 5} min
            </div>
          </div>
          <div class="${isActive ? 'font-bold' : 'font-medium'} text-sm text-claude-text dark:text-dark-text leading-snug font-display">${displayTitle(lec.title)}</div>
        </div>
        ${isComplete ? `<div class="ml-2 flex-shrink-0 text-claude-success dark:text-green-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>` : ''}
      </div>
    </button>`;
  });

  // Empty-state when filter/search yields nothing
  if (filtered.length === 0) {
    const hasQuery = !!query;
    const hasBlock = !!currentBlock;
    const blockName = hasBlock ? BLOCKS[currentBlock]?.name : "";
    let hint = "";
    if (hasQuery && hasBlock) {
      hint = `No matches for <span class="font-bold text-claude-text dark:text-dark-text">"${query}"</span> in ${blockName}.`;
    } else if (hasQuery) {
      hint = `No matches for <span class="font-bold text-claude-text dark:text-dark-text">"${query}"</span>.`;
    } else if (hasBlock) {
      hint = `${blockName} has no lectures yet.`;
    } else {
      hint = `No lectures available.`;
    }
    html += `
      <div class="px-3 py-8 text-center font-sans">
        <div class="text-xs uppercase tracking-[0.2em] text-claude-muted dark:text-dark-muted mb-3">${hint}</div>
        <div class="flex flex-col gap-2 items-center text-[11px]">
          ${hasQuery ? `<button onclick="document.getElementById('searchInput').value=''; renderLectureList('');" class="underline decoration-1 underline-offset-2 text-claude-accent dark:text-dark-accent hover:opacity-80">Clear search</button>` : ''}
          ${hasBlock ? `<button onclick="clearBlockFilter()" class="underline decoration-1 underline-offset-2 text-claude-accent dark:text-dark-accent hover:opacity-80">Show all blocks</button>` : ''}
        </div>
      </div>`;
  }

  document.getElementById("lectureList").innerHTML = html;

  // Refresh prev/next button enabled state since visible order may have changed
  updatePrevNextButtons();

  // Update Counts
  const completedCount = [...completedLectures].filter(id => lectures.find(l => l.id === id)).length;
  document.getElementById("lectureCount").innerHTML = `
    <div class="flex flex-col gap-1">
        <span>${lectures.length} lecture${lectures.length !== 1 ? "s" : ""} loaded</span>
        <div class="text-[10px] opacity-80 font-bold text-claude-success dark:text-green-400">
            ${Math.round((completedCount / lectures.length) * 100) || 0}% Completed (${completedCount}/${lectures.length})
        </div>
        <div class="w-full h-1 bg-claude-border dark:bg-dark-border rounded-full overflow-hidden mt-1">
            <div class="h-full bg-claude-success transition-all duration-500" style="width: ${(completedCount / lectures.length) * 100}%"></div>
        </div>
    </div>
  `;
}

// Returns the lecture IDs currently visible in the sidebar (in display order),
// so prev/next navigation mirrors whatever filter the user is looking at.
function getVisibleLectureIds() {
  const buttons = document.querySelectorAll('#lectureList button[onclick^="selectLecture("]');
  const ids = [];
  buttons.forEach(btn => {
    const m = btn.getAttribute('onclick').match(/selectLecture\('([^']+)'\)/);
    if (m) ids.push(m[1]);
  });
  return ids;
}

function goToAdjacentLecture(direction) {
  if (!selectedLecture) return;
  const ids = getVisibleLectureIds();
  if (ids.length === 0) return;
  const idx = ids.indexOf(selectedLecture.id);
  if (idx === -1) return;
  const nextIdx = idx + direction;
  if (nextIdx < 0 || nextIdx >= ids.length) return;
  selectLecture(ids[nextIdx]);
}

function appendEndOfSummary(contentDiv) {
  if (!selectedLecture || !contentDiv) return;

  const currentBlockInfo = getBlockInfo(selectedLecture.id);
  if (!currentBlockInfo) return;
  const blockColor = isDark ? currentBlockInfo.darkColor : currentBlockInfo.color;

  // Find the next 3 unread lectures in the same block (excluding the current one)
  const moreInBlock = lectures
    .filter(l => {
      if (l.id === selectedLecture.id) return false;
      const bi = getBlockInfo(l.id);
      return bi && bi.key === currentBlockInfo.key && !completedLectures.has(l.id);
    })
    .slice(0, 3);

  // If no unread, fall back to the next 3 lectures in block by ID order
  const moreItems = moreInBlock.length > 0 ? moreInBlock : lectures
    .filter(l => {
      if (l.id === selectedLecture.id) return false;
      const bi = getBlockInfo(l.id);
      return bi && bi.key === currentBlockInfo.key;
    })
    .slice(0, 3);

  const footer = document.createElement("div");
  footer.className = "mt-16";
  footer.innerHTML = `
    <div class="end-of-summary">End of summary</div>
    ${moreItems.length > 0 ? `
      <div class="mt-10 pt-6 border-t-2" style="border-color: ${blockColor}">
        <div class="flex items-baseline gap-3 mb-5">
          <span class="text-[10px] font-sans font-bold uppercase tracking-[0.3em]" style="color: ${blockColor}">More in ${currentBlockInfo.shortName}</span>
          <span class="flex-1 h-px bg-claude-border dark:bg-dark-border"></span>
          <button onclick="openBlock('${currentBlockInfo.key}'); closeLecture();" class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted hover:text-claude-text dark:hover:text-dark-text">View block →</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${moreItems.map((l, i) => `
            <button onclick="selectLecture('${l.id}')" class="group text-left">
              <div class="flex items-baseline gap-2 mb-2">
                <span class="masthead-wordmark opacity-40 leading-none text-xl" style="color: ${blockColor}">${String(i + 1).padStart(2, '0')}</span>
                <span class="flex-1 h-[1px]" style="background: ${blockColor}; opacity: 0.4"></span>
                <span class="text-[10px] font-mono font-bold tracking-wider opacity-70" style="color: ${blockColor}">${(l.id || "").toUpperCase()}</span>
              </div>
              <h4 class="font-display font-bold text-lg leading-tight text-claude-text dark:text-dark-text group-hover:underline decoration-1 underline-offset-4 mb-1" style="text-decoration-color: ${blockColor}">${displayTitle(l.title)}</h4>
              <div class="text-[10px] font-sans uppercase tracking-[0.2em] text-claude-muted dark:text-dark-muted">${l.module || ""} &nbsp;·&nbsp; ${l.readingTime || 5}m</div>
            </button>
          `).join('')}
        </div>
        <div class="text-center mt-6 text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted">Press <kbd class="border border-claude-border dark:border-dark-border px-1.5 py-0.5 normal-case tracking-normal">K</kbd> for the next lecture</div>
      </div>
    ` : `
      <p class="text-center text-[10px] font-sans uppercase tracking-[0.3em] text-claude-muted dark:text-dark-muted mt-6">You have reached the end of this block.</p>
    `}
  `;
  contentDiv.appendChild(footer);
}

function updatePrevNextButtons() {
  const prev = document.getElementById('prevLectureBtn');
  const next = document.getElementById('nextLectureBtn');
  if (!prev || !next) return;
  if (!selectedLecture) {
    prev.disabled = true;
    next.disabled = true;
    return;
  }
  const ids = getVisibleLectureIds();
  const idx = ids.indexOf(selectedLecture.id);
  prev.disabled = idx <= 0;
  next.disabled = idx === -1 || idx >= ids.length - 1;
}

async function selectLecture(id) {
  // Find metadata first
  const meta = lectures.find((l) => l.id === id);
  if (!meta) return;

  // UI Setup - Show loading state
  const welcomeScreen = document.getElementById("welcomeScreen");
  const lectureContent = document.getElementById("lectureContent");

  if (welcomeScreen) welcomeScreen.classList.add("hidden");
  if (lectureContent) {
    lectureContent.classList.remove("hidden");
  }

  // Set Title/Module immediately from metadata
  const titleEl = document.getElementById("lectureTitle");
  if (titleEl) titleEl.textContent = displayTitle(meta.title);

  const moduleEl = document.getElementById("lectureModule");
  if (moduleEl) moduleEl.textContent = meta.module;

  // Block kicker (color-coded category tag at top of lecture) + giant L## hero
  const blockTagEl = document.getElementById("lectureBlockTag");
  const kickerRule = document.getElementById("lectureKickerRule");
  const heroEl = document.getElementById("lectureIdHero");
  const blockMeta = getBlockInfo(id);
  if (blockMeta) {
    const blockColor = isDark ? blockMeta.darkColor : blockMeta.color;
    if (blockTagEl) {
      blockTagEl.textContent = `${blockMeta.shortName} · ${blockMeta.name}`;
      blockTagEl.style.color = blockColor;
    }
    if (kickerRule) kickerRule.style.background = blockColor;
    if (heroEl) {
      heroEl.textContent = (meta.id || "").toUpperCase();
      heroEl.style.color = blockColor;
    }
    document.documentElement.style.setProperty('--block-color', blockColor);
  }

  // Highlight selection in sidebar immediately
  selectedLecture = meta;
  try { localStorage.setItem("onepass_last_lecture", id); } catch (_) {}
  renderLectureList(document.getElementById("searchInput").value);

  // Show Skeleton/Loading State
  renderSkeleton();

  // Fetch Full Data
  // document.body.classList.add('cursor-wait'); // Removed in favor of skeleton
  const fullData = await getLectureContent(id, meta.path);
  // document.body.classList.remove('cursor-wait');

  if (!fullData) {
    document.getElementById("tabContent").innerHTML = `<div class="text-red-500 p-8 text-center">Failed to load content.</div>`;
    return;
  }

  // Update selectedLecture with full data
  selectedLecture = fullData;

  // Restore the user's last tab for this lecture (if any), so each lecture
  // remembers whether the user was in Summary, Questions, Flashcards, etc.
  const remembered = lectureTabMemory[id];
  if (remembered && remembered !== activeTab) {
    activeTab = remembered;
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      if (btn.dataset.tab === remembered) btn.dataset.active = "true";
      else delete btn.dataset.active;
    });
  }

  // Set block color CSS variable for dynamic theming
  const blockInfo = getBlockInfo(id);
  if (blockInfo) {
    const color = isDark ? blockInfo.darkColor : blockInfo.color;
    document.documentElement.style.setProperty('--block-color', color);
  }

  // Calculate Reading Time (refreshed with real content)
  calculateReadingTime();

  // Toggle AnKing Tab Visibility
  const ankingTabBtn = document.querySelector('.tab-btn[data-tab="anking"]');
  if (ankingTabBtn) {
    const hasAnking = selectedLecture.ankingResource || (Array.isArray(selectedLecture.anking) && selectedLecture.anking.length > 0);
    if (hasAnking) {
      ankingTabBtn.classList.remove("hidden");
    } else {
      ankingTabBtn.classList.add("hidden");
      // If currently on AnKing tab, switch to summary
      if (activeTab === "anking") {
        activeTab = "summary";
        switchTab("summary");
      }
    }
  }


  updateCompleteButton(); // Update checkbox state
  updatePrevNextButtons();


  // Update URL state
  const newUrl = new URL(window.location);
  newUrl.searchParams.set("lecture", id);
  newUrl.searchParams.set("tab", activeTab);
  window.history.pushState({ lecture: id, tab: activeTab }, "", newUrl);

  // Force render of the active tab content
  // Small timeout to ensure DOM is ready after skeleton replacement
  setTimeout(() => {
    renderTabContent();
  }, 0);

  const contentScroll = document.getElementById("contentScroll");
  if (contentScroll) contentScroll.scrollTop = 0;
}

function renderSkeleton() {
  const contentDiv = document.getElementById("tabContent");
  contentDiv.innerHTML = `
    <div class="flex flex-col items-center justify-center py-32 font-sans uppercase tracking-[0.3em] text-[10px] text-claude-muted dark:text-dark-muted">
      <div class="w-8 h-px bg-claude-muted dark:bg-dark-muted mb-3 opacity-60"></div>
      Loading
      <div class="w-8 h-px bg-claude-muted dark:bg-dark-muted mt-3 opacity-60"></div>
    </div>
  `;
}

function updateCompleteButton() {
  const btn = document.getElementById("markCompleteBtn");
  const icon = document.getElementById("markCompleteIcon");
  const text = document.getElementById("markCompleteText");

  if (!selectedLecture || !btn) return;

  const isComplete = completedLectures.has(selectedLecture.id);

  // Toggle between Filled (Complete) and Outline (Incomplete)
  if (isComplete) {
    // Active/Clicked State -> Filled Green
    btn.classList.add("bg-claude-accent/20", "text-claude-accent", "dark:bg-dark-accent/20", "dark:text-dark-accent");
    btn.classList.remove("text-claude-text", "dark:text-dark-text");

    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
    text.textContent = "Completed";
  } else {
    // Default State -> Outline Green
    btn.classList.remove("bg-claude-accent/20", "text-claude-accent", "dark:bg-dark-accent/20", "dark:text-dark-accent");
    btn.classList.add("text-claude-text", "dark:text-dark-text");

    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
    text.textContent = "Mark Complete";
  }
}

function calculateReadingTime() {
  if (!selectedLecture || !selectedLecture.summary) return;
  const words = selectedLecture.summary.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  document.getElementById("readingTime").textContent = `${minutes} min read`;
}

function closeLecture() {
  selectedLecture = null;
  document.getElementById("welcomeScreen").classList.remove("hidden");
  document.getElementById("lectureContent").classList.add("hidden");
  renderLectureList(document.getElementById("searchInput").value);
  // Refresh welcome page so lead block + Continue reading reflect latest activity
  updateWelcomeMessage();

  // Clear URL
  const newUrl = new URL(window.location);
  newUrl.searchParams.delete("lecture");
  newUrl.searchParams.delete("tab");
  window.history.pushState({}, "", newUrl);
}

function switchTab(tab) {
  activeTab = tab;

  // Update URL + per-lecture tab memory if a lecture is selected
  if (selectedLecture) {
    lectureTabMemory[selectedLecture.id] = tab;
    saveLectureTabMemory();

    const newUrl = new URL(window.location);
    newUrl.searchParams.set("lecture", selectedLecture.id);
    newUrl.searchParams.set("tab", tab);
    window.history.pushState({ lecture: selectedLecture.id, tab: tab }, "", newUrl);
  }

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    if (btn.dataset.tab === tab) {
      btn.dataset.active = "true";
    } else {
      delete btn.dataset.active;
    }
  });

  // Tag tabContent so Tailwind's data-[tab=...] variants can widen non-summary tabs
  const tabContent = document.getElementById("tabContent");
  if (tabContent) tabContent.dataset.tab = tab;

  // Explicitly handle Active Recall Toggle Visibility
  const arToggle = document.getElementById("activeRecallToggle");
  if (arToggle) {
    if (tab === "summary") {
      updateActiveRecallButtonState(); // Ensure correct state is shown
    }
  }

  renderTabContent();
}




function renderTabContent() {
  const contentDiv = document.getElementById("tabContent");
  const tocDiv = document.getElementById("tableOfContents");
  const tocToggle = document.getElementById("tocToggle");
  const arToggle = document.getElementById("activeRecallToggle");
  const pearlbookBtn = document.getElementById("pearlbookBtn");
  const completeBtn = document.getElementById("markCompleteBtn");

  // Sync data-tab so Tailwind data-[tab=...] variants pick up the right max-width
  if (contentDiv) contentDiv.dataset.tab = activeTab;

  // Ensure all buttons are visible on all tabs as requested
  if (tocToggle) tocToggle.classList.remove("hidden");
  if (arToggle) arToggle.classList.remove("hidden");
  if (pearlbookBtn) pearlbookBtn.classList.remove("hidden");
  if (completeBtn) completeBtn.classList.remove("hidden");

  // Apply current font size
  contentDiv.style.fontSize = currentFontSize + "%";

  // Clear previous content
  contentDiv.innerHTML = "";

  // Helper to inject Active Recall Styles if missing
  if (!document.getElementById("active-recall-styles")) {
    const style = document.createElement("style");
    style.id = "active-recall-styles";
    style.textContent = `
      .active-recall-mode .recall-target {
        filter: blur(5px);
        background-color: rgba(100, 100, 100, 0.2);
        color: transparent !important;
        user-select: none;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0 4px;
        border-radius: 4px;
      }
      .active-recall-mode .recall-target.revealed {
        filter: none;
        background-color: transparent;
        color: inherit !important;
      }
    `;
    document.head.appendChild(style);
  }

  try {
    if (activeTab === "summary") {
      let html = renderMarkdown(selectedLecture.summary);

      // Wrapper class for active recall (Safe Toggle)
      if (activeRecall) {
        contentDiv.classList.add("active-recall-mode");
      } else {
        contentDiv.classList.remove("active-recall-mode");
      }

      // Ensure Base Classes are present (Recovery from previous bug state if hot-reloading)
      contentDiv.classList.add("flex-1", "max-w-none", "prose");

      // Ensure Header Toggle is visible
      const arToggle = document.getElementById("activeRecallToggle");
      if (arToggle) {
        arToggle.classList.remove("hidden");
        updateActiveRecallButtonState();
      }

      if (
        selectedLecture.drugData &&
        Array.isArray(selectedLecture.drugData) &&
        selectedLecture.drugData.length > 0
      ) {
        const headers = Object.keys(selectedLecture.drugData[0]);
        let tableHtml =
          '<div class="overflow-x-auto rounded-2xl border ' +
          (isDark
            ? "border-white/10 bg-white/5 backdrop-blur-md"
            : "border-claude-border bg-claude-bg") +
          ' shadow-xl my-12 p-1"><table class="min-w-full divide-y ' +
          (isDark ? "divide-white/5" : "divide-solarized-base1/10") +
          '"><thead class="' +
          (isDark
            ? "bg-white/10 text-white"
            : "bg-claude-accent/90 text-white") +
          ' rounded-t-xl"><tr>';

        headers.forEach((header, index) => {
          const roundedClass =
            index === 0
              ? "rounded-tl-xl"
              : index === headers.length - 1
                ? "rounded-tr-xl"
                : "";
          tableHtml += `<th class="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider font-sans ${roundedClass}">${header}</th>`;
        });

        tableHtml += `</tr></thead><tbody class="divide-y ${isDark
          ? "divide-white/5 bg-transparent"
          : "divide-solarized-base1/10 bg-white/30"
          }">`;

        selectedLecture.drugData.forEach((row) => {
          tableHtml += `<tr class="${isDark
            ? "even:bg-white/5 hover:bg-white/10"
            : "even:bg-claude-bg/30 hover:bg-claude-surface/50"
            } transition-colors duration-200">`;
          headers.forEach((header) => {
            let cellContent = row[header] || "";
            cellContent = cellContent.replace(/\n/g, "<br/>");
            tableHtml += `<td class="px-6 py-4 text-base leading-relaxed font-serif ${isDark ? "text-dark-muted" : "text-claude-text"
              }">${cellContent}</td>`;
          });
          tableHtml += "</tr>";
        });

        tableHtml += "</tbody></table></div>";
        html += tableHtml;
      }

      contentDiv.innerHTML = html;

      // Drop Cap: find first text node with substantial text and wrap its first letter
      const walker = document.createTreeWalker(contentDiv, NodeFilter.SHOW_TEXT, null, false);
      let node;
      while (node = walker.nextNode()) {
        const parent = node.parentElement;
        // Skip text in headings, lists, bylines, or badges
        if (parent.closest('h1, h2, h3, h4, ul, ol, button, .text-xs, .byline, [class*="badge"]')) continue;
        
        const text = node.textContent.trim();
        // Look for substantial paragraph text (not metadata)
        if (text.length > 40 && !/^(Lecturer|Session|Topic|Module):/i.test(text)) {
          const firstChar = text.charAt(0);
          const rest = node.textContent.replace(/^\s*/, '').substring(1);
          
          const dropCapSpan = document.createElement('span');
          dropCapSpan.className = 'float-left font-display text-7xl mr-3 mt-1 leading-none font-bold';
          dropCapSpan.style.color = 'var(--block-color, #1a1a1a)';
          dropCapSpan.textContent = firstChar;
          
          const restNode = document.createTextNode(rest);
          parent.insertBefore(dropCapSpan, node);
          parent.insertBefore(restNode, node);
          parent.removeChild(node);
          break;
        }
      }

      generateTableOfContents();
      tocDiv.classList.remove("hidden");
      tocDiv.style.display = ""; // Restore css class behavior
      try { highlightSearchTerms(); } catch (e) { console.warn("Highlight error:", e); }

      // End-of-summary editorial mark + Next lecture pointer
      appendEndOfSummary(contentDiv);
    } else if (activeTab === "questions") {
      const questions = selectedLecture.questions;

      // Check if questions exist (either non-empty string or non-empty array)
      const hasQuestions =
        (Array.isArray(questions) && questions.length > 0) ||
        (typeof questions === "string" && questions.trim() !== "");

      if (!hasQuestions) {
        contentDiv.innerHTML = `
                <div class="flex flex-col items-center justify-center py-20 text-center opacity-60">
                    <svg class="w-24 h-24 mb-6 text-claude-muted dark:text-dark-muted opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    <p class="text-2xl font-bold font-sans text-claude-text dark:text-dark-text mb-2">No Questions Yet</p>
                    <p class="text-lg text-claude-muted dark:text-dark-muted max-w-md mx-auto leading-relaxed">This lecture doesn't have any practice questions available at the moment.</p>
                </div>
            `;
      } else {
        let questionsHtml = `
                <div class="max-w-3xl mx-auto">
                    <div class="flex justify-between items-center mb-8">
                        <h3 class="text-xl font-bold uppercase tracking-wider ${isDark ? "text-dark-muted" : "text-claude-muted"
          }">Practice Questions</h3>
                        <button onclick="toggleAllAnswers()" class="px-4 py-2 rounded-lg bg-claude-accent/10 hover:bg-claude-accent/20 text-claude-accent dark:text-dark-accent font-bold text-sm transition-colors">
                            Toggle All Answers
                        </button>
                    </div>
                    <div class="space-y-8 question-container">
            `;

        // Handle Array Format (Structured)
        if (Array.isArray(questions)) {
          questions.forEach((q, index) => {
            const qId = `q-${index}`;

            // Render options list
            let optionsHtml = '<ul class="space-y-3 mt-4 mb-6">';
            q.options.forEach((opt, i) => {
              const letter = String.fromCharCode(65 + i); // A, B, C...
              optionsHtml += `
                            <li class="flex items-start gap-3 p-3 rounded-lg hover:bg-claude-surface/50 dark:hover:bg-white/5 transition-colors cursor-default group">
                                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-claude-border dark:bg-white/10 text-claude-text dark:text-dark-muted flex items-center justify-center text-xs font-bold group-hover:bg-claude-accent group-hover:text-white dark:group-hover:bg-dark-accent transition-colors">${letter}</span>
                                <span class="text-lg text-claude-text dark:text-dark-muted leading-relaxed">${opt}</span>
                            </li>`;
            });
            optionsHtml += "</ul>";

            // Determine correct answer text
            // Determine correct answer text
            let correctIndex = -1;
            if (q.correctAnswer !== undefined && q.correctAnswer !== null) {
              const num = Number(q.correctAnswer);
              if (!isNaN(num)) correctIndex = num;
            }
            const answerLetter =
              correctIndex >= 0 ? String.fromCharCode(65 + correctIndex) : "?";

            const answerText = `**Answer: ${answerLetter}**\n\n${q.rationale}`;
            const renderedAnswer = renderMarkdown(answerText);

            questionsHtml += `
                        <div class="question-card glass-panel rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                            <div class="p-8">
                                <div class="flex items-start gap-4">
                                    <span class="flex-shrink-0 w-8 h-8 rounded-full ${isDark
                ? "bg-dark-accent/20 text-dark-accent"
                : "bg-claude-accent/10 text-claude-accent"
              } flex items-center justify-center font-bold font-sans text-sm mt-1">${index + 1
              }</span>
                                    <div class="flex-1">
                                        <div class="prose dark:prose-invert max-w-none text-lg font-serif mb-4">
                                            ${renderMarkdown(q.question)}
                                        </div>
                                        ${optionsHtml}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="border-t ${isDark
                ? "border-dark-border"
                : "border-claude-border/10"
              }">
                                <button onclick="toggleAnswer('${qId}')" id="btn-${qId}" class="w-full py-4 bg-claude-surface dark:bg-white/5 hover:bg-claude-surface dark:hover:bg-white/10 text-claude-accent dark:text-dark-accent font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                                    <span>Reveal Answer</span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div id="${qId}" class="hidden bg-green-50/50 dark:bg-green-900/10 p-8 border-t ${isDark ? "border-dark-border" : "border-green-100"
              } animate-in">
                                    <div class="flex items-start gap-3">
                                        <span class="text-2xl">💡</span>
                                        <div class="prose dark:prose-invert max-w-none text-base">
                                            <h4 class="text-sm font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-2">Explanation</h4>
                                            ${renderedAnswer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
          });
        } else {
          // Handle String Format (Markdown) - Legacy/L128 style
          let questionBlocks = questions
            .split(/\n###\s+|\n---\n/g)
            .filter((q) => q.trim().length > 0);

          if (questionBlocks.length === 1 && questions.match(/\n\d+\.\s+/)) {
            questionBlocks = questions
              .split(/\n(?=\d+\.\s+)/g)
              .filter((q) => q.trim().length > 0);
          }

          questionBlocks.forEach((block, index) => {
            let questionText = block;
            let answerText = "";

            const answerMatch = block.match(
              /(?:<details>|Answer:|Explanation:)([\s\S]*)/i
            );
            if (answerMatch) {
              questionText = block.substring(0, answerMatch.index).trim();
              answerText = answerMatch[0]
                .replace(/<details>|<\/details>|<summary>.*<\/summary>/gi, "")
                .trim();
              answerText = answerText.replace(
                /^(Answer:|Explanation:)\s*/i,
                ""
              );
            }

            // Improve spacing for options in Markdown string
            questionText = questionText.replace(
              /^([A-E])\.\s+(.*)$/gm,
              (match, letter, text) => {
                return `<div class="flex items-start gap-3 p-2 rounded-lg hover:bg-claude-surface/50 dark:hover:bg-white/5 transition-colors cursor-default group my-1">
                            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-claude-border dark:bg-white/10 text-claude-text dark:text-dark-muted flex items-center justify-center text-xs font-bold group-hover:bg-claude-accent group-hover:text-white dark:group-hover:bg-dark-accent transition-colors">${letter}</span>
                            <span class="text-lg text-claude-text dark:text-dark-muted leading-relaxed">${text}</span>
                        </div>`;
              }
            );

            const renderedQuestion = renderMarkdown(questionText);
            const renderedAnswer = renderMarkdown(answerText);
            const qId = `q-${index}`;

            questionsHtml += `
                        <div class="question-card glass-panel rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                            <div class="p-8">
                                <div class="flex items-start gap-4">
                                    <span class="flex-shrink-0 w-8 h-8 rounded-full ${isDark
                ? "bg-dark-accent/20 text-dark-accent"
                : "bg-claude-accent/10 text-claude-accent"
              } flex items-center justify-center font-bold font-sans text-sm mt-1">${index + 1
              }</span>
                                    <div class="flex-1 prose dark:prose-invert max-w-none">
                                        ${renderedQuestion}
                                    </div>
                                </div>
                            </div>
                            
                            ${answerText
                ? `
                            <div class="border-t ${isDark
                  ? "border-dark-border"
                  : "border-claude-border/10"
                }">
                                <button onclick="toggleAnswer('${qId}')" id="btn-${qId}" class="w-full py-4 bg-claude-surface dark:bg-white/5 hover:bg-claude-surface dark:hover:bg-white/10 text-claude-accent dark:text-dark-accent font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                                    <span>Reveal Answer</span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div id="${qId}" class="hidden bg-green-50/50 dark:bg-green-900/10 p-8 border-t ${isDark
                  ? "border-dark-border"
                  : "border-green-100"
                } animate-in">
                                    <div class="flex items-start gap-3">
                                        <span class="text-2xl">💡</span>
                                        <div class="prose dark:prose-invert max-w-none text-base">
                                            <h4 class="text-sm font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-2">Explanation</h4>
                                            ${renderedAnswer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
                : ""
              }
                        </div>
                    `;
          });
        }

        questionsHtml += `
                    </div>
                </div>
            `;

        contentDiv.innerHTML = questionsHtml;

        // Add helper functions to window if not already there
        if (!window.toggleAnswer) {
          window.toggleAnswer = function (id) {
            const el = document.getElementById(id);
            const btn = document.getElementById("btn-" + id);
            if (el.classList.contains("hidden")) {
              el.classList.remove("hidden");
              btn.innerHTML =
                '<span>Hide Answer</span><svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
              btn.classList.add("bg-gray-100", "dark:bg-white/10");
            } else {
              el.classList.add("hidden");
              btn.innerHTML =
                '<span>Reveal Answer</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
              btn.classList.remove("bg-gray-100", "dark:bg-white/10");
            }
          };
        }

        if (!window.toggleAllAnswers) {
          window.toggleAllAnswers = function () {
            const allAnswers = document.querySelectorAll('[id^="q-"]');
            const allHidden = Array.from(allAnswers).every((el) =>
              el.classList.contains("hidden")
            );

            allAnswers.forEach((el) => {
              const id = el.id;
              const btn = document.getElementById("btn-" + id);
              if (allHidden) {
                el.classList.remove("hidden");
                if (btn)
                  btn.innerHTML =
                    '<span>Hide Answer</span><svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
              } else {
                el.classList.add("hidden");
                if (btn)
                  btn.innerHTML =
                    '<span>Reveal Answer</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
              }
            });
          };
        }

        if (!window.createConfetti) {
          window.createConfetti = function (x, y) {
            for (let i = 0; i < 20; i++) {
              const confetti = document.createElement("div");
              confetti.className = "confetti";
              confetti.style.left = x + "px";
              confetti.style.top = y + "px";
              confetti.style.backgroundColor = [
                "#D97757",
                "#2C3E6B",
                "#7B4B7A",
                "#2D6A4F",
                "#8B1A1A",
                "#E8956D",
                "#5A8A5E",
              ][Math.floor(Math.random() * 7)];
              confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

              // Random velocity
              const vx = (Math.random() - 0.5) * 10;
              const vy = (Math.random() - 1) * 10;

              document.body.appendChild(confetti);

              // Animate manually since we need dynamic values
              let opacity = 1;
              let top = y;
              let left = x;

              const animate = () => {
                opacity -= 0.02;
                top += vy + 2; // Gravity
                left += vx;
                confetti.style.opacity = opacity;
                confetti.style.top = top + "px";
                confetti.style.left = left + "px";

                if (opacity > 0) {
                  requestAnimationFrame(animate);
                } else {
                  confetti.remove();
                }
              };
              requestAnimationFrame(animate);
            }
          };
        }
      }

      tocDiv.classList.add("hidden");
      // tocToggle visibility logic removed to keep buttons persistent
    } else if (activeTab === "flashcards") {
      const flashcards =
        selectedLecture.flashcards ||
        (selectedLecture.glossary
          ? selectedLecture.glossary.map((g) => ({
            front: g.term,
            back: g.definition,
            tag: "Glossary",
          }))
          : []);

      if (flashcards.length > 0) {
        let html = `
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
                `;

        flashcards.forEach((card, index) => {
          const tagColors = {
            Glossary: isDark
              ? "bg-blue-900/30 text-blue-300"
              : "bg-blue-100 text-blue-700",
            Clinical: isDark
              ? "bg-red-900/30 text-red-300"
              : "bg-red-100 text-red-700",
            Concept: isDark
              ? "bg-yellow-900/30 text-yellow-300"
              : "bg-yellow-100 text-yellow-700",
          };
          const tagClass =
            tagColors[card.tag] ||
            (isDark
              ? "bg-gray-800 text-gray-400"
              : "bg-gray-200 text-gray-700");

          html += `
                        <div class="h-64 perspective-1000 cursor-pointer group" onclick="this.classList.toggle('flipped')">
                            <div class="relative w-full h-full transition-transform duration-500 transform-style-3d shadow-xl rounded-2xl group-[.flipped]:rotate-y-180">
                                
                                <!-- FRONT -->
                                <div class="absolute w-full h-full backface-hidden rounded-2xl p-6 ${isDark
              ? "bg-dark-surface border border-dark-border"
              : "bg-claude-bg border border-claude-border"
            } flex flex-col items-center justify-center text-center">
                                    <span class="absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${tagClass}">${card.tag || "Card"
            }</span>
                                    <div class="text-xl font-bold font-sans ${isDark
              ? "text-dark-text"
              : "text-claude-text"
            }">${card.front}</div>
                                    <div class="mt-4 text-xs font-bold uppercase tracking-widest opacity-40 ${isDark
              ? "text-dark-muted"
              : "text-claude-muted"
            }">Click to Flip</div>
                                </div>

                                <!-- BACK -->
                                <div class="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 ${isDark
              ? "bg-dark-surface border border-dark-accent"
              : "bg-claude-bg border border-claude-accent/30"
            } flex flex-col items-center justify-center text-center overflow-y-auto custom-scrollbar">
                                    <div class="text-lg font-serif leading-relaxed ${isDark
              ? "text-dark-text"
              : "text-claude-text"
            }">${card.back}</div>
                                </div>
                            </div>
                        </div>
                    `;
        });

        html += "</div>";

        // Add styles for 3D flip if not already present
        if (!document.getElementById("flashcard-styles")) {
          const style = document.createElement("style");
          style.id = "flashcard-styles";
          style.textContent = `
                        .perspective-1000 { perspective: 1000px; -webkit-perspective: 1000px; }
                        .transform-style-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
                        .backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
                        .rotate-y-180 { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); }
                        .group.flipped .group-\\[\\.flipped\\]\\:rotate-y-180 { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); }
                    `;
          document.head.appendChild(style);
        }

        contentDiv.innerHTML = html;
      } else {
        contentDiv.innerHTML = `
                <div class="flex flex-col items-center justify-center py-20 text-center opacity-60">
                    <svg class="w-16 h-16 mb-4 text-claude-muted dark:text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    <p class="text-xl font-sans font-medium text-claude-text dark:text-dark-text">No flashcards available</p>
                </div>
            `;
      }
      tocDiv.classList.add("hidden");
      // tocToggle visibility logic removed to keep buttons persistent
    } else if (activeTab === "mindmap") {
      contentDiv.innerHTML = `<div id="mindmap-container" class="w-full h-[600px] overflow-hidden bg-white/50 dark:bg-dark-surface/50 rounded-xl relative border ${isDark ? "border-dark-border" : "border-claude-border/20"
        }"></div>`;

      // Hide Outline Button & TOC
      // tocToggle visibility logic removed to keep buttons persistent
      if (tocDiv) tocDiv.classList.add("hidden");

      // Extract hierarchy from markdown
      const root = { name: selectedLecture.title, children: [] };
      let currentLevel1 = null;
      let currentLevel2 = null;

      const lines = (selectedLecture.mindmap || selectedLecture.summary || "").split("\n");

      lines.forEach((line) => {
        if (line.startsWith("## ")) {
          currentLevel1 = {
            name: line.replace("## ", "").trim(),
            children: [],
          };
          root.children.push(currentLevel1);
          currentLevel2 = null;
        } else if (line.startsWith("### ") && currentLevel1) {
          currentLevel2 = {
            name: line.replace("### ", "").trim(),
            children: [],
          };
          currentLevel1.children.push(currentLevel2);
        } else if (line.trim().startsWith("*") && currentLevel2) {
          // Extract bold term if exists
          const match = line.match(/\*\*(.*?)\*\*(.*)/);
          let term, def;
          if (match) {
            term = match[1].trim().replace(":", "");
            def = match[2].trim().replace(/^:\s*/, "");
          } else {
            term = line.replace(/^\s*\*\s*/, "").trim();
          }

          const nodeData = def
            ? { name: term, definition: def }
            : { name: term };
          const isNested = line.startsWith("    ") || line.startsWith("\t");

          if (isNested && currentLevel2.children.length > 0) {
            const parent =
              currentLevel2.children[currentLevel2.children.length - 1];
            if (!parent.children) parent.children = [];
            parent.children.push(nodeData);
          } else {
            currentLevel2.children.push(nodeData);
          }
        }
      });

      if (root.children.length === 0) {
        contentDiv.innerHTML = `<div class="p-8 text-center opacity-50">No hierarchy found. Update summary format.</div>`;
        return;
      }

      // D3 Visualization
      renderMindMapTree(root);

      tocDiv.classList.add("hidden");
      // tocToggle visibility logic removed to keep buttons persistent
    } else if (activeTab === "high-yield") {
      const pdfPath =
        selectedLecture.highYieldPdf ||
        `content/L${selectedLecture.id.replace(/^l/i, "")}_HighYield_Render.pdf`;

      // Container for PDF pages
      contentDiv.innerHTML = `
                <div id="pdfContainer" class="flex flex-col items-center gap-4 w-full" data-pdf-path="${pdfPath}">
                    <div id="pdfLoading" class="flex flex-col items-center justify-center py-20">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-claude-accent dark:border-dark-accent mb-4"></div>
                        <p class="text-lg font-sans text-claude-muted dark:text-dark-muted">Loading High Yield PDF...</p>
                    </div>
                </div>
            `;

      tocDiv.classList.add("hidden");
      // tocToggle visibility logic removed to keep buttons persistent

      // Render PDF using PDF.js
      if (window.pdfjsLib) {
        // Ensure worker is set
        if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        }

        (async () => {
          const container = document.getElementById("pdfContainer");
          const loading = document.getElementById("pdfLoading");

          if (!container || !loading) return;

          try {
            const loadingTask = pdfjsLib.getDocument(pdfPath);
            const pdf = await loadingTask.promise;

            if (activeTab !== "high-yield") return;

            if (loading && loading.parentNode) loading.remove();

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
              if (activeTab !== "high-yield") return;

              const page = await pdf.getPage(pageNum);

              // Calculate scale to fit container width (max 1000px usually good for readability)
              // We render at high quality (scale 2) and let CSS downscale
              const viewport = page.getViewport({ scale: 2.0 });

              const canvas = document.createElement("canvas");
              const context = canvas.getContext("2d");

              canvas.height = viewport.height;
              canvas.width = viewport.width;

              // CSS styling for responsiveness
              canvas.style.width = "100%";
              canvas.style.maxWidth = "100%";
              canvas.style.height = "auto";
              canvas.className = `rounded-xl shadow-lg border ${isDark ? "border-dark-border" : "border-claude-border/20"
                }`;

              // Re-query container to ensure we are still attached or check existence
              const currentContainer = document.getElementById("pdfContainer");
              if (currentContainer) {
                currentContainer.appendChild(canvas);
              }

              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              };

              await page.render(renderContext).promise;
            }
          } catch (error) {
            if (activeTab !== "high-yield") return;
            console.error("Error rendering PDF:", error);
            const currentContainer = document.getElementById("pdfContainer");
            if (currentContainer) {
              // Fallback to iframe if PDF.js fails (common on local file:// due to CORS)
              const isLocal = window.location.protocol === "file:";
              const fallbackMessage = isLocal
                ? ""
                : '<p class="text-xs text-center opacity-60 mb-2 text-red-400">In-site rendering failed. Using native viewer.</p>';

              currentContainer.innerHTML = `
                                ${fallbackMessage}
                                <iframe src="${pdfPath}" class="w-full h-[800px] rounded-xl border ${isDark ? "border-dark-border" : "border-claude-border/20"
                }"></iframe>
                            `;
            }
          }
        })();
      } else {
        console.error("PDF.js library not loaded");
        contentDiv.innerHTML += `<div class="text-center text-red-500 mt-4">PDF.js library not loaded. Please refresh the page.</div>`;
      }
    } else if (activeTab === "anking") {
      // Render Anking recommendations
      const ankingData = selectedLecture.ankingResource;

      if (ankingData && ankingData.primarySource) {
        const resources = {
          BandB: {
            bg: "bg-gradient-to-br from-blue-500 to-blue-600",
            text: "text-blue-700",
            bgLight: "bg-blue-50",
            icon: "🎓",
          },
          FirstAid: {
            bg: "bg-gradient-to-br from-green-500 to-emerald-600",
            text: "text-green-700",
            bgLight: "bg-green-50",
            icon: "📚",
          },
          SketchyMicro: {
            bg: "bg-gradient-to-br from-purple-500 to-purple-600",
            text: "text-purple-700",
            bgLight: "bg-purple-50",
            icon: "🦠",
          },
          SketchyPath: {
            bg: "bg-gradient-to-br from-pink-500 to-rose-600",
            text: "text-pink-700",
            bgLight: "bg-pink-50",
            icon: "🔬",
          },
          SketchyPharm: {
            bg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
            text: "text-indigo-700",
            bgLight: "bg-indigo-50",
            icon: "💊",
          },
          Pathoma: {
            bg: "bg-gradient-to-br from-orange-500 to-orange-600",
            text: "text-orange-700",
            bgLight: "bg-orange-50",
            icon: "🧬",
          },
          Physeo: {
            bg: "bg-gradient-to-br from-teal-500 to-cyan-600",
            text: "text-teal-700",
            bgLight: "bg-teal-50",
            icon: "⚗️",
          },
          Pixorize: {
            bg: "bg-gradient-to-br from-red-500 to-red-600",
            text: "text-red-700",
            bgLight: "bg-red-50",
            icon: "🎨",
          },
          Bootcamp: {
            bg: "bg-gradient-to-br from-yellow-500 to-amber-600",
            text: "text-yellow-700",
            bgLight: "bg-yellow-50",
            icon: "⛺",
          },
          InHouse: {
            bg: "bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700",
            text: "text-indigo-700",
            bgLight: "bg-indigo-50",
            icon: "🏛️",
            isPremium: true
          }
        };
        resources["B&B"] = resources["BandB"];

        const isInHouse = ankingData.primarySource && ankingData.primarySource.toLowerCase().includes("in-house");
        const primary = isInHouse ? resources.InHouse : (resources[ankingData.primarySource] || resources["FirstAid"]);

        let html = `
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full ${isDark
            ? "bg-dark-surface/50 border border-dark-border"
            : "bg-white/50 border border-claude-border/20"
          } shadow-lg mb-4">
                                <span class="text-3xl">${isInHouse ? "🎓" : "🎯"}</span>
                                <h3 class="text-xl font-bold ${isDark
            ? "text-dark-text"
            : "text-claude-text"
          }">${isInHouse ? "Institutional Material" : "Recommended Resources"}</h3>
                            </div>
                            <p class="text-sm ${isDark
            ? "text-dark-muted"
            : "text-claude-muted"
          }">${isInHouse ? "Focus on core lecture content" : "Based on AnKing tag analysis"}</p>
                        </div>
                        
                        <!-- Primary Resource -->
                        <div class="mb-8">
                            <div class="relative overflow-hidden rounded-3xl ${primary.isPremium
            ? (isDark ? "bg-dark-surface border-2 border-indigo-500/30 shadow-[0_0_50px_rgba(79,70,229,0.15)]" : "bg-claude-bg border-2 border-indigo-100 shadow-[0_0_40px_rgba(79,70,229,0.08)]")
            : (isDark ? "bg-dark-surface border-2 border-dark-accent" : "bg-claude-bg border-2 border-claude-accent")
          } p-12 text-center transform transition-all duration-500">
                                
                                ${isInHouse ? `
                                    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 24px 24px;"></div>
                                    
                                    <div class="relative flex flex-col items-center">
                                        <!-- Centered Large Logo -->
                                        <div class="w-32 h-32 mb-8 rounded-full ${primary.bg} text-white flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] animate-float">
                                            <span class="text-6xl">${primary.icon}</span>
                                        </div>

                                        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-indigo-500/20">
                                            <span class="animate-pulse">✨</span> High Priority Match
                                        </div>

                                        <h4 class="text-3xl font-serif mb-4 ${isDark ? "text-dark-text" : "text-claude-text"}">
                                            Institutional Focus Required
                                        </h4>
                                        
                                        <p class="text-xl ${isDark ? "text-dark-muted" : "text-claude-muted"} max-w-lg mx-auto leading-relaxed mb-8">
                                            Focus on in-house material; no strong 3rd party match was found for this specific content.
                                        </p>

                                        <div class="flex flex-col items-center">
                                            <span class="text-xs font-bold uppercase tracking-widest ${isDark ? "text-indigo-400/60" : "text-indigo-500/60"} mb-2">Lecture Reference</span>
                                            <span class="text-lg font-medium ${isDark ? "text-dark-text" : "text-claude-text"}">
                                                ${ankingData.chapter.replace(/_/g, " ").replace(/>/g, " › ")}
                                            </span>
                                        </div>
                                    </div>
                                ` : `
                                    <div class="relative flex flex-col items-center">
                                        <div class="flex items-center gap-3 px-5 py-2.5 rounded-xl ${primary.bg} text-white font-bold text-lg shadow-lg mb-6">
                                            <span class="text-2xl">${primary.icon}</span>
                                            <span>${ankingData.primarySource}</span>
                                        </div>
                                        <div class="px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold uppercase flex items-center gap-1 shadow-md mb-6">
                                            <span>⭐</span> Best Match
                                        </div>
                                        <h4 class="text-sm font-bold uppercase tracking-widest ${isDark ? "text-dark-muted" : "text-claude-muted"} mb-2">Topic / Chapter</h4>
                                        <p class="text-2xl font-serif ${isDark ? "text-dark-text" : "text-claude-text"} leading-tight">
                                            ${ankingData.chapter.replace(/_/g, " ").replace(/>/g, " › ")}
                                        </p>
                                    </div>
                                `}
                            </div>
                        </div>
                `;

        if (ankingData.alternatives && ankingData.alternatives.length > 0) {
          html += `
                        <div class="mb-6">
                            <h4 class="text-sm font-bold uppercase tracking-wider ${isDark
              ? "text-dark-muted"
              : "text-claude-muted"
            } mb-4 flex items-center gap-2">
                                <span class="w-8 h-px ${isDark
              ? "bg-dark-border"
              : "bg-solarized-base1/30"
            }"></span>
                                <span>Additional Resources</span>
                                <span class="flex-1 h-px ${isDark
              ? "bg-dark-border"
              : "bg-solarized-base1/30"
            }"></span>
                            </h4>
                            <div class="grid gap-4">
                    `;

          ankingData.alternatives.slice(0, 5).forEach((alt) => {
            const altStyle = resources[alt.resource] || resources["FirstAid"];
            html += `
                            <div class="group rounded-xl ${isDark
                ? "bg-dark-surface/30 hover:bg-dark-surface border border-dark-border"
                : "bg-claude-surface/30 hover:bg-white border border-claude-border/10"
              } p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                                <div class="flex items-start gap-4">
                                    <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg ${altStyle.bg
              } text-white font-semibold text-sm shadow-md flex-shrink-0">
                                        <span>${altStyle.icon}</span>
                                        <span>${alt.resource}</span>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm ${isDark
                ? "text-dark-muted"
                : "text-claude-text"
              } leading-relaxed">
                                            ${alt.chapter
                .replace(/_/g, " ")
                .replace(/>/g, " › ")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `;
          });

          html += `
                            </div>
                        </div>
                    `;
        }

        html += "</div>";
        contentDiv.innerHTML = html;
      } else {
        contentDiv.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-20 text-center">
                        <div class="w-32 h-32 mb-6 rounded-full ${isDark ? "bg-dark-surface" : "bg-claude-surface"
          } flex items-center justify-center shadow-lg">
                            <span class="text-6xl">🏫</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 ${isDark ? "text-dark-text" : "text-claude-text"
          }">In-House Lecture is Best</h3>
                        <p class="text-lg ${isDark ? "text-dark-muted" : "text-claude-muted"
          } max-w-md mx-auto leading-relaxed">
                            This lecture doesn't have a strong match with third-party resources. Focus on your in-house materials!
                        </p>
                    </div>
                `;
      }

      tocDiv.classList.add("hidden");
      // tocToggle visibility logic removed to keep buttons persistent
    } else {
      // Active Recall Toggle remains visible for all tabs
    }
  } catch (e) {
    console.error("Error rendering tab content:", e);
    contentDiv.innerHTML = `<div class="p-8 text-center text-red-500">Error loading content: ${e.message}</div>`;
  }
}

function generateTableOfContents() {
  const toc = document.getElementById("tableOfContents");
  const headings = document
    .getElementById("tabContent")
    .querySelectorAll("h1, h2, h3");
  if (headings.length === 0) {
    toc.innerHTML = "";
    return;
  }

  let html =
    '<h3 class="text-sm font-bold uppercase tracking-wider mb-4 ' +
    (isDark ? "text-dark-muted" : "text-claude-muted") +
    '">Contents</h3><nav class="space-y-1">';
  headings.forEach((h, index) => {
    const id = "heading-" + index;
    h.id = id;
    const level = parseInt(h.tagName[1]);
    const padding = (level - 1) * 12;
    html += `<a href="#" onclick="document.getElementById('${id}').scrollIntoView({behavior: 'smooth'}); return false;" data-target="${id}" class="block text-sm py-1 toc-link transition-colors duration-200 ${isDark
      ? "text-dark-text hover:text-dark-accent"
      : "text-claude-text hover:text-claude-accent"
      }" style="padding-left: ${padding}px">${h.textContent}</a>`;
  });
  html += "</nav>";
  toc.innerHTML = html;
}

function renderMarkdown(html) {
  if (!html) return "";

  // Handle escaped newlines from JSON/JS strings
  html = html.replace(/\\n/g, "<br/>");

  // Pre-process: Ensure headers followed by tables have double newlines
  // Matches: # Header \n | Table (Fixes persistent merging issue)
  html = html.replace(/^(#{1,6} [^\n]+)\n(\|)/gm, '$1\n\n$2');

  // Auto-Link Glossary Terms (Exclude Headings)
  if (selectedLecture.glossary && selectedLecture.glossary.length > 0) {
    // Split by lines to process headings separately
    const lines = html.split("\n");
    html = lines
      .map((line) => {
        // Skip headings
        if (line.trim().startsWith("#")) return line;

        let processedLine = line;
        selectedLecture.glossary.forEach((g) => {
          // Match whole words, case insensitive, but avoid matching inside HTML tags
          // Also verify we are not inside a link or existing tag
          const regex = new RegExp(`\\b(${g.term})\\b(?![^<]*>)`, "gi");
          processedLine = processedLine.replace(
            regex,
            `<span class="recall-target border-b-2 border-dashed border-indigo-400 cursor-help relative group/tooltip">$1<span class="invisible group-hover/tooltip:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-sm rounded shadow-lg z-50 pointer-events-none transition-none">$2</span></span>`
          );
        });
        return processedLine;
      })
      .join("\n");
  }

  // Table parsing - Improved Regex for Robustness
  // Matches:
  // 1. Start of line or string
  // 2. Optional whitespace
  // 3. A pipe character
  // 4. Content
  // 5. Repeated for multiple lines
  html = html.replace(/(\n|^)(\s*\|.*\|\s*(\r?\n|$))+/g, function (match) {
    const rows = match
      .trim()
      .split(/\r?\n/)
      .filter((row) => row.trim());
    if (rows.length < 2) return match;

    // Check for separator row (must contain only - : | and spaces)
    const secondRow = rows[1].trim();
    if (!/^\|?[\s\-:|]+\|?$/.test(secondRow)) {
      return match;
    }

    const headerRow = rows[0];
    const bodyRows = rows.slice(2);

    const headerCells = headerRow
      .split("|")
      // Remove first/last empty elements if pipes are at edges
      .filter((c, i, arr) => {
        if (i === 0 && c.trim() === "") return false;
        if (i === arr.length - 1 && c.trim() === "") return false;
        return true;
      })
      .map((c) => c.trim());

    let tableHtml =
      '<div class="overflow-x-auto rounded-xl border ' +
      (isDark ? "border-dark-border" : "border-claude-border/30") +
      ' shadow-lg my-8"><table class="min-w-full divide-y ' +
      (isDark ? "divide-dark-border" : "divide-solarized-base1/20") +
      '"><thead class="' +
      (isDark ? "bg-dark-surface" : "bg-claude-surface") +
      '"><tr>';

    headerCells.forEach((cell) => {
      tableHtml +=
        '<th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider font-sans ' +
        (isDark ? "text-dark-accent" : "text-claude-accent") +
        ' sticky top-0">' +
        cell +
        "</th>";
    });

    tableHtml +=
      '</tr></thead><tbody class="divide-y ' +
      (isDark
        ? "divide-dark-border bg-dark-bg"
        : "divide-claude-border bg-claude-bg") +
      '">';

    bodyRows.forEach((row) => {
      const cells = row
        .split("|")
        .filter((c, i, arr) => {
          if (i === 0 && c.trim() === "") return false;
          if (i === arr.length - 1 && c.trim() === "") return false;
          return true;
        });

      tableHtml +=
        '<tr class="' +
        (isDark ? "hover:bg-dark-surface" : "hover:bg-claude-surface/30") +
        ' transition-colors duration-200">';
      cells.forEach((cell) => {
        const formatted = cell.trim().replace(/<br>/g, "<br/>");
        tableHtml +=
          '<td class="px-6 py-4 text-base leading-relaxed font-serif ' +
          (isDark ? "text-dark-muted" : "text-claude-text") +
          '">' +
          formatted +
          "</td>";
      });
      tableHtml += "</tr>";
    });

    return "\n" + tableHtml + "</tbody></table></div>\n\n";
  });

  // High Yield Callouts
  html = html.replace(
    /:::highyield\s*([\s\S]*?):::/g,
    function (match, content) {
      return (
        '<div class="my-8 p-6 rounded-xl border-l-8 ' +
        (isDark
          ? "border-yellow-500 bg-yellow-500/10"
          : "border-yellow-400 bg-yellow-50") +
        ' shadow-sm"><div class="flex items-center gap-3 mb-3"><span class="text-2xl">⚡</span><h4 class="text-lg font-bold uppercase tracking-wide font-sans ' +
        (isDark ? "text-yellow-400" : "text-yellow-700") +
        '">High Yield</h4></div><div class="text-lg font-serif leading-relaxed ' +
        (isDark ? "text-dark-text" : "text-claude-text") +
        '">' +
        content.trim().replace(/\n/g, "<br/>") +
        "</div></div>"
      );
    }
  );

  // Clinical Pearls (Block Style to match Correlates)
  html = html.replace(/:::pearl\s*([\s\S]*?):::/g, function (match, content) {
    return (
      '<div class="my-8 p-6 rounded-xl border-l-8 ' +
      (isDark
        ? "border-orange-500 bg-orange-500/10"
        : "border-orange-400 bg-orange-50") +
      ' shadow-sm"><div class="flex items-center gap-3 mb-3"><span class="text-2xl">💡</span><h4 class="text-lg font-bold uppercase tracking-wide font-sans ' +
      (isDark ? "text-orange-400" : "text-orange-700") +
      '">Clinical Pearl</h4></div><div class="text-lg font-serif leading-relaxed ' +
      (isDark ? "text-dark-text" : "text-claude-text") +
      '">' +
      content.trim().replace(/\n/g, "<br/>") +
      "</div></div>"
    );
  });

  // Clinical Correlates (Red Block with List Support)
  html = html.replace(
    /:::correlate\s*([\s\S]*?):::/g,
    function (match, content) {
      const lines = content.trim().split("\n");
      let processedContent = "";
      let inList = false;

      lines.forEach((line) => {
        line = line.trim();
        if (/^[\*\-]\s/.test(line)) {
          if (!inList) {
            processedContent +=
              '<ul class="list-disc list-outside ml-6 space-y-2 marker:' +
              (isDark ? "text-red-400" : "text-red-700") +
              '">';
            inList = true;
          }
          const itemText = line
            .replace(/^[\*\-]\s*/, "")
            .replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="font-bold text-claude-text dark:text-dark-text">$1</strong>'
            );
          processedContent +=
            '<li class="text-lg font-serif leading-relaxed ' +
            (isDark ? "text-dark-text" : "text-claude-text") +
            '">' +
            itemText +
            "</li>";
        } else {
          if (inList) {
            processedContent += "</ul>";
            inList = false;
          }
          if (line.length > 0) {
            // Fix: Just parse bold syntax normally, don't strip leading/trailing chars indiscriminately
            let processedLine = line.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="font-bold text-claude-text dark:text-dark-text">$1</strong>'
            );

            // Check if it's a "key: value" pair that should be bolded automatically?
            // The previous code might have been trying to handle "Title: Value" lines by stripping stars.
            // If the prompt now forbids stars in titles, we should be safer.
            // Let's just wrap non-list items in P tags.

            processedContent +=
              '<p class="mb-2 text-lg font-serif leading-relaxed ' +
              (isDark ? "text-dark-text" : "text-claude-text") +
              '">' +
              processedLine +
              "</p>";
          }
        }
      });
      if (inList) processedContent += "</ul>";

      return (
        '<div class="my-8 p-6 rounded-xl border-l-8 ' +
        (isDark ? "border-red-500 bg-red-500/10" : "border-red-500 bg-red-50") +
        ' shadow-sm"><div class="flex items-center gap-3 mb-3"><span class="text-2xl">🩺</span><h4 class="text-lg font-bold uppercase tracking-wide font-sans ' +
        (isDark ? "text-red-400" : "text-red-700") +
        '">Clinical Correlate</h4></div><div class="space-y-2">' +
        processedContent +
        "</div></div>"
      );
    }
  );

  // Mnemonic (Purple Block)
  html = html.replace(
    /:::mnemonic\s*([\s\S]*?):::/g,
    function (match, content) {
      const lines = content.trim().split("\n");
      let processedContent = "";
      let inList = false;

      lines.forEach((line) => {
        line = line.trim();
        if (/^[\*\-]\s/.test(line)) {
          if (!inList) {
            processedContent +=
              '<ul class="list-disc list-outside ml-6 space-y-2 marker:' +
              (isDark ? "text-indigo-400" : "text-indigo-700") +
              '">';
            inList = true;
          }
          const itemText = line
            .replace(/^[\*\-]\s*/, "")
            .replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="font-bold text-claude-text dark:text-dark-text">$1</strong>'
            );
          processedContent +=
            '<li class="text-lg font-serif leading-relaxed ' +
            (isDark ? "text-dark-text" : "text-claude-text") +
            '">' +
            itemText +
            "</li>";
        } else {
          if (inList) {
            processedContent += "</ul>";
            inList = false;
          }
          if (line.length > 0) {
            const processedLine = line.replace(/^[\s\*]+|[\s\*]+$/g, "");
            processedContent +=
              '<p class="mb-2 text-lg font-serif leading-relaxed ' +
              (isDark ? "text-dark-text" : "text-claude-text") +
              '"><strong class="font-bold text-claude-text dark:text-dark-text">' +
              processedLine +
              "</strong></p>";
          }
        }
      });
      if (inList) processedContent += "</ul>";

      return (
        '<div class="my-8 p-6 rounded-xl border-l-8 ' +
        (isDark ? "border-indigo-500 bg-indigo-500/10" : "border-indigo-500 bg-indigo-50") +
        ' shadow-sm"><div class="flex items-center gap-3 mb-3"><span class="text-2xl">🧠</span><h4 class="text-lg font-bold uppercase tracking-wide font-sans ' +
        (isDark ? "text-indigo-400" : "text-indigo-700") +
        '">Mnemonic</h4></div><div class="space-y-2">' +
        processedContent +
        "</div></div>"
      );
    }
  );

  // Slides
  html = html.replace(
    /:::slides ([^\n]+)\n([\s\S]*?):::/g,
    function (match, label, content) {
      const items = content
        .trim()
        .split("\n")
        .filter((l) => l.trim());
      let itemsHtml = "";
      items.forEach((item) => {
        const cleaned = item.replace(/^\*\s*/, "").trim();
        itemsHtml +=
          '<div class="flex gap-3 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ' +
          (isDark ? "bg-dark-accent" : "bg-solarized-cyan") +
          '"></span><span class="text-claude-text dark:text-dark-muted">' +
          cleaned +
          "</span></div>";
      });
      return (
        '<details class="my-8 group"><summary class="cursor-pointer px-6 py-4 rounded-xl border ' +
        (isDark
          ? "bg-dark-surface/50 border-dark-border hover:bg-dark-surface text-dark-accent"
          : "bg-claude-accent/5 border-claude-accent/20 hover:bg-claude-accent/10 text-claude-accent") +
        ' transition-all duration-300 flex items-center gap-3 font-bold text-sm list-none font-sans shadow-sm"><svg class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><span>Slides ' +
        label +
        '</span></summary><div class="mt-4 ml-2 pl-6 border-l-2 border-claude-border/20 dark:border-dark-border text-base font-serif leading-relaxed space-y-3 slide-up">' +
        itemsHtml +
        "</div></details>"
      );
    }
  );

  // Remove leading page breaks (dashes at start of content)
  html = html.replace(/^[\s\n]*(-{3,5}|\*{3})[\s\n]+/, "");

  // H1 (Lecture Title Style)
  html = html.replace(
    /^# (.*$)/gm,
    '<h1 class="text-4xl font-bold mb-4 pb-4 border-b border-claude-border dark:border-dark-border text-claude-text dark:text-dark-text font-display text-left">$1</h1>'
  );

  // H2 (Section Header — thin terracotta rule above)
  html = html.replace(
    /^## (.*$)/gm,
    '<div class="mt-12 mb-6 pt-8 border-t-2 border-claude-accent dark:border-dark-accent"><h2 class="text-3xl font-bold text-claude-text dark:text-dark-text font-display tracking-tight">$1</h2></div>'
  );

  // H3 (Subsections)
  html = html.replace(
    /^### (.*$)/gm,
    '<h3 class="text-2xl font-bold mt-8 mb-4 text-claude-text dark:text-dark-text font-display text-left">$1</h3>'
  );

  // H4 (Sub-subsections)
  html = html.replace(
    /^#### (.*$)/gm,
    '<h4 class="text-xl font-bold mt-6 mb-3 text-claude-text dark:text-dark-text font-display text-left">$1</h4>'
  );

  // HR (Hidden)
  html = html.replace(/^\*{3,}$/gm, "");
  html = html.replace(/^-{3,}$/gm, "");

  // Blockquotes (Pull Quote Style)
  html = html.replace(
    /^> (.*$)/gm,
    '<div class="my-10 py-6 px-8 border-t border-b border-claude-accent dark:border-dark-accent text-center italic text-xl font-display text-claude-text dark:text-dark-text leading-relaxed max-w-[85%] mx-auto">$1</div>'
  );

  // Bold
  html = html.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="recall-target font-bold text-claude-text dark:text-dark-text">$1</strong>'
  );

  // Italics
  html = html.replace(
    /(\*|_)(.*?)\1/g,
    '<em class="italic text-claude-text dark:text-dark-text">$2</em>'
  );

  // Lists (Improved Parsing & Interactivity)
  html = html.replace(/^(\s*)[\*\-]\s+(.*)$/gm, (match, indent, content) => {
    // Calculate depth based on 2-space indentation
    // 0 spaces = Level 0 (Disc)
    // 2 spaces = Level 1 (Circle)
    // 4 spaces = Level 2 (Square)
    // 6+ spaces = Level 3 (Disc/Grid)

    const spaces = indent.length;
    const level = Math.floor(spaces / 2);
    const ml = spaces * 0.5; // Rem units for margin

    let listStyle = 'list-disc';
    if (level === 1) listStyle = 'list-[circle]'; // Tailwind arbitrary value or inline style
    if (level >= 2) listStyle = 'list-[square]';

    // Using inline styles for list-style-type to ensure browser compatibility without Tailwind plugins
    let typeStyle = 'disc';
    if (level === 1) typeStyle = 'circle';
    if (level >= 2) typeStyle = 'square';

    return (
      '<ul><li class="relative pl-2 leading-relaxed text-lg text-claude-text dark:text-dark-muted font-serif hover:scale-[1.01] origin-left transition-transform duration-200 cursor-default" style="margin-left: ' +
      ml +
      'rem; list-style-type: ' + typeStyle + ';">' +
      content +
      "</li></ul>"
    );
  });

  html = html.replace(/^(\s*)\d+\.\s+(.*)$/gm, (match, indent, content) => {
    const ml = indent.length * 0.5;
    return (
      '<ol><li class="relative pl-2 leading-relaxed text-lg text-claude-text dark:text-dark-muted font-serif hover:scale-[1.01] origin-left transition-transform duration-200 cursor-default" style="margin-left: ' +
      ml +
      'rem">' +
      content +
      "</li></ol>"
    );
  });

  // Fix nested lists (naive approach: join adjacent lists)
  html = html.replace(/<\/ul>\s*<ul>/g, "");
  html = html.replace(/<\/ol>\s*<ol>/g, "");

  // Styling for lists
  html = html.replace(
    /<ul>/g,
    '<ul class="list-disc list-outside ml-6 my-6 space-y-2 marker:' +
    (isDark ? "text-dark-accent" : "text-claude-accent") +
    '">'
  );
  html = html.replace(
    /<ol>/g,
    '<ol class="list-decimal list-outside ml-6 my-6 space-y-2 marker:font-bold marker:' +
    (isDark ? "text-dark-accent" : "text-claude-accent") +
    '">'
  );

  // Subscripts (Standard Markdown ~sub~)
  html = html.replace(/~(.*?)~/g, "<sub>$1</sub>");

  // LaTeX-like Math Support (Basic)
  // 1. Remove $ delimiters for inline math
  html = html.replace(/\$([^$]+)\$/g, function (match, content) {
    let processed = content;
    // \times -> ×
    processed = processed.replace(/\\times/g, "×");
    // \text{...} -> ...
    processed = processed.replace(/\\text\{([^}]+)\}/g, "$1");
    // \frac{num}{den} -> (num / den)
    processed = processed.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1 / $2)");
    // _{...} -> <sub>...</sub>
    processed = processed.replace(/_\{([^}]+)\}/g, "<sub>$1</sub>");
    // _x -> <sub>x</sub> (single char subscript)
    processed = processed.replace(/_([a-zA-Z0-9]+)/g, "<sub>$1</sub>");

    return '<span class="font-serif italic">' + processed + "</span>";
  });

  // Images (Lazy Loading)
  html = html.replace(
    /!\[(.*?)\]\((.*?)\)/g,
    '<img src="$2" alt="$1" loading="lazy" class="rounded-xl shadow-lg my-6 max-w-full h-auto mx-auto border-4 ' +
    (isDark ? "border-dark-surface" : "border-white") +
    '">'
  );

  // Paragraphs
  html = html.replace(
    /\n\n/g,
    '</div><div class="mb-6 leading-relaxed text-lg font-serif text-claude-text dark:text-dark-text">'
  );
  html = html.replace(/\n/g, " ");

  // Slide Citations: "(Slide X)" -> Badge
  html = html.replace(
    /\(Slide\s+(\d+)\)/gi,
    '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-claude-accent/10 dark:bg-dark-accent/10 text-claude-accent dark:text-dark-accent mx-1 align-baseline cursor-default select-none" title="From Slide $1">Slide $1</span>'
  );

  // Cross-Links: "[[L102]]" -> Clickable Link
  html = html.replace(/\[\[(L\d+)\]\]/gi, function (match, lectureId) {
    const id = lectureId.toLowerCase(); // Ensure lowercase matching if your IDs are case-sensitive
    return `<button onclick="selectLecture('${id}'); return false;" class="text-claude-accent dark:text-dark-accent hover:underline font-bold transition-colors inline-flex items-center gap-0.5"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>${lectureId}</button>`;
  });



  return (
    '<div class="mb-6 leading-relaxed text-lg font-serif text-claude-text dark:text-dark-text">' +
    html +
    "</div>"
  );
}

function updateWelcomeMessage() {
  const totalCompleted = [...completedLectures].filter(id => lectures.find(l => l.id === id)).length;
  const overallPct = lectures.length ? Math.round((totalCompleted / lectures.length) * 100) : 0;

  const msg = lectures.length > 0
    ? `${lectures.length} lectures · ${overallPct}% read`
    : "No lectures loaded";
  const msgEl = document.getElementById("welcomeMessage");
  if (msgEl) msgEl.textContent = msg;

  // Issue / date in masthead
  const issueEl = document.getElementById("mastheadIssue");
  const dateEl = document.getElementById("mastheadDate");
  const now = new Date();
  if (issueEl) issueEl.textContent = `Vol. I · No. ${now.getFullYear() - 2024}`;
  if (dateEl) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    dateEl.textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;
  }

  // Compute per-block stats
  const blockStats = Object.entries(BLOCKS).map(([key, block]) => {
    const blockLectures = lectures.filter(l => {
      const bi = getBlockInfo(l.id);
      return bi && bi.key === key;
    });
    const completed = blockLectures.filter(l => completedLectures.has(l.id)).length;
    const total = blockLectures.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    const color = isDark ? block.darkColor : block.color;
    return { key, block, completed, total, pct, color };
  });

  // Pick the "lead" block:
  //   1. Currently-selected block (clicking any block in the nav or cards swaps the lead live)
  //   2. Block of the last-viewed lecture
  //   3. Most-progressed in-progress block
  //   4. First block
  const leadHintId = localStorage.getItem("onepass_last_lecture");
  const leadHintBlock = leadHintId ? getBlockInfo(leadHintId) : null;
  const inProgress = blockStats.filter(b => b.completed > 0 && b.completed < b.total);
  let lead = blockStats[0];
  if (currentBlock) {
    const fromCurrent = blockStats.find(b => b.key === currentBlock);
    if (fromCurrent) lead = fromCurrent;
  } else if (leadHintBlock) {
    const fromLast = blockStats.find(b => b.key === leadHintBlock.key);
    if (fromLast) lead = fromLast;
  } else if (inProgress.length > 0) {
    lead = inProgress.reduce((a, b) => a.pct > b.pct ? a : b);
  }
  const others = blockStats.filter(b => b.key !== lead.key);

  // Helper: next unread lectures within a block
  const upNextInBlock = (key, limit) => lectures
    .filter(l => {
      const bi = getBlockInfo(l.id);
      return bi && bi.key === key && !completedLectures.has(l.id);
    })
    .slice(0, limit);
  const leadUpNext = upNextInBlock(lead.key, 4);

  // Block nav strip — active block gets an underline in its color
  const navEl = document.getElementById("welcomeBlockNav");
  if (navEl) {
    const navHtml = blockStats.map((b, i) => {
      const isActive = b.key === lead.key;
      const activeStyle = isActive
        ? `border-bottom: 2px solid ${b.color}; padding-bottom: 2px;`
        : '';
      return `
        <button onclick="openBlock('${b.key}')" class="hover:opacity-70 transition-opacity" style="color: ${b.color}; ${activeStyle}">${b.block.shortName}</button>
        ${i < blockStats.length - 1 ? '<span class="text-claude-border dark:text-dark-border">·</span>' : ''}
      `;
    }).join('');
    navEl.innerHTML = `
      <button onclick="document.getElementById('searchInput').focus()" class="text-claude-text dark:text-dark-text hover:opacity-70 transition-opacity">Latest</button>
      <span class="text-claude-border dark:text-dark-border">·</span>
      ${navHtml}
    `;
  }

  // Continue reading — strictly the LAST LECTURE the user opened, with a Resume button.
  // Distinct in purpose from the Lead block (which is a block-level entry point).
  const continueEl = document.getElementById("continueReading");
  const lastId = localStorage.getItem("onepass_last_lecture");
  const lastMeta = lastId ? lectures.find(l => l.id === lastId) : null;
  if (continueEl) {
    if (lastMeta) {
      const lastBlock = getBlockInfo(lastMeta.id);
      const lbColor = lastBlock ? (isDark ? lastBlock.darkColor : lastBlock.color) : "#D97757";
      const lastTab = (lectureTabMemory && lectureTabMemory[lastId]) || "summary";
      const tabLabel = lastTab.charAt(0).toUpperCase() + lastTab.slice(1).replace("-", " ");
      const isComplete = completedLectures.has(lastMeta.id);
      continueEl.classList.remove("hidden");
      continueEl.innerHTML = `
        <div class="flex items-center gap-3 mb-3">
          <span class="text-[10px] font-sans font-bold uppercase tracking-[0.3em]" style="color: ${lbColor}">Pick up where you left off</span>
          <span class="flex-1 h-px" style="background: ${lbColor}; opacity: 0.4;"></span>
          <span class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted">${isComplete ? 'Completed' : 'In progress'} · ${tabLabel}</span>
        </div>
        <div class="grid md:grid-cols-[auto_1fr_auto] gap-4 md:gap-6 items-center">
          <div class="masthead-wordmark text-claude-muted dark:text-dark-muted leading-none" style="font-size: clamp(2.25rem, 4.5vw, 3.5rem); color: ${lbColor}; opacity: 0.85;">${(lastMeta.id || "").toUpperCase()}</div>
          <button onclick="selectLecture('${lastMeta.id}')" class="group text-left">
            <div class="text-[10px] font-sans uppercase tracking-[0.25em] mb-1" style="color: ${lbColor}">${lastMeta.module || ''}</div>
            <h3 class="font-display font-bold text-xl md:text-2xl leading-tight text-claude-text dark:text-dark-text group-hover:underline decoration-1 underline-offset-4" style="text-decoration-color: ${lbColor}">${displayTitle(lastMeta.title)}</h3>
          </button>
          <button onclick="selectLecture('${lastMeta.id}')" class="hidden md:flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.25em] border border-claude-text dark:border-dark-text px-4 py-2 hover:bg-claude-text hover:text-claude-bg dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors">
            Resume
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      `;
    } else {
      continueEl.classList.add("hidden");
      continueEl.innerHTML = "";
    }
  }

  // Lead + 3-up
  const cardsDiv = document.getElementById("welcomeBlockCards");
  if (!cardsDiv) return;

  const leadStatus = lead.completed === 0 ? "Not started"
    : lead.completed === lead.total ? "Complete"
    : "In progress";

  // Roman numerals for the secondary cards
  const roman = ["II", "III", "IV", "V"];

  // Block initial for the lead card visual anchor (e.g. "N" for Neurology)
  const leadInitial = (lead.block.name || "?").charAt(0).toUpperCase();

  cardsDiv.innerHTML = `
    <!-- Lead block: editorial article card with giant initial visual anchor -->
    <div class="mb-10 md:mb-12">
      <!-- Issue numeral for this lead (matches Roman numerals on secondaries) -->
      <div class="flex items-baseline gap-3 mb-3">
        <span class="masthead-wordmark opacity-30 leading-none text-3xl" style="color: ${lead.color}">I</span>
        <span class="flex-1 h-[2px]" style="background: ${lead.color}"></span>
      </div>
      <div class="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start mb-6">
        <button onclick="openBlock('${lead.key}')" class="group text-left">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-[10px] font-sans font-bold uppercase tracking-[0.3em]" style="color: ${lead.color}">Lead Block · ${lead.block.shortName}</span>
            <span class="flex-1 h-px" style="background: ${lead.color}; opacity: 0.4;"></span>
            <span class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted">${leadStatus}</span>
          </div>
          <h2 class="masthead-wordmark leading-[1.0] text-claude-text dark:text-dark-text mb-3 group-hover:underline decoration-1 underline-offset-[6px]" style="font-size: clamp(2.5rem, 6vw, 4.5rem); text-decoration-color: ${lead.color};">
            ${lead.block.name}
          </h2>
          <p class="font-serif italic text-base md:text-lg text-claude-muted dark:text-dark-muted leading-snug max-w-prose mb-4">
            ${lead.block.range} &nbsp;·&nbsp; ${lead.total} lecture${lead.total !== 1 ? 's' : ''}.
            ${lead.completed > 0 ? `You have read ${lead.completed} of ${lead.total}.` : 'Begin the block whenever you are ready.'}
          </p>
          <!-- Inline progress (replaces sidebar) -->
          <div class="flex items-baseline gap-4 max-w-md">
            <span class="font-display font-bold leading-none" style="font-size: clamp(2rem, 3.5vw, 3rem); color: ${lead.color}">${lead.pct}<span class="text-xl">%</span></span>
            <div class="flex-1">
              <div class="w-full h-[2px] bg-claude-border dark:bg-dark-border overflow-hidden mb-1">
                <div class="h-full transition-all duration-500" style="width: ${lead.pct}%; background: ${lead.color}"></div>
              </div>
              <div class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted">${lead.completed} of ${lead.total} read</div>
            </div>
          </div>
        </button>
        <!-- Giant block initial as visual anchor -->
        <button onclick="openBlock('${lead.key}')" class="hidden md:block self-stretch flex items-center justify-center px-2" aria-label="Open ${lead.block.name} block">
          <div class="masthead-wordmark leading-none select-none" style="font-size: clamp(8rem, 18vw, 16rem); color: ${lead.color}; line-height: 0.85;">${leadInitial}</div>
        </button>
      </div>

      ${leadUpNext.length > 0 ? `
        <div class="border-t border-claude-border dark:border-dark-border pt-5">
          <div class="flex items-baseline gap-3 mb-3">
            <span class="text-[10px] font-sans font-bold uppercase tracking-[0.3em]" style="color: ${lead.color}">Up Next in ${lead.block.shortName}</span>
            <span class="flex-1 h-px bg-claude-border dark:bg-dark-border"></span>
            <button onclick="openBlock('${lead.key}')" class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted hover:text-claude-text dark:hover:text-dark-text">View all →</button>
          </div>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-1.5">
            ${leadUpNext.map(l => `
              <button onclick="selectLecture('${l.id}')" class="group text-left flex items-baseline gap-3 py-1.5 border-b border-claude-border/50 dark:border-dark-border/50 hover:border-claude-text dark:hover:border-dark-text transition-colors">
                <span class="text-[10px] font-mono font-bold tracking-wider w-9 shrink-0" style="color: ${lead.color}">${(l.id || "").toUpperCase()}</span>
                <span class="flex-1 font-serif text-sm text-claude-text dark:text-dark-text leading-snug truncate group-hover:underline decoration-1 underline-offset-2">${displayTitle(l.title)}</span>
                <span class="text-[10px] font-sans text-claude-muted dark:text-dark-muted opacity-70 shrink-0">${l.readingTime || 5}m</span>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>

    <!-- Section divider -->
    <div class="flex items-baseline gap-3 mb-5">
      <span class="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-claude-text dark:text-dark-text">Also in this issue</span>
      <span class="flex-1 h-px bg-claude-border dark:bg-dark-border"></span>
    </div>

    <!-- 3-up secondary blocks with sample lectures -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      ${others.map((o, i) => {
        const sampleLectures = upNextInBlock(o.key, 2);
        return `
        <div class="flex flex-col">
          <button onclick="openBlock('${o.key}')" class="group text-left transition-all duration-200">
            <div class="flex items-baseline gap-3 mb-2">
              <span class="masthead-wordmark opacity-30 leading-none text-2xl" style="color: ${o.color}">${roman[i] || ''}</span>
              <span class="flex-1 h-[2px]" style="background: ${o.color}"></span>
            </div>
            <div class="text-[10px] font-sans font-bold uppercase tracking-[0.3em] mb-1.5" style="color: ${o.color}">${o.block.shortName}</div>
            <h3 class="font-display font-bold text-2xl leading-[1.1] text-claude-text dark:text-dark-text mb-2 group-hover:underline decoration-1 underline-offset-4">${o.block.name}</h3>
            <p class="font-serif italic text-xs text-claude-muted dark:text-dark-muted mb-3">${o.block.range} &nbsp;·&nbsp; ${o.total} lectures</p>
          </button>
          ${sampleLectures.length > 0 ? `
            <div class="space-y-1.5 mb-3 flex-1">
              ${sampleLectures.map(l => `
                <button onclick="selectLecture('${l.id}')" class="group text-left w-full flex items-baseline gap-2 py-1 border-t border-claude-border/50 dark:border-dark-border/50 hover:border-claude-text dark:hover:border-dark-text transition-colors">
                  <span class="text-[9px] font-mono font-bold tracking-wider w-7 shrink-0 opacity-60" style="color: ${o.color}">${(l.id || "").toUpperCase()}</span>
                  <span class="flex-1 font-serif text-[13px] text-claude-text dark:text-dark-text leading-tight truncate group-hover:underline decoration-1 underline-offset-2">${displayTitle(l.title)}</span>
                </button>
              `).join('')}
            </div>
          ` : '<div class="flex-1"></div>'}
          <button onclick="openBlock('${o.key}')" class="text-left">
            <div class="w-full h-[1px] bg-claude-border dark:bg-dark-border overflow-hidden">
              <div class="h-full transition-all duration-500" style="height: 2px; width: ${o.pct}%; background: ${o.color}"></div>
            </div>
            <div class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted mt-2">${o.pct}% &nbsp;·&nbsp; ${o.completed} of ${o.total}</div>
          </button>
        </div>
      `}).join('')}
    </div>

    <!-- Full curriculum index -->
    <section class="mt-14 pt-8 border-t-2 border-claude-text dark:border-dark-text">
      <div class="flex items-baseline gap-3 mb-6">
        <span class="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-claude-text dark:text-dark-text">Index</span>
        <span class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted">Full curriculum</span>
        <span class="flex-1 h-px bg-claude-border dark:bg-dark-border"></span>
        <span class="text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted">${lectures.length} lectures</span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
        ${blockStats.map(b => {
          const blockLectures = lectures.filter(l => {
            const bi = getBlockInfo(l.id);
            return bi && bi.key === b.key;
          });
          return `
            <div>
              <div class="flex items-baseline gap-2 mb-2 pb-2 border-b" style="border-color: ${b.color}">
                <span class="text-[10px] font-sans font-bold uppercase tracking-[0.25em]" style="color: ${b.color}">${b.block.shortName}</span>
                <span class="text-[10px] font-sans uppercase tracking-[0.2em] text-claude-muted dark:text-dark-muted ml-auto">${b.completed}/${b.total}</span>
              </div>
              <div class="flex flex-col">
                ${blockLectures.map(l => {
                  const isComplete = completedLectures.has(l.id);
                  return `
                    <button onclick="selectLecture('${l.id}')" class="group text-left flex items-baseline gap-2 py-0.5 hover:bg-claude-surface/50 dark:hover:bg-dark-surface/30 -mx-1 px-1 transition-colors ${isComplete ? 'opacity-50' : ''}">
                      <span class="text-[10px] font-mono font-bold tracking-wider w-9 shrink-0" style="color: ${b.color}">${(l.id || "").toUpperCase()}</span>
                      <span class="flex-1 font-serif text-[12px] leading-tight text-claude-text dark:text-dark-text truncate group-hover:underline decoration-1 underline-offset-2">${displayTitle(l.title)}</span>
                      ${isComplete ? `<svg class="w-2.5 h-2.5 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>` : ''}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <!-- Colophon footer -->
    <footer class="mt-12 pt-6 border-t-2 border-claude-text dark:border-dark-text">
      <div class="flex flex-wrap items-center justify-between gap-4 text-[10px] font-sans uppercase tracking-[0.3em] text-claude-muted dark:text-dark-muted mb-3">
        <span>OnePass · A Curriculum Reader</span>
        <span>Created by QH</span>
      </div>
      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-sans uppercase tracking-[0.25em] text-claude-muted dark:text-dark-muted">
        <span class="flex items-center gap-1.5"><kbd class="border border-claude-border dark:border-dark-border px-1.5 py-0.5 normal-case tracking-normal">/</kbd> Search</span>
        <span class="flex items-center gap-1.5"><kbd class="border border-claude-border dark:border-dark-border px-1.5 py-0.5 normal-case tracking-normal">J</kbd><kbd class="border border-claude-border dark:border-dark-border px-1.5 py-0.5 normal-case tracking-normal">K</kbd> Prev / Next lecture</span>
        <span class="flex items-center gap-1.5"><kbd class="border border-claude-border dark:border-dark-border px-1.5 py-0.5 normal-case tracking-normal">[</kbd> Toggle sidebar</span>
        <span class="flex items-center gap-1.5"><kbd class="border border-claude-border dark:border-dark-border px-1.5 py-0.5 normal-case tracking-normal">C</kbd> Mark complete</span>
        <span class="flex items-center gap-1.5"><kbd class="border border-claude-border dark:border-dark-border px-1.5 py-0.5 normal-case tracking-normal">Esc</kbd> Close</span>
      </div>
    </footer>
  `;
}

// New function renderMindMapTree added here (Global Scope)
function renderMindMapTree(data) {
  const container = document.getElementById("mindmap-container");
  if (!container) return;

  // Clear existing
  container.innerHTML = "";

  const width = container.clientWidth;
  const height = container.clientHeight;

  // Zoom behavior
  const zoom = d3
    .zoom()
    .scaleExtent([0.1, 3])
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

  const svg = d3
    .select("#mindmap-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .call(zoom)
    .on("dblclick.zoom", null); // Disable double click zoom

  // Define Drop Shadow Filter
  const defs = svg.append("defs");
  const filter = defs
    .append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%");

  filter
    .append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 3)
    .attr("result", "blur");

  filter
    .append("feOffset")
    .attr("in", "blur")
    .attr("dx", 2)
    .attr("dy", 2)
    .attr("result", "offsetBlur");

  const feMerge = filter.append("feMerge");
  feMerge.append("feMergeNode").attr("in", "offsetBlur");
  feMerge.append("feMergeNode").attr("in", "SourceGraphic");

  const g = svg
    .append("g")
    .attr("transform", `translate(${100},${height / 2})`);

  let i = 0,
    duration = 500,
    root;

  // Increased spacing for clarity
  const treemap = d3.tree().nodeSize([45, 250]);

  root = d3.hierarchy(data, function (d) {
    return d.children;
  });
  root.x0 = height / 2;
  root.y0 = 0;

  // Collapse after level 2 initially for cleaner view
  root.children.forEach(collapse);

  update(root);

  // Initial Zoom to fit
  // Transition to centered view
  svg.call(
    zoom.transform,
    d3.zoomIdentity.translate(100, height / 2).scale(0.8)
  );

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  function update(source) {
    const treeData = treemap(root);
    const nodes = treeData.descendants();
    const links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
      d.y = d.depth * 280;
    });

    // ****************** Nodes section ******************

    const node = g.selectAll("g.node").data(nodes, function (d) {
      return d.id || (d.id = ++i);
    });

    const nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function (d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on("click", click);

    // Styling functions
    const getNodeColor = (d) => {
      if (d._children) return isDark ? "#268bd2" : "#268bd2"; // Collapsed (Blue)
      // Depth colors
      if (d.depth === 0) return isDark ? "#6c71c4" : "#6c71c4"; // Root (Violet)
      if (d.depth === 1) return isDark ? "#2aa198" : "#2aa198"; // L1 (Cyan)
      if (d.depth === 2) return isDark ? "#859900" : "#859900"; // L2 (Green)
      return isDark ? "#073642" : "#ffffff"; // Leaf (Surface)
    };

    const getNodeStroke = (d) => {
      if (d.depth === 0) return "none";
      return isDark ? "#586e75" : "#268bd2";
    };

    const getTextColor = (d) => {
      // White text for colored nodes (Root, L1, L2, or Collapsed)
      if (d.depth < 3 || d._children) return "#ffffff";
      return isDark ? "#eee8d5" : "#586e75";
    };

    // Node Rects
    nodeEnter
      .append("rect")
      .attr("class", "node-rect")
      .attr("rx", 8) // Pill shape
      .attr("ry", 8)
      .attr("width", (d) => Math.max(120, d.data.name.length * 8 + 20))
      .attr("height", 36)
      .attr("y", -18)
      .attr("x", -10)
      .style("fill", (d) => getNodeColor(d))
      .style("stroke", (d) =>
        d.depth > 2 ? (isDark ? "#586e75" : "#e0e0e0") : "none"
      ) // Border only for leaves
      .style("stroke-width", "1.5px")
      .style("filter", "url(#drop-shadow)")
      .style("cursor", "pointer")
      .style("transition", "fill 0.3s");

    // Add Tooltip (Title)
    nodeEnter
      .append("title")
      .text((d) =>
        d.data.definition
          ? `${d.data.name}\n\n${d.data.definition}`
          : d.data.name
      );

    // Labels
    nodeEnter
      .append("text")
      .attr("dy", ".35em")
      .attr("x", (d) => 10) // Padding left
      .attr("text-anchor", "start")
      .text(function (d) {
        // Truncate long names
        const maxLen = 40;
        return d.data.name.length > maxLen
          ? d.data.name.substring(0, maxLen) + "..."
          : d.data.name;
      })
      .style("font-family", "'Inter', sans-serif")
      .style("font-size", "13px")
      .style("font-weight", (d) => (d.depth < 3 ? "600" : "400"))
      .style("fill", (d) => getTextColor(d))
      .style("pointer-events", "none"); // Let clicks pass to rect

    // UPDATE
    const nodeUpdate = node
      .merge(nodeEnter)
      .transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // Update styles on state change
    nodeUpdate
      .select("rect")
      .style("fill", (d) => getNodeColor(d))
      .attr("width", (d) => Math.max(120, d.data.name.length * 8 + 20)); // Recalc width

    nodeUpdate.select("text").style("fill", (d) => getTextColor(d));

    // EXIT
    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    nodeExit.select("rect").attr("r", 1e-6);

    nodeExit.select("text").style("fill-opacity", 1e-6);

    // ****************** Links section ******************

    const link = g.selectAll("path.link").data(links, function (d) {
      return d.id;
    });

    const linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", function (d) {
        const o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      })
      .style("fill", "none")
      .style("stroke", isDark ? "#586e75" : "#93a1a1")
      .style("stroke-width", "1.5px")
      .style("stroke-opacity", "0.4");

    const linkUpdate = link
      .merge(linkEnter)
      .transition()
      .duration(duration)
      .attr("d", function (d) {
        return diagonal(d, d.parent);
      });

    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", function (d) {
        const o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    nodes.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    function diagonal(s, d) {
      const path = `M ${s.y} ${s.x}
                    C ${(s.y + d.y) / 2} ${s.x},
                      ${(s.y + d.y) / 2} ${d.x},
                      ${d.y} ${d.x}`;

      return path;
    }

    function click(event, d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }
  }
}

function setupPearlbookModal() {
  const modal = document.getElementById('pearlbookModal');
  const btn = document.getElementById('pearlbookToggle');
  const closeBtn = document.getElementById('closePearlbook');
  const contentDiv = document.getElementById('pearlbookContent');

  if (!modal || !btn || !closeBtn) return;

  function openModal() {
    if (!selectedLecture) return;

    // Color-contextualize the Pearlbook header to match the active block
    const blockMeta = getBlockInfo(selectedLecture.id);
    if (blockMeta) {
      const blockColor = isDark ? blockMeta.darkColor : blockMeta.color;
      const kicker = document.getElementById('pearlbookKicker');
      const rule = document.getElementById('pearlbookKickerRule');
      const accent = document.getElementById('pearlbookAccent');
      if (kicker) {
        kicker.style.color = blockColor;
        kicker.textContent = `${blockMeta.shortName} · Pull-out`;
      }
      if (rule) rule.style.background = blockColor;
      if (accent) accent.style.color = blockColor;
    }
    const lectureNameEl = document.getElementById('pearlbookLectureName');
    if (lectureNameEl) lectureNameEl.textContent = displayTitle(selectedLecture.title);

    renderPearlbookContent();
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      modal.classList.remove('opacity-0');
      modal.firstElementChild.firstElementChild.classList.remove('scale-95');
      modal.firstElementChild.firstElementChild.classList.add('scale-100');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('opacity-0');
    modal.firstElementChild.firstElementChild.classList.remove('scale-100');
    modal.firstElementChild.firstElementChild.classList.add('scale-95');

    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  function renderPearlbookContent() {
    const pearls = selectedLecture.pearls;
    contentDiv.innerHTML = '';

    if (!pearls || pearls.length === 0) {
      contentDiv.innerHTML = `
                <div class="flex flex-col items-center justify-center py-20 text-center opacity-60">
                    <svg class="w-16 h-16 mb-4 text-claude-muted dark:text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    <p class="text-xl font-sans font-medium text-claude-text dark:text-dark-text">No Pearls available for this lecture</p>
                </div>
            `;
      return;
    }

    const pearlsContainer = document.createElement("div");
    pearlsContainer.className = "flex flex-col gap-8";

    const blockMeta = selectedLecture ? getBlockInfo(selectedLecture.id) : null;
    const blockColor = blockMeta ? (isDark ? blockMeta.darkColor : blockMeta.color) : (isDark ? "#E8956D" : "#D97757");

    pearls.forEach((pearl, index) => {
      const pearlCard = document.createElement("div");
      pearlCard.className = `pb-8 ${index < pearls.length - 1 ? 'border-b border-claude-border dark:border-dark-border' : ''}`;

      const renderedContent = typeof renderMarkdown === "function"
        ? renderMarkdown(pearl.content)
        : pearl.content;

      pearlCard.innerHTML = `
                <div class="flex items-baseline gap-4 mb-3">
                    <span class="font-display font-bold text-3xl leading-none" style="color: ${blockColor}">${String(index + 1).padStart(2, '0')}</span>
                    <h3 class="flex-1 font-display font-bold text-xl md:text-2xl leading-tight ${isDark ? "text-dark-text" : "text-claude-text"}">${pearl.title}</h3>
                </div>
                <div class="prose dark:prose-invert max-w-none text-base leading-relaxed pl-12 ${isDark ? "text-dark-muted" : "text-claude-text"}">
                    ${renderedContent}
                </div>
            `;
      pearlsContainer.appendChild(pearlCard);
    });

    contentDiv.appendChild(pearlsContainer);
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.w-full') === e.target) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') closeModal();
  });
}

function toggleActiveRecall() {
  activeRecall = !activeRecall;

  // Update state immediately for responsiveness
  updateActiveRecallButtonState();

  // Re-render tab content to update wrapper class and ensuring content is refreshed if needed
  if (selectedLecture && activeTab === "summary") {
    const contentDiv = document.getElementById("tabContent");
    if (activeRecall) {
      contentDiv.classList.add("active-recall-mode");
    } else {
      contentDiv.classList.remove("active-recall-mode");
    }
  }
}

function updateActiveRecallButtonState() {
  const btn = document.getElementById("activeRecallToggle");
  const icon = document.getElementById("activeRecallIcon");

  if (!btn || !icon) return;

  if (activeRecall) {
    // Enabled State -> Filled Violet
    btn.classList.add("bg-claude-accent/20", "text-claude-accent", "dark:bg-dark-accent/20", "dark:text-dark-accent");
    btn.classList.remove("text-claude-text", "dark:text-dark-text");

    // Icon: Eye Off (Hidden)
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 10.05 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.05 0 01-4.132 5.411m0 0L21 21" />';
  } else {
    // Disabled State -> Outline
    btn.classList.remove("bg-claude-accent/20", "text-claude-accent", "dark:bg-dark-accent/20", "dark:text-dark-accent");
    btn.classList.add("text-claude-text", "dark:text-dark-text");

    // Icon: Eye (Visible)
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />';
  }
}
// Helper: Highlight Search Terms
function highlightSearchTerms() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query || query.length < 2) return;

  const contentDiv = document.getElementById("tabContent");
  if (!contentDiv) return;

  // Simple tree walker to find text nodes
  const walker = document.createTreeWalker(contentDiv, NodeFilter.SHOW_TEXT, null, false);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const matches = [];

  let node;
  while (node = walker.nextNode()) {
    if (regex.test(node.nodeValue)) {
      matches.push(node);
    }
  }

  // Highlight matches (limit first 50 to avoid freezing)
  let found = false;
  matches.slice(0, 50).forEach(node => {
    const span = document.createElement('span');
    span.innerHTML = node.nodeValue.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-900/50 text-claude-text dark:text-white rounded-sm px-0.5">$1</mark>');
    node.parentNode.replaceChild(span, node);
    found = true;
  });

  if (found) {
    setTimeout(() => {
      const mark = contentDiv.querySelector('mark');
      if (mark) {
        mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
}
