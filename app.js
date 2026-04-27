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
    // Confetti!
    const btn = document.getElementById("markCompleteBtn");
    if (btn) {
      // Trigger Rain Effect from Top
      createConfetti(undefined, undefined, true);
    }
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
  document.getElementById("darkModeToggle").addEventListener("click", (e) => {
    createRipple(e);
    toggleDarkMode();
  });
  document.getElementById("tocToggle").addEventListener("click", (e) => {
    createRipple(e);
    toggleTableOfContents();
  });
  document.getElementById("sidebarToggle").addEventListener("click", (e) => {
    createRipple(e);
    toggleSidebar();
  });
  document.getElementById("closeLecture").addEventListener("click", () => {
    closeLecture();
  });
  document.getElementById("backToTop").addEventListener("click", () => {
    document
      .getElementById("contentScroll")
      .scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      createRipple(e);
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
      link.classList.add("text-solarized-blue", "dark:text-dark-accent", "font-semibold");
      link.classList.remove("text-solarized-base00", "dark:text-dark-text");
    } else {
      link.classList.remove("text-solarized-blue", "dark:text-dark-accent", "font-semibold");
      link.classList.add("text-solarized-base00", "dark:text-dark-text");
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
  const button = e.currentTarget;
  if (!button.classList.contains("ripple-container")) {
    button.classList.add("ripple-container");
  }
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
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
  } else {
    toc.classList.add("hidden");
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
    // Advanced Token-based Search with Scoring
    const results = window.SEARCH_INDEX.map(item => {
      let score = 0;
      const titleLower = (item.title || "").toLowerCase();
      const moduleLower = (item.module || "").toLowerCase();
      const contentLower = (item.content || "").toLowerCase();

      // 1. Whole query match (highest priority)
      if (titleLower.includes(query)) {
        score += 500;
        if (titleLower.startsWith(query)) score += 100;
      }

      // 2. Term-based matching
      let termsMatchedInTitle = 0;
      let allTermsMatched = true;

      terms.forEach(term => {
        let termMatched = false;
        if (titleLower.includes(term)) {
          score += 100;
          termsMatchedInTitle++;
          termMatched = true;
        }
        if (moduleLower.includes(term)) {
          score += 50;
          termMatched = true;
        }
        // Small score for content matches to ensure they appear but don't clutter the top
        if (contentLower.includes(term)) {
          score += 10;
          termMatched = true;
        }

        if (!termMatched) allTermsMatched = false;
      });

      // 3. Multi-term Bonuses
      if (terms.length > 1) {
        if (allTermsMatched) score += 200;
        if (termsMatchedInTitle === terms.length) score += 100;
      }

      return { id: item.id, score };
    })
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score);

    // Map back to lecture metadata objects
    filtered = results.map(r => lectures.find(l => l.id === r.id)).filter(Boolean);
  } else {
    // Fallback if index not loaded - simple token match
    filtered = lectures.filter(lec => {
      const titleLower = (lec.title || "").toLowerCase();
      const tagsLower = (lec.tags || "").toLowerCase();
      const moduleLower = (lec.module || "").toLowerCase();
      return terms.every(term =>
        titleLower.includes(term) ||
        tagsLower.includes(term) ||
        moduleLower.includes(term)
      );
    });
  }

  const html = filtered
    .map((lec) => {
      const isActive = selectedLecture?.id === lec.id;
      const isComplete = completedLectures.has(lec.id);
      const moduleClass = isActive ? getModuleClass(lec.module) : "";

      return `<button onclick="selectLecture('${lec.id
        }')" class="group relative ripple-container w-full text-left p-3 my-1 rounded-xl transition-all duration-300 border border-transparent ${isActive
          ? "bg-solarized-blue/10 dark:bg-white/5 border-solarized-blue/20 dark:border-white/10 shadow-lg scale-[1.02] backdrop-blur-sm"
          : "hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/5 dark:hover:border-white/10 hover:shadow-md hover:scale-[1.01]"
        }">
        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="flex justify-between items-center">
            <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                   <div class="flex items-center gap-2">
                       ${isActive ? `<div class="w-1.5 h-1.5 rounded-full bg-solarized-blue dark:bg-dark-accent shadow-glow"></div>` : ''} 
                       <div class="text-[10px] font-bold text-solarized-cyan dark:text-dark-accent uppercase tracking-wider font-sans truncate opacity-80">${lec.module
        }</div>
                   </div>
                   <div class="text-[10px] text-solarized-base1 dark:text-dark-muted font-sans opacity-60 flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      ${lec.readingTime || 5} min
                   </div>
                </div>
                <div class="${isActive ? 'font-bold' : 'font-medium'} text-sm text-solarized-base01 dark:text-dark-text leading-snug font-sans trunc-multiline group-hover:text-solarized-blue dark:group-hover:text-white transition-colors">${lec.title
        }</div>
            </div>
            ${isComplete ? `
            <div class="ml-2 flex-shrink-0 text-green-500 dark:text-green-400 transform transition-transform duration-500 bounce-in">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            ` : ''}
        </div>
      </button>`;
    })
    .join("");
  document.getElementById("lectureList").innerHTML = html;

  // Update Counts
  const completedCount = [...completedLectures].filter(id => lectures.find(l => l.id === id)).length;
  document.getElementById("lectureCount").innerHTML = `
    <div class="flex flex-col gap-1">
        <span>${lectures.length} lecture${lectures.length !== 1 ? "s" : ""} loaded</span>
        <div class="text-[10px] opacity-80 font-bold ${isDark ? 'text-green-400' : 'text-green-600'}">
            ${Math.round((completedCount / lectures.length) * 100) || 0}% Completed (${completedCount}/${lectures.length})
        </div>
        <div class="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-1">
            <div class="h-full bg-green-500 transition-all duration-500" style="width: ${(completedCount / lectures.length) * 100}%"></div>
        </div>
    </div>
  `;
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
  if (titleEl) titleEl.textContent = meta.title;

  const moduleEl = document.getElementById("lectureModule");
  if (moduleEl) moduleEl.textContent = meta.module;

  // Highlight selection in sidebar immediately
  selectedLecture = meta;
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
  const isDark = document.documentElement.classList.contains("dark");
  const bgClass = isDark ? "bg-white/5" : "bg-gray-200";

  // Create a shimmer effect with multiple random-width lines
  let html = `
        <div class="max-w-4xl mx-auto p-8 animate-pulse space-y-8">
            <!-- Header Skeleton -->
            <div class="space-y-4">
                <div class="h-8 ${bgClass} rounded-lg w-3/4"></div>
                <div class="h-4 ${bgClass} rounded w-1/4"></div>
            </div>
            
            <!-- Content Blocks -->
            <div class="space-y-3">
                <div class="h-4 ${bgClass} rounded w-full"></div>
                <div class="h-4 ${bgClass} rounded w-5/6"></div>
                <div class="h-4 ${bgClass} rounded w-full"></div>
                <div class="h-4 ${bgClass} rounded w-4/5"></div>
            </div>
            
             <!-- Content Blocks -->
            <div class="space-y-3">
                <div class="h-4 ${bgClass} rounded w-11/12"></div>
                <div class="h-4 ${bgClass} rounded w-full"></div>
                <div class="h-4 ${bgClass} rounded w-3/4"></div>
            </div>
            
            <!-- Image/Table placeholder -->
            <div class="h-64 ${bgClass} rounded-xl w-full"></div>
            
             <div class="space-y-3">
                <div class="h-4 ${bgClass} rounded w-full"></div>
                <div class="h-4 ${bgClass} rounded w-5/6"></div>
            </div>
        </div>
    `;

  contentDiv.innerHTML = html;
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
    btn.classList.add("bg-green-500", "text-white");
    btn.classList.remove("bg-white/80", "text-green-600", "dark:bg-dark-surface/80", "dark:text-green-400");

    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
    text.textContent = "Completed";
  } else {
    // Default State -> Outline Green
    btn.classList.remove("bg-green-500", "text-white");
    btn.classList.add("bg-white/80", "text-green-600", "dark:bg-dark-surface/80", "dark:text-green-400");

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

  // Clear URL
  const newUrl = new URL(window.location);
  newUrl.searchParams.delete("lecture");
  newUrl.searchParams.delete("tab");
  window.history.pushState({}, "", newUrl);
}

function switchTab(tab) {
  activeTab = tab;

  // Update URL if lecture is selected
  if (selectedLecture) {
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

  // Explicitly handle Active Recall Toggle Visibility
  const arToggle = document.getElementById("activeRecallToggle");
  if (arToggle) {
    if (tab === "summary") {
      arToggle.classList.remove("hidden");
      updateActiveRecallButtonState(); // Ensure correct state is shown
    } else {
      arToggle.classList.add("hidden");
    }
  }

  renderTabContent();
}




function renderTabContent() {
  const contentDiv = document.getElementById("tabContent");
  const tocDiv = document.getElementById("tableOfContents");

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
      contentDiv.classList.add("flex-1", "p-12", "max-w-none");

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
            : "border-solarized-base1/10 bg-white/50 backdrop-blur-md") +
          ' shadow-xl my-12 p-1"><table class="min-w-full divide-y ' +
          (isDark ? "divide-white/5" : "divide-solarized-base1/10") +
          '"><thead class="' +
          (isDark
            ? "bg-white/10 text-white"
            : "bg-solarized-blue/90 text-white") +
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
            : "even:bg-solarized-base3/30 hover:bg-solarized-base2/50"
            } transition-colors duration-200">`;
          headers.forEach((header) => {
            let cellContent = row[header] || "";
            cellContent = cellContent.replace(/\n/g, "<br/>");
            tableHtml += `<td class="px-6 py-4 text-base leading-relaxed font-serif ${isDark ? "text-dark-muted" : "text-solarized-base00"
              }">${cellContent}</td>`;
          });
          tableHtml += "</tr>";
        });

        tableHtml += "</tbody></table></div>";
        html += tableHtml;
      }

      contentDiv.innerHTML = html;
      generateTableOfContents();
      tocDiv.classList.remove("hidden");
      document.getElementById("tocToggle").classList.remove("hidden");
      document.getElementById("tocToggle").classList.remove("hidden");
      try { highlightSearchTerms(); } catch (e) { console.warn("Highlight error:", e); }
    } else if (activeTab === "questions") {
      const questions = selectedLecture.questions;

      // Check if questions exist (either non-empty string or non-empty array)
      const hasQuestions =
        (Array.isArray(questions) && questions.length > 0) ||
        (typeof questions === "string" && questions.trim() !== "");

      if (!hasQuestions) {
        contentDiv.innerHTML = `
                <div class="flex flex-col items-center justify-center py-20 text-center opacity-60">
                    <svg class="w-24 h-24 mb-6 text-solarized-base1 dark:text-dark-muted opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    <p class="text-2xl font-bold font-sans text-solarized-base01 dark:text-dark-text mb-2">No Questions Yet</p>
                    <p class="text-lg text-solarized-base1 dark:text-dark-muted max-w-md mx-auto leading-relaxed">This lecture doesn't have any practice questions available at the moment.</p>
                </div>
            `;
      } else {
        let questionsHtml = `
                <div class="max-w-3xl mx-auto">
                    <div class="flex justify-between items-center mb-8">
                        <h3 class="text-xl font-bold uppercase tracking-wider ${isDark ? "text-dark-muted" : "text-solarized-base1"
          }">Practice Questions</h3>
                        <button onclick="toggleAllAnswers()" class="px-4 py-2 rounded-lg bg-solarized-blue/10 hover:bg-solarized-blue/20 text-solarized-blue dark:text-dark-accent font-bold text-sm transition-colors">
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
                            <li class="flex items-start gap-3 p-3 rounded-lg hover:bg-solarized-base2/50 dark:hover:bg-white/5 transition-colors cursor-default group">
                                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-solarized-base1/20 dark:bg-white/10 text-solarized-base01 dark:text-dark-muted flex items-center justify-center text-xs font-bold group-hover:bg-solarized-blue group-hover:text-white dark:group-hover:bg-dark-accent transition-colors">${letter}</span>
                                <span class="text-lg text-solarized-base00 dark:text-dark-muted leading-relaxed">${opt}</span>
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
                : "bg-solarized-blue/10 text-solarized-blue"
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
                : "border-solarized-base1/10"
              }">
                                <button onclick="toggleAnswer('${qId}')" id="btn-${qId}" class="w-full py-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-solarized-blue dark:text-dark-accent font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
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
                return `<div class="flex items-start gap-3 p-2 rounded-lg hover:bg-solarized-base2/50 dark:hover:bg-white/5 transition-colors cursor-default group my-1">
                            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-solarized-base1/20 dark:bg-white/10 text-solarized-base01 dark:text-dark-muted flex items-center justify-center text-xs font-bold group-hover:bg-solarized-blue group-hover:text-white dark:group-hover:bg-dark-accent transition-colors">${letter}</span>
                            <span class="text-lg text-solarized-base00 dark:text-dark-muted leading-relaxed">${text}</span>
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
                : "bg-solarized-blue/10 text-solarized-blue"
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
                  : "border-solarized-base1/10"
                }">
                                <button onclick="toggleAnswer('${qId}')" id="btn-${qId}" class="w-full py-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-solarized-blue dark:text-dark-accent font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
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

              // Confetti effect!
              const rect = btn.getBoundingClientRect();
              createConfetti(rect.left + rect.width / 2, rect.top);
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
                "#268bd2",
                "#2aa198",
                "#859900",
                "#b58900",
                "#dc322f",
                "#d33682",
                "#6c71c4",
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
      document.getElementById("tocToggle").classList.add("hidden");
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
              : "bg-white border border-solarized-base1/10"
            } flex flex-col items-center justify-center text-center">
                                    <span class="absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${tagClass}">${card.tag || "Card"
            }</span>
                                    <div class="text-xl font-bold font-sans ${isDark
              ? "text-dark-text"
              : "text-solarized-base00"
            }">${card.front}</div>
                                    <div class="mt-4 text-xs font-bold uppercase tracking-widest opacity-40 ${isDark
              ? "text-dark-muted"
              : "text-solarized-base1"
            }">Click to Flip</div>
                                </div>

                                <!-- BACK -->
                                <div class="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 ${isDark
              ? "bg-dark-surface border border-dark-accent"
              : "bg-solarized-base3 border border-solarized-blue/30"
            } flex flex-col items-center justify-center text-center overflow-y-auto custom-scrollbar">
                                    <div class="text-lg font-serif leading-relaxed ${isDark
              ? "text-dark-text"
              : "text-solarized-base01"
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
                    <svg class="w-16 h-16 mb-4 text-solarized-base1 dark:text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    <p class="text-xl font-sans font-medium text-solarized-base01 dark:text-dark-text">No flashcards available</p>
                </div>
            `;
      }
      tocDiv.classList.add("hidden");
      document.getElementById("tocToggle").classList.add("hidden");
    } else if (activeTab === "mindmap") {
      contentDiv.innerHTML = `<div id="mindmap-container" class="w-full h-[600px] overflow-hidden bg-white/50 dark:bg-dark-surface/50 rounded-xl relative border ${isDark ? "border-dark-border" : "border-solarized-base1/20"
        }"></div>`;

      // Hide Outline Button & TOC
      const tocToggle = document.getElementById("tocToggle");
      if (tocToggle) tocToggle.classList.add("hidden");
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
      document.getElementById("tocToggle").classList.add("hidden");
    } else if (activeTab === "high-yield") {
      const pdfPath =
        selectedLecture.highYieldPdf ||
        `content/L${selectedLecture.id.replace(/^l/i, "")}_HighYield_Render.pdf`;

      // Container for PDF pages
      contentDiv.innerHTML = `
                <div id="pdfContainer" class="flex flex-col items-center gap-4 w-full" data-pdf-path="${pdfPath}">
                    <div id="pdfLoading" class="flex flex-col items-center justify-center py-20">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-solarized-blue dark:border-dark-accent mb-4"></div>
                        <p class="text-lg font-sans text-solarized-base1 dark:text-dark-muted">Loading High Yield PDF...</p>
                    </div>
                </div>
            `;

      tocDiv.classList.add("hidden");
      document.getElementById("tocToggle").classList.add("hidden");

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
              canvas.className = `rounded-xl shadow-lg border ${isDark ? "border-dark-border" : "border-solarized-base1/20"
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
                                <iframe src="${pdfPath}" class="w-full h-[800px] rounded-xl border ${isDark ? "border-dark-border" : "border-solarized-base1/20"
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
            : "bg-white/50 border border-solarized-base1/20"
          } shadow-lg mb-4">
                                <span class="text-3xl">${isInHouse ? "🎓" : "🎯"}</span>
                                <h3 class="text-xl font-bold ${isDark
            ? "text-dark-text"
            : "text-solarized-base01"
          }">${isInHouse ? "Institutional Material" : "Recommended Resources"}</h3>
                            </div>
                            <p class="text-sm ${isDark
            ? "text-dark-muted"
            : "text-solarized-base1"
          }">${isInHouse ? "Focus on core lecture content" : "Based on AnKing tag analysis"}</p>
                        </div>
                        
                        <!-- Primary Resource -->
                        <div class="mb-8">
                            <div class="relative overflow-hidden rounded-3xl ${primary.isPremium
            ? (isDark ? "bg-dark-surface border-2 border-indigo-500/30 shadow-[0_0_50px_rgba(79,70,229,0.15)]" : "bg-white border-2 border-indigo-100 shadow-[0_0_40px_rgba(79,70,229,0.08)]")
            : (isDark ? "bg-dark-surface border-2 border-dark-accent" : "bg-white border-2 border-solarized-blue")
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

                                        <h4 class="text-3xl font-serif mb-4 ${isDark ? "text-dark-text" : "text-solarized-base01"}">
                                            Institutional Focus Required
                                        </h4>
                                        
                                        <p class="text-xl ${isDark ? "text-dark-muted" : "text-solarized-base1"} max-w-lg mx-auto leading-relaxed mb-8">
                                            Focus on in-house material; no strong 3rd party match was found for this specific content.
                                        </p>

                                        <div class="flex flex-col items-center">
                                            <span class="text-xs font-bold uppercase tracking-widest ${isDark ? "text-indigo-400/60" : "text-indigo-500/60"} mb-2">Lecture Reference</span>
                                            <span class="text-lg font-medium ${isDark ? "text-dark-text" : "text-solarized-base00"}">
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
                                        <h4 class="text-sm font-bold uppercase tracking-widest ${isDark ? "text-dark-muted" : "text-solarized-base1"} mb-2">Topic / Chapter</h4>
                                        <p class="text-2xl font-serif ${isDark ? "text-dark-text" : "text-solarized-base00"} leading-tight">
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
              : "text-solarized-base1"
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
                : "bg-solarized-base2/30 hover:bg-white border border-solarized-base1/10"
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
                : "text-solarized-base00"
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
                        <div class="w-32 h-32 mb-6 rounded-full ${isDark ? "bg-dark-surface" : "bg-solarized-base2"
          } flex items-center justify-center shadow-lg">
                            <span class="text-6xl">🏫</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 ${isDark ? "text-dark-text" : "text-solarized-base01"
          }">In-House Lecture is Best</h3>
                        <p class="text-lg ${isDark ? "text-dark-muted" : "text-solarized-base1"
          } max-w-md mx-auto leading-relaxed">
                            This lecture doesn't have a strong match with third-party resources. Focus on your in-house materials!
                        </p>
                    </div>
                `;
      }

      tocDiv.classList.add("hidden");
      document.getElementById("tocToggle").classList.add("hidden");
    } else {
      // Hide Active Recall Toggle for other tabs
      const arToggle = document.getElementById("activeRecallToggle");
      if (arToggle) arToggle.classList.add("hidden");
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
    (isDark ? "text-dark-muted" : "text-solarized-base1") +
    '">Contents</h3><nav class="space-y-1">';
  headings.forEach((h, index) => {
    const id = "heading-" + index;
    h.id = id;
    const level = parseInt(h.tagName[1]);
    const padding = (level - 1) * 12;
    html += `<a href="#" onclick="document.getElementById('${id}').scrollIntoView({behavior: 'smooth'}); return false;" data-target="${id}" class="block text-sm py-1 toc-link transition-colors duration-200 ${isDark
      ? "text-dark-text hover:text-dark-accent"
      : "text-solarized-base00 hover:text-solarized-blue"
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
      (isDark ? "border-dark-border" : "border-solarized-base1/30") +
      ' shadow-lg my-8"><table class="min-w-full divide-y ' +
      (isDark ? "divide-dark-border" : "divide-solarized-base1/20") +
      '"><thead class="' +
      (isDark ? "bg-dark-surface" : "bg-solarized-base2") +
      '"><tr>';

    headerCells.forEach((cell) => {
      tableHtml +=
        '<th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider font-sans ' +
        (isDark ? "text-dark-accent" : "text-solarized-cyan") +
        ' sticky top-0">' +
        cell +
        "</th>";
    });

    tableHtml +=
      '</tr></thead><tbody class="divide-y ' +
      (isDark
        ? "divide-dark-border bg-dark-bg"
        : "divide-solarized-base1/10 bg-white") +
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
        (isDark ? "hover:bg-dark-surface" : "hover:bg-solarized-base2/30") +
        ' transition-colors duration-200">';
      cells.forEach((cell) => {
        const formatted = cell.trim().replace(/<br>/g, "<br/>");
        tableHtml +=
          '<td class="px-6 py-4 text-base leading-relaxed font-serif ' +
          (isDark ? "text-dark-muted" : "text-solarized-base00") +
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
        (isDark ? "text-dark-text" : "text-solarized-base00") +
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
      (isDark ? "text-dark-text" : "text-solarized-base00") +
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
              '<strong class="font-bold text-solarized-base01 dark:text-dark-text">$1</strong>'
            );
          processedContent +=
            '<li class="text-lg font-serif leading-relaxed ' +
            (isDark ? "text-dark-text" : "text-solarized-base00") +
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
              '<strong class="font-bold text-solarized-base01 dark:text-dark-text">$1</strong>'
            );

            // Check if it's a "key: value" pair that should be bolded automatically?
            // The previous code might have been trying to handle "Title: Value" lines by stripping stars.
            // If the prompt now forbids stars in titles, we should be safer.
            // Let's just wrap non-list items in P tags.

            processedContent +=
              '<p class="mb-2 text-lg font-serif leading-relaxed ' +
              (isDark ? "text-dark-text" : "text-solarized-base00") +
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
              '<strong class="font-bold text-solarized-base01 dark:text-dark-text">$1</strong>'
            );
          processedContent +=
            '<li class="text-lg font-serif leading-relaxed ' +
            (isDark ? "text-dark-text" : "text-solarized-base00") +
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
              (isDark ? "text-dark-text" : "text-solarized-base00") +
              '"><strong class="font-bold text-solarized-base01 dark:text-dark-text">' +
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
          '"></span><span class="text-solarized-base00 dark:text-dark-muted">' +
          cleaned +
          "</span></div>";
      });
      return (
        '<details class="my-8 group"><summary class="cursor-pointer px-6 py-4 rounded-xl border ' +
        (isDark
          ? "bg-dark-surface/50 border-dark-border hover:bg-dark-surface text-dark-accent"
          : "bg-solarized-blue/5 border-solarized-blue/20 hover:bg-solarized-blue/10 text-solarized-blue") +
        ' transition-all duration-300 flex items-center gap-3 font-bold text-sm list-none font-sans shadow-sm"><svg class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><span>Slides ' +
        label +
        '</span></summary><div class="mt-4 ml-2 pl-6 border-l-2 border-solarized-base1/20 dark:border-dark-border text-base font-serif leading-relaxed space-y-3 slide-up">' +
        itemsHtml +
        "</div></details>"
      );
    }
  );

  // Remove leading page breaks (dashes at start of content)
  html = html.replace(/^[\s\n]*(-{3,5}|\*{3})[\s\n]+/, "");

  // H1 (Lecture Title Style) - reduced bottom margin for tighter spacing
  html = html.replace(
    /^# (.*$)/gm,
    '<h1 class="text-4xl font-bold mb-4 pb-4 border-b-2 ' +
    (isDark
      ? "border-dark-border text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500"
      : "border-solarized-base1/20 text-transparent bg-clip-text bg-gradient-to-r from-solarized-blue to-solarized-cyan") +
    ' font-sans text-left">$1</h1>'
  );

  // H2 (Poppy Block Style - Centered, Block, 4 Dots)
  html = html.replace(
    /^## (.*$)/gm,
    '<div class="my-16 p-8 rounded-2xl ' +
    (isDark
      ? "bg-dark-surface shadow-lg border border-dark-border"
      : "bg-white shadow-xl border border-white/50") +
    ' text-center transform hover:scale-[1.02] transition-transform duration-300"><div class="flex justify-center gap-2 mb-4"><div class="w-1.5 h-1.5 rounded-full bg-red-500"></div><div class="w-1.5 h-1.5 rounded-full bg-yellow-500"></div><div class="w-1.5 h-1.5 rounded-full bg-green-500"></div><div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div></div><h2 class="text-3xl font-black ' +
    (isDark
      ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500"
      : "text-transparent bg-clip-text bg-gradient-to-r from-solarized-cyan to-solarized-blue") +
    ' font-display tracking-tight">$1</h2></div>'
  );

  // H3 (Subsections)
  html = html.replace(
    /^### (.*$)/gm,
    '<h3 class="text-2xl font-bold mt-8 mb-4 ' +
    (isDark ? "text-dark-accent" : "text-solarized-blue") +
    ' font-sans flex items-center gap-2 text-left"><span class="w-2 h-8 rounded-full ' +
    (isDark ? "bg-dark-accent" : "bg-solarized-blue") +
    '"></span>$1</h3>'
  );

  // H4 (Sub-subsections)
  html = html.replace(
    /^#### (.*$)/gm,
    '<h4 class="text-xl font-bold mt-6 mb-3 ' +
    (isDark ? "text-dark-text" : "text-solarized-base01") +
    ' font-sans flex items-center gap-2 text-left"><span class="w-1.5 h-1.5 rounded-full ' +
    (isDark ? "bg-dark-muted" : "bg-solarized-base1") +
    '"></span>$1</h4>'
  );

  // HR (Hidden)
  html = html.replace(/^\*{3,}$/gm, "");
  html = html.replace(/^-{3,}$/gm, "");

  // Blockquotes
  html = html.replace(
    /^> (.*$)/gm,
    '<div class="my-8 pl-8 pr-6 py-6 border-l-4 ' +
    (isDark
      ? "border-dark-accent bg-dark-surface/50"
      : "border-solarized-yellow bg-solarized-yellow/10") +
    " rounded-r-xl italic text-xl font-serif " +
    (isDark ? "text-dark-text" : "text-solarized-base01") +
    ' shadow-sm relative"><span class="absolute top-2 left-2 text-4xl opacity-20 font-serif">"</span>$1</div>'
  );

  // Bold
  html = html.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="recall-target font-bold text-solarized-base01 dark:text-dark-text">$1</strong>'
  );

  // Italics
  html = html.replace(
    /(\*|_)(.*?)\1/g,
    '<em class="italic text-solarized-base01 dark:text-dark-text">$2</em>'
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
      '<ul><li class="relative pl-2 leading-relaxed text-lg text-solarized-base00 dark:text-dark-muted font-serif hover:scale-[1.01] origin-left transition-transform duration-200 cursor-default" style="margin-left: ' +
      ml +
      'rem; list-style-type: ' + typeStyle + ';">' +
      content +
      "</li></ul>"
    );
  });

  html = html.replace(/^(\s*)\d+\.\s+(.*)$/gm, (match, indent, content) => {
    const ml = indent.length * 0.5;
    return (
      '<ol><li class="relative pl-2 leading-relaxed text-lg text-solarized-base00 dark:text-dark-muted font-serif hover:scale-[1.01] origin-left transition-transform duration-200 cursor-default" style="margin-left: ' +
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
    (isDark ? "text-dark-accent" : "text-solarized-blue") +
    '">'
  );
  html = html.replace(
    /<ol>/g,
    '<ol class="list-decimal list-outside ml-6 my-6 space-y-2 marker:font-bold marker:' +
    (isDark ? "text-dark-accent" : "text-solarized-blue") +
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
    '</div><div class="mb-8 leading-loose text-lg font-serif text-solarized-base00 dark:text-dark-muted text-justify hyphens-auto">'
  );
  html = html.replace(/\n/g, " ");

  // Slide Citations: "(Slide X)" -> Badge
  html = html.replace(
    /\(Slide\s+(\d+)\)/gi,
    '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-solarized-blue/10 dark:bg-dark-accent/10 text-solarized-blue dark:text-dark-accent mx-1 align-baseline cursor-default select-none" title="From Slide $1">Slide $1</span>'
  );

  // Cross-Links: "[[L102]]" -> Clickable Link
  html = html.replace(/\[\[(L\d+)\]\]/gi, function (match, lectureId) {
    const id = lectureId.toLowerCase(); // Ensure lowercase matching if your IDs are case-sensitive
    return `<button onclick="selectLecture('${id}'); return false;" class="text-solarized-blue dark:text-dark-accent hover:underline font-bold transition-colors inline-flex items-center gap-0.5"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>${lectureId}</button>`;
  });

  return (
    '<div class="mb-8 leading-loose text-lg font-serif text-solarized-base00 dark:text-white text-justify hyphens-auto">' +
    html +
    "</div>"
  );
}

function updateWelcomeMessage() {
  const msg =
    lectures.length > 0
      ? lectures.length +
      " lecture" +
      (lectures.length !== 1 ? "s" : "") +
      " loaded. Select one to begin."
      : "No lectures loaded. Ensure lectures_data.js exists.";
  document.getElementById("welcomeMessage").textContent = msg;

  // Add Footer
  const welcomeScreen = document.getElementById("welcomeScreen");
  if (welcomeScreen && !document.getElementById("qh-footer")) {
    const footer = document.createElement("div");
    footer.id = "qh-footer";
    footer.className =
      "absolute bottom-4 text-xs font-sans opacity-40 tracking-widest uppercase";
    footer.textContent = "Created by QH";
    welcomeScreen.appendChild(footer);
  }

  // Antigravity Effect
  if (welcomeScreen) {
    const card = welcomeScreen.querySelector(".bg-white"); // Target the card
    if (card) {
      document.addEventListener("mousemove", (e) => {
        if (welcomeScreen.classList.contains("hidden")) return;

        const x = e.clientX;
        const y = e.clientY;
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (y - cardY) / 25;
        const angleY = (cardX - x) / 25;

        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        card.style.transition = "transform 0.1s ease-out";
      });

      document.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
        card.style.transition = "transform 0.5s ease-out";
      });
    }
  }
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
                    <svg class="w-16 h-16 mb-4 text-solarized-base1 dark:text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    <p class="text-xl font-sans font-medium text-solarized-base01 dark:text-dark-text">No Pearls available for this lecture</p>
                </div>
            `;
      return;
    }

    const pearlsContainer = document.createElement("div");
    pearlsContainer.className = "grid grid-cols-1 gap-6";

    pearls.forEach((pearl, index) => {
      const pearlCard = document.createElement("div");
      pearlCard.className = `p-6 rounded-2xl border transition-all duration-300 ${isDark
        ? "bg-dark-bg/50 border-dark-border hover:border-dark-accent/50"
        : "bg-white border-solarized-base1/10 hover:border-solarized-blue/30"
        } shadow-sm hover:shadow-md animate-in`;
      pearlCard.style.animationDelay = `${index * 50}ms`;

      const renderedContent = typeof renderMarkdown === "function"
        ? renderMarkdown(pearl.content)
        : pearl.content;

      pearlCard.innerHTML = `
                <div class="flex items-start gap-4">
                    <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isDark
          ? "bg-dark-accent/10 text-dark-accent"
          : "bg-orange-500/10 text-orange-600"
        }">
                        <span class="font-bold font-sans text-lg">${index + 1}</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-lg font-bold mb-2 font-sans ${isDark ? "text-dark-text" : "text-solarized-base01"
        }">${pearl.title}</h3>
                        <div class="prose dark:prose-invert max-w-none text-base leading-relaxed ${isDark ? "text-dark-muted" : "text-solarized-base00"
        }">
                            ${renderedContent}
                        </div>
                    </div>
                </div>
            `;
      pearlsContainer.appendChild(pearlCard);
    });

    contentDiv.appendChild(pearlsContainer);
  }

  btn.addEventListener('click', (e) => {
    // Create ripple
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    const ripple = btn.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    btn.appendChild(circle);

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
    btn.classList.add("bg-violet-500", "text-white");
    btn.classList.remove("bg-white/80", "text-violet-600", "dark:bg-dark-surface/80", "dark:text-violet-300");

    // Icon: Eye Off (Hidden)
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 10.05 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.05 0 01-4.132 5.411m0 0L21 21" />';
  } else {
    // Disabled State -> Outline
    btn.classList.remove("bg-violet-500", "text-white");
    btn.classList.add("bg-white/80", "text-violet-600", "dark:bg-dark-surface/80", "dark:text-violet-300");

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
    span.innerHTML = node.nodeValue.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-900/50 text-solarized-base00 dark:text-white rounded-sm px-0.5">$1</mark>');
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
