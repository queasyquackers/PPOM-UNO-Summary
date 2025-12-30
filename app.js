let lectures = window.LECTURES_DATA || [];
let selectedLecture = null;
let activeTab = 'summary';
let isDark = false;
let showAnswers = false;
let tocVisible = true;
let sidebarVisible = true;
let currentFontSize = 100; // Percentage

document.addEventListener('DOMContentLoaded', function () {
    // Load Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark = false;
        document.documentElement.classList.remove('dark');
    }

    // Refresh data in case of loading order issues
    if (typeof window.LECTURES_DATA !== 'undefined') {
        lectures = window.LECTURES_DATA;
    }

    renderLectureList();
    setupEventListeners();
    updateWelcomeMessage();
    setupKeyboardShortcuts();
    setupReadingProgress();
    setupWelcomeAnimation();
});

function setupWelcomeAnimation() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const welcomeCard = document.getElementById('welcomeCard');

    if (!welcomeScreen || !welcomeCard) return;

    document.addEventListener('mousemove', (e) => {
        if (welcomeScreen.classList.contains('hidden')) return;

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

    document.getElementById('searchInput').addEventListener('input', e => {
        debouncedSearch(e.target.value);
    });
    document.getElementById('darkModeToggle').addEventListener('click', e => {
        createRipple(e);
        toggleDarkMode();
    });
    document.getElementById('tocToggle').addEventListener('click', e => {
        createRipple(e);
        toggleTableOfContents();
    });
    document.getElementById('sidebarToggle').addEventListener('click', e => {
        createRipple(e);
        toggleSidebar();
    });
    document.getElementById('closeLecture').addEventListener('click', () => {
        closeLecture();
    });
    document.getElementById('backToTop').addEventListener('click', () => {
        document.getElementById('contentScroll').scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            createRipple(e);
            switchTab(this.dataset.tab);
        });
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', e => {
        if (e.key === '/' && document.activeElement.id !== 'searchInput') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
        if (e.key === 'Escape' && selectedLecture) {
            closeLecture();
        }
        if (e.key === '[' || e.key === ']') {
            toggleSidebar();
        }
        if (selectedLecture && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            const tabs = ['summary', 'questions', 'glossary', 'high-yield', 'anking'];
            const currentIndex = tabs.indexOf(activeTab);
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                switchTab(tabs[currentIndex - 1]);
            } else if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
                switchTab(tabs[currentIndex + 1]);
            }
        }
    });
}

function setupReadingProgress() {
    const contentScroll = document.getElementById('contentScroll');
    const backToTop = document.getElementById('backToTop');

    contentScroll?.addEventListener('scroll', () => {
        const scrollTop = contentScroll.scrollTop;
        const scrollHeight = contentScroll.scrollHeight - contentScroll.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;

        // Update Progress Bar
        const progressBar = document.getElementById('readingProgressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        // Show/Hide Back to Top Button
        if (scrollTop > 300) {
            backToTop.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            backToTop.classList.add('opacity-0', 'pointer-events-none');
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
    if (!button.classList.contains('ripple-container')) {
        button.classList.add('ripple-container');
    }
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

function animateSearchIcon() {
    const icon = document.getElementById('searchIcon');
    icon.style.transform = 'translate(-50%, -50%) scale(1.2) rotate(15deg)';
    setTimeout(() => icon.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)', 200);
}

function createConfetti() {
    const colors = ['#268bd2', '#2aa198', '#dc322f', '#b58900', '#6c71c4', '#859900'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

function toggleDarkMode() {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }

    // Update Icon
    const btn = document.getElementById('darkModeToggle');
    if (btn) {
        // Simple text/icon swap if strictly text, but usually it's SVG. 
        // Assuming the button contains an SVG, we might want to rotate it or swap it.
        // For now, just ensure the class is applied.
    }

    if (selectedLecture) renderTabContent();
}

function toggleTableOfContents() {
    tocVisible = !tocVisible;
    const toc = document.getElementById('tableOfContents');
    if (tocVisible) {
        toc.classList.remove('hidden');
    } else {
        toc.classList.add('hidden');
    }
}

function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
    const body = document.body;
    if (sidebarVisible) {
        body.classList.remove('sidebar-hidden');
    } else {
        body.classList.add('sidebar-hidden');
    }
}



function getModuleClass(module) {
    const moduleLower = (module || '').toLowerCase();
    if (moduleLower.includes('cardio')) return 'module-card-cardiovascular';
    if (moduleLower.includes('resp')) return 'module-card-respiratory';
    if (moduleLower.includes('renal')) return 'module-card-renal';
    if (moduleLower.includes('gi') || moduleLower.includes('gastro')) return 'module-card-gi';
    if (moduleLower.includes('neuro')) return 'module-card-neuro';
    if (moduleLower.includes('endo')) return 'module-card-endo';
    if (moduleLower.includes('heme')) return 'module-card-heme';
    return '';
}

function renderLectureList(searchQuery = '') {
    const filtered = lectures.filter(lec => lec.title.toLowerCase().includes(searchQuery.toLowerCase()) || (lec.tags && lec.tags.toLowerCase().includes(searchQuery.toLowerCase())));
    const html = filtered.map(lec => {
        const isActive = selectedLecture?.id === lec.id;
        const moduleClass = isActive ? getModuleClass(lec.module) : '';
        return `<button onclick="selectLecture('${lec.id}')" class="ripple-container w-full text-left p-4 rounded-xl border-l-4 transition-all duration-300 ${moduleClass} ${isActive ? 'bg-solarized-blue/10 dark:bg-dark-accent/10 border-solarized-blue dark:border-dark-accent shadow-lg scale-[1.02]' : 'border-solarized-base1/20 dark:border-dark-border hover:bg-solarized-base3 dark:hover:bg-dark-hover hover:shadow-md hover:scale-[1.01]'}"><div class="text-xs font-semibold text-solarized-cyan dark:text-dark-accent uppercase tracking-wide mb-1.5 font-sans">${lec.module}</div><div class="font-semibold text-solarized-base01 dark:text-dark-text leading-snug font-sans">${lec.title}</div></button>`;
    }).join('');
    document.getElementById('lectureList').innerHTML = html;
    document.getElementById('lectureCount').textContent = `${lectures.length} lecture${lectures.length !== 1 ? 's' : ''}`;
}

function selectLecture(id) {
    selectedLecture = lectures.find(l => l.id === id);
    if (!selectedLecture) return;

    const welcomeScreen = document.getElementById('welcomeScreen');
    const lectureContent = document.getElementById('lectureContent');

    if (welcomeScreen) welcomeScreen.classList.add('hidden');
    if (lectureContent) lectureContent.classList.remove('hidden');

    const titleEl = document.getElementById('lectureTitle');
    if (titleEl) titleEl.textContent = selectedLecture.title;

    const moduleEl = document.getElementById('lectureModule');
    if (moduleEl) moduleEl.textContent = selectedLecture.module;

    // Toggle AnKing Tab Visibility
    const ankingTabBtn = document.querySelector('.tab-btn[data-tab="anking"]');
    if (ankingTabBtn) {
        if (selectedLecture.ankingResource) {
            ankingTabBtn.classList.remove('hidden');
        } else {
            ankingTabBtn.classList.add('hidden');
            // If currently on AnKing tab, switch to summary to avoid empty view
            if (activeTab === 'anking') {
                switchTab('summary');
            }
        }
    }



    renderLectureList(document.getElementById('searchInput').value);
    renderTabContent();
    calculateReadingTime();

    const contentScroll = document.getElementById('contentScroll');
    if (contentScroll) contentScroll.scrollTop = 0;
}

function calculateReadingTime() {
    if (!selectedLecture || !selectedLecture.summary) return;
    const words = selectedLecture.summary.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    document.getElementById('readingTime').textContent = `${minutes} min read`;
}

function closeLecture() {
    selectedLecture = null;
    document.getElementById('welcomeScreen').classList.remove('hidden');
    document.getElementById('lectureContent').classList.add('hidden');
    renderLectureList(document.getElementById('searchInput').value);
}

function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === tab) {
            btn.classList.add('border-solarized-blue', 'dark:border-dark-accent', 'text-solarized-blue', 'dark:text-dark-accent');
            btn.classList.remove('border-transparent', 'text-solarized-base1', 'dark:text-dark-muted');
        } else {
            btn.classList.remove('border-solarized-blue', 'dark:border-dark-accent', 'text-solarized-blue', 'dark:text-dark-accent');
            btn.classList.add('border-transparent', 'text-solarized-base1', 'dark:text-dark-muted');
        }
    });
    renderTabContent();
}

function renderTabContent() {
    const contentDiv = document.getElementById('tabContent');
    const tocDiv = document.getElementById('tableOfContents');

    // Apply current font size
    contentDiv.style.fontSize = currentFontSize + '%';

    // Clear previous content
    contentDiv.innerHTML = '';

    try {
        if (activeTab === 'summary') {
            let html = renderMarkdown(selectedLecture.summary);

            if (selectedLecture.drugData && Array.isArray(selectedLecture.drugData) && selectedLecture.drugData.length > 0) {
                const headers = Object.keys(selectedLecture.drugData[0]);
                let tableHtml = '<div class="overflow-x-auto rounded-2xl border ' + (isDark ? 'border-dark-border bg-dark-surface' : 'border-solarized-base1/10 bg-white') + ' shadow-xl my-12 p-1"><table class="min-w-full divide-y ' + (isDark ? 'divide-dark-border' : 'divide-solarized-base1/10') + '"><thead class="' + (isDark ? 'bg-dark-accent text-white' : 'bg-solarized-blue text-white') + ' rounded-t-xl"><tr>';

                headers.forEach((header, index) => {
                    const roundedClass = index === 0 ? 'rounded-tl-xl' : (index === headers.length - 1 ? 'rounded-tr-xl' : '');
                    tableHtml += `<th class="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider font-sans ${roundedClass}">${header}</th>`;
                });

                tableHtml += `</tr></thead><tbody class="divide-y ${isDark ? 'divide-dark-border bg-dark-bg' : 'divide-solarized-base1/10 bg-white'}">`;

                selectedLecture.drugData.forEach(row => {
                    tableHtml += `<tr class="${isDark ? 'even:bg-white/5 hover:bg-dark-surface' : 'even:bg-solarized-base3/50 hover:bg-solarized-base2/30'} transition-colors duration-200">`;
                    headers.forEach(header => {
                        let cellContent = row[header] || '';
                        cellContent = cellContent.replace(/\n/g, '<br/>');
                        tableHtml += `<td class="px-6 py-4 text-base leading-relaxed font-serif ${isDark ? 'text-dark-muted' : 'text-solarized-base00'}">${cellContent}</td>`;
                    });
                    tableHtml += '</tr>';
                });

                tableHtml += '</tbody></table></div>';
                html += tableHtml;
            }

            contentDiv.innerHTML = html;
            generateTableOfContents();
            tocDiv.classList.remove('hidden');
            document.getElementById('tocToggle').classList.remove('hidden');
        } else if (activeTab === 'questions') {
            const questions = selectedLecture.questions;

            // Check if questions exist (either non-empty string or non-empty array)
            const hasQuestions = (Array.isArray(questions) && questions.length > 0) || (typeof questions === 'string' && questions.trim() !== '');

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
                        <h3 class="text-xl font-bold uppercase tracking-wider ${isDark ? 'text-dark-muted' : 'text-solarized-base1'}">Practice Questions</h3>
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
                        optionsHtml += '</ul>';

                        // Determine correct answer text
                        const correctIndex = typeof q.correctAnswer === 'number' ? q.correctAnswer : -1;
                        const answerLetter = correctIndex >= 0 ? String.fromCharCode(65 + correctIndex) : '?';

                        const answerText = `**Answer: ${answerLetter}**\n\n${q.rationale}`;
                        const renderedAnswer = renderMarkdown(answerText);

                        questionsHtml += `
                        <div class="question-card bg-white dark:bg-dark-surface rounded-2xl shadow-lg border ${isDark ? 'border-dark-border' : 'border-solarized-base1/10'} overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div class="p-8">
                                <div class="flex items-start gap-4">
                                    <span class="flex-shrink-0 w-8 h-8 rounded-full ${isDark ? 'bg-dark-accent/20 text-dark-accent' : 'bg-solarized-blue/10 text-solarized-blue'} flex items-center justify-center font-bold font-sans text-sm mt-1">${index + 1}</span>
                                    <div class="flex-1">
                                        <div class="prose dark:prose-invert max-w-none text-lg font-serif mb-4">
                                            ${renderMarkdown(q.question)}
                                        </div>
                                        ${optionsHtml}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="border-t ${isDark ? 'border-dark-border' : 'border-solarized-base1/10'}">
                                <button onclick="toggleAnswer('${qId}')" id="btn-${qId}" class="w-full py-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-solarized-blue dark:text-dark-accent font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                                    <span>Reveal Answer</span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div id="${qId}" class="hidden bg-green-50/50 dark:bg-green-900/10 p-8 border-t ${isDark ? 'border-dark-border' : 'border-green-100'} animate-in">
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
                    let questionBlocks = questions.split(/\n###\s+|\n---\n/g).filter(q => q.trim().length > 0);

                    if (questionBlocks.length === 1 && questions.match(/\n\d+\.\s+/)) {
                        questionBlocks = questions.split(/\n(?=\d+\.\s+)/g).filter(q => q.trim().length > 0);
                    }

                    questionBlocks.forEach((block, index) => {
                        let questionText = block;
                        let answerText = "";

                        const answerMatch = block.match(/(?:<details>|Answer:|Explanation:)([\s\S]*)/i);
                        if (answerMatch) {
                            questionText = block.substring(0, answerMatch.index).trim();
                            answerText = answerMatch[0].replace(/<details>|<\/details>|<summary>.*<\/summary>/gi, '').trim();
                            answerText = answerText.replace(/^(Answer:|Explanation:)\s*/i, '');
                        }

                        // Improve spacing for options in Markdown string
                        questionText = questionText.replace(/^([A-E])\.\s+(.*)$/gm, (match, letter, text) => {
                            return `<div class="flex items-start gap-3 p-2 rounded-lg hover:bg-solarized-base2/50 dark:hover:bg-white/5 transition-colors cursor-default group my-1">
                            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-solarized-base1/20 dark:bg-white/10 text-solarized-base01 dark:text-dark-muted flex items-center justify-center text-xs font-bold group-hover:bg-solarized-blue group-hover:text-white dark:group-hover:bg-dark-accent transition-colors">${letter}</span>
                            <span class="text-lg text-solarized-base00 dark:text-dark-muted leading-relaxed">${text}</span>
                        </div>`;
                        });

                        const renderedQuestion = renderMarkdown(questionText);
                        const renderedAnswer = renderMarkdown(answerText);
                        const qId = `q-${index}`;

                        questionsHtml += `
                        <div class="question-card bg-white dark:bg-dark-surface rounded-2xl shadow-lg border ${isDark ? 'border-dark-border' : 'border-solarized-base1/10'} overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div class="p-8">
                                <div class="flex items-start gap-4">
                                    <span class="flex-shrink-0 w-8 h-8 rounded-full ${isDark ? 'bg-dark-accent/20 text-dark-accent' : 'bg-solarized-blue/10 text-solarized-blue'} flex items-center justify-center font-bold font-sans text-sm mt-1">${index + 1}</span>
                                    <div class="flex-1 prose dark:prose-invert max-w-none">
                                        ${renderedQuestion}
                                    </div>
                                </div>
                            </div>
                            
                            ${answerText ? `
                            <div class="border-t ${isDark ? 'border-dark-border' : 'border-solarized-base1/10'}">
                                <button onclick="toggleAnswer('${qId}')" id="btn-${qId}" class="w-full py-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-solarized-blue dark:text-dark-accent font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                                    <span>Reveal Answer</span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div id="${qId}" class="hidden bg-green-50/50 dark:bg-green-900/10 p-8 border-t ${isDark ? 'border-dark-border' : 'border-green-100'} animate-in">
                                    <div class="flex items-start gap-3">
                                        <span class="text-2xl">💡</span>
                                        <div class="prose dark:prose-invert max-w-none text-base">
                                            <h4 class="text-sm font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-2">Explanation</h4>
                                            ${renderedAnswer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ` : ''}
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
                        const btn = document.getElementById('btn-' + id);
                        if (el.classList.contains('hidden')) {
                            el.classList.remove('hidden');
                            btn.innerHTML = '<span>Hide Answer</span><svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
                            btn.classList.add('bg-gray-100', 'dark:bg-white/10');

                            // Confetti effect!
                            const rect = btn.getBoundingClientRect();
                            createConfetti(rect.left + rect.width / 2, rect.top);
                        } else {
                            el.classList.add('hidden');
                            btn.innerHTML = '<span>Reveal Answer</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
                            btn.classList.remove('bg-gray-100', 'dark:bg-white/10');
                        }
                    };
                }

                if (!window.toggleAllAnswers) {
                    window.toggleAllAnswers = function () {
                        const allAnswers = document.querySelectorAll('[id^="q-"]');
                        const allHidden = Array.from(allAnswers).every(el => el.classList.contains('hidden'));

                        allAnswers.forEach(el => {
                            const id = el.id;
                            const btn = document.getElementById('btn-' + id);
                            if (allHidden) {
                                el.classList.remove('hidden');
                                if (btn) btn.innerHTML = '<span>Hide Answer</span><svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
                            } else {
                                el.classList.add('hidden');
                                if (btn) btn.innerHTML = '<span>Reveal Answer</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
                            }
                        });
                    };
                }

                if (!window.createConfetti) {
                    window.createConfetti = function (x, y) {
                        for (let i = 0; i < 20; i++) {
                            const confetti = document.createElement('div');
                            confetti.className = 'confetti';
                            confetti.style.left = x + 'px';
                            confetti.style.top = y + 'px';
                            confetti.style.backgroundColor = ['#268bd2', '#2aa198', '#859900', '#b58900', '#dc322f', '#d33682', '#6c71c4'][Math.floor(Math.random() * 7)];
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
                                confetti.style.top = top + 'px';
                                confetti.style.left = left + 'px';

                                if (opacity > 0) {
                                    requestAnimationFrame(animate);
                                } else {
                                    confetti.remove();
                                }
                            };
                            requestAnimationFrame(animate);
                        }
                    }
                }
            }

            tocDiv.classList.add('hidden');
            document.getElementById('tocToggle').classList.add('hidden');
        } else if (activeTab === 'flashcards') {
            const flashcards = selectedLecture.flashcards ||
                (selectedLecture.glossary ? selectedLecture.glossary.map(g => ({
                    front: g.term,
                    back: g.definition,
                    tag: 'Glossary'
                })) : []);

            if (flashcards.length > 0) {
                let html = `
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
                `;

                flashcards.forEach((card, index) => {
                    const tagColors = {
                        'Glossary': isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700',
                        'Clinical': isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700',
                        'Concept': isDark ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                    };
                    const tagClass = tagColors[card.tag] || (isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-700');

                    html += `
                        <div class="h-64 perspective-1000 cursor-pointer group" onclick="this.classList.toggle('flipped')">
                            <div class="relative w-full h-full transition-transform duration-500 transform-style-3d shadow-xl rounded-2xl group-[.flipped]:rotate-y-180">
                                
                                <!-- FRONT -->
                                <div class="absolute w-full h-full backface-hidden rounded-2xl p-6 ${isDark ? 'bg-dark-surface border border-dark-border' : 'bg-white border border-solarized-base1/10'} flex flex-col items-center justify-center text-center">
                                    <span class="absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${tagClass}">${card.tag || 'Card'}</span>
                                    <div class="text-xl font-bold font-sans ${isDark ? 'text-dark-text' : 'text-solarized-base00'}">${card.front}</div>
                                    <div class="mt-4 text-xs font-bold uppercase tracking-widest opacity-40 ${isDark ? 'text-dark-muted' : 'text-solarized-base1'}">Click to Flip</div>
                                </div>

                                <!-- BACK -->
                                <div class="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 ${isDark ? 'bg-dark-surface border border-dark-accent' : 'bg-solarized-base3 border border-solarized-blue/30'} flex flex-col items-center justify-center text-center overflow-y-auto custom-scrollbar">
                                    <div class="text-lg font-serif leading-relaxed ${isDark ? 'text-dark-text' : 'text-solarized-base01'}">${card.back}</div>
                                </div>
                            </div>
                        </div>
                    `;
                });

                html += '</div>';

                // Add styles for 3D flip if not already present
                if (!document.getElementById('flashcard-styles')) {
                    const style = document.createElement('style');
                    style.id = 'flashcard-styles';
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
            tocDiv.classList.add('hidden');
            document.getElementById('tocToggle').classList.add('hidden');
        } else if (activeTab === 'mindmap') {
            contentDiv.innerHTML = `<div id="mindmap-container" class="w-full h-[600px] overflow-hidden bg-white/50 dark:bg-dark-surface/50 rounded-xl relative border ${isDark ? 'border-dark-border' : 'border-solarized-base1/20'}"></div>`;

            // Hide Outline Button & TOC
            const tocToggle = document.getElementById('tocToggle');
            if (tocToggle) tocToggle.classList.add('hidden');
            if (tocDiv) tocDiv.classList.add('hidden');

            // Extract hierarchy from markdown
            const root = { name: selectedLecture.title, children: [] };
            let currentLevel1 = null;
            let currentLevel2 = null;

            const lines = (selectedLecture.summary || '').split('\n');
            lines.forEach(line => {
                if (line.startsWith('## ')) {
                    currentLevel1 = { name: line.replace('## ', '').trim(), children: [] };
                    root.children.push(currentLevel1);
                    currentLevel2 = null;
                } else if (line.startsWith('### ') && currentLevel1) {
                    currentLevel2 = { name: line.replace('### ', '').trim(), children: [] };
                    currentLevel1.children.push(currentLevel2);
                } else if (line.trim().startsWith('*') && currentLevel2) {
                    // Extract bold term if exists
                    const match = line.match(/\*\*(.*?)\*\*(.*)/);
                    let term, def;
                    if (match) {
                        term = match[1].trim().replace(':', '');
                        def = match[2].trim().replace(/^:\s*/, '');
                    } else {
                        term = line.replace(/^\s*\*\s*/, '').trim();
                    }

                    const nodeData = def ? { name: term, definition: def } : { name: term };
                    const isNested = line.startsWith('    ') || line.startsWith('\t');

                    if (isNested && currentLevel2.children.length > 0) {
                        const parent = currentLevel2.children[currentLevel2.children.length - 1];
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

            tocDiv.classList.add('hidden');
            document.getElementById('tocToggle').classList.add('hidden');

        } else if (activeTab === 'high-yield') {
            const pdfPath = selectedLecture.highYieldPdf || `L${selectedLecture.id.replace(/^l/i, '')}_HighYield_Render.pdf`;

            // Container for PDF pages
            contentDiv.innerHTML = `
                <div id="pdfContainer" class="flex flex-col items-center gap-4 w-full" data-pdf-path="${pdfPath}">
                    <div id="pdfLoading" class="flex flex-col items-center justify-center py-20">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-solarized-blue dark:border-dark-accent mb-4"></div>
                        <p class="text-lg font-sans text-solarized-base1 dark:text-dark-muted">Loading High Yield PDF...</p>
                    </div>
                </div>
            `;

            tocDiv.classList.add('hidden');
            document.getElementById('tocToggle').classList.add('hidden');

            // Render PDF using PDF.js
            if (window.pdfjsLib) {
                // Ensure worker is set
                if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
                    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                }

                (async () => {
                    const container = document.getElementById('pdfContainer');
                    const loading = document.getElementById('pdfLoading');

                    if (!container || !loading) return;

                    try {
                        const loadingTask = pdfjsLib.getDocument(pdfPath);
                        const pdf = await loadingTask.promise;

                        if (activeTab !== 'high-yield') return;

                        if (loading && loading.parentNode) loading.remove();

                        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                            if (activeTab !== 'high-yield') return;

                            const page = await pdf.getPage(pageNum);

                            // Calculate scale to fit container width (max 1000px usually good for readability)
                            // We render at high quality (scale 2) and let CSS downscale
                            const viewport = page.getViewport({ scale: 2.0 });

                            const canvas = document.createElement('canvas');
                            const context = canvas.getContext('2d');

                            canvas.height = viewport.height;
                            canvas.width = viewport.width;

                            // CSS styling for responsiveness
                            canvas.style.width = '100%';
                            canvas.style.maxWidth = '100%';
                            canvas.style.height = 'auto';
                            canvas.className = `rounded-xl shadow-lg border ${isDark ? 'border-dark-border' : 'border-solarized-base1/20'}`;

                            // Re-query container to ensure we are still attached or check existence
                            const currentContainer = document.getElementById('pdfContainer');
                            if (currentContainer) {
                                currentContainer.appendChild(canvas);
                            }

                            const renderContext = {
                                canvasContext: context,
                                viewport: viewport
                            };

                            await page.render(renderContext).promise;
                        }
                    } catch (error) {
                        if (activeTab !== 'high-yield') return;
                        console.error('Error rendering PDF:', error);
                        const currentContainer = document.getElementById('pdfContainer');
                        if (currentContainer) {
                            // Fallback to iframe if PDF.js fails (common on local file:// due to CORS)
                            const isLocal = window.location.protocol === 'file:';
                            const fallbackMessage = isLocal ?
                                '' :
                                '<p class="text-xs text-center opacity-60 mb-2 text-red-400">In-site rendering failed. Using native viewer.</p>';

                            currentContainer.innerHTML = `
                                ${fallbackMessage}
                                <iframe src="${pdfPath}" class="w-full h-[800px] rounded-xl border ${isDark ? 'border-dark-border' : 'border-solarized-base1/20'}"></iframe>
                            `;
                        }
                    }
                })();
            } else {
                console.error('PDF.js library not loaded');
                contentDiv.innerHTML += `<div class="text-center text-red-500 mt-4">PDF.js library not loaded. Please refresh the page.</div>`;
            }
        } else if (activeTab === 'anking') {
            // Render Anking recommendations
            const ankingData = selectedLecture.ankingResource;

            if (ankingData && ankingData.primarySource) {
                const resources = {
                    'BandB': { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', text: 'text-blue-700', bgLight: 'bg-blue-50', icon: '🎓' },
                    'FirstAid': { bg: 'bg-gradient-to-br from-green-500 to-emerald-600', text: 'text-green-700', bgLight: 'bg-green-50', icon: '📚' },
                    'SketchyMicro': { bg: 'bg-gradient-to-br from-purple-500 to-purple-600', text: 'text-purple-700', bgLight: 'bg-purple-50', icon: '🦠' },
                    'SketchyPath': { bg: 'bg-gradient-to-br from-pink-500 to-rose-600', text: 'text-pink-700', bgLight: 'bg-pink-50', icon: '🔬' },
                    'SketchyPharm': { bg: 'bg-gradient-to-br from-indigo-500 to-indigo-600', text: 'text-indigo-700', bgLight: 'bg-indigo-50', icon: '💊' },
                    'Pathoma': { bg: 'bg-gradient-to-br from-orange-500 to-orange-600', text: 'text-orange-700', bgLight: 'bg-orange-50', icon: '🧬' },
                    'Physeo': { bg: 'bg-gradient-to-br from-teal-500 to-cyan-600', text: 'text-teal-700', bgLight: 'bg-teal-50', icon: '⚗️' },
                    'Pixorize': { bg: 'bg-gradient-to-br from-red-500 to-red-600', text: 'text-red-700', bgLight: 'bg-red-50', icon: '🎨' },
                    'Bootcamp': { bg: 'bg-gradient-to-br from-yellow-500 to-amber-600', text: 'text-yellow-700', bgLight: 'bg-yellow-50', icon: '⛺' }
                };
                resources['B&B'] = resources['BandB'];

                const primary = resources[ankingData.primarySource] || resources['FirstAid'];

                let html = `
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full ${isDark ? 'bg-dark-surface/50 border border-dark-border' : 'bg-white/50 border border-solarized-base1/20'} shadow-lg mb-4">
                                <span class="text-3xl">🎯</span>
                                <h3 class="text-xl font-bold ${isDark ? 'text-dark-text' : 'text-solarized-base01'}">Recommended Resources</h3>
                            </div>
                            <p class="text-sm ${isDark ? 'text-dark-muted' : 'text-solarized-base1'}">Based on AnKing tag analysis</p>
                        </div>
                        
                        <!-- Primary Resource -->
                        <div class="mb-8 group">
                            <div class="relative overflow-hidden rounded-2xl ${isDark ? 'bg-dark-surface border-2 border-dark-accent' : 'bg-white border-2 border-solarized-blue'} shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
                                <div class="absolute top-0 right-0 w-32 h-32 ${primary.bg} opacity-10 rounded-full -mr-16 -mt-16"></div>
                                <div class="relative p-8">
                                    <div class="flex items-center gap-2 mb-4">
                                        <div class="flex items-center gap-3 px-4 py-2 rounded-xl ${primary.bg} text-white font-bold text-lg shadow-lg">
                                            <span class="text-2xl">${primary.icon}</span>
                                            <span>${ankingData.primarySource}</span>
                                        </div>
                                        <div class="px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold uppercase flex items-center gap-1 shadow-md">
                                            <span>⭐</span> Best Match
                                        </div>
                                    </div>
                                    <div class="pl-2">
                                        <p class="text-lg ${isDark ? 'text-dark-text' : 'text-solarized-base00'} leading-relaxed">
                                            ${ankingData.chapter.replace(/_/g, ' ').replace(/>/g, ' › ')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                `;

                if (ankingData.alternatives && ankingData.alternatives.length > 0) {
                    html += `
                        <div class="mb-6">
                            <h4 class="text-sm font-bold uppercase tracking-wider ${isDark ? 'text-dark-muted' : 'text-solarized-base1'} mb-4 flex items-center gap-2">
                                <span class="w-8 h-px ${isDark ? 'bg-dark-border' : 'bg-solarized-base1/30'}"></span>
                                <span>Additional Resources</span>
                                <span class="flex-1 h-px ${isDark ? 'bg-dark-border' : 'bg-solarized-base1/30'}"></span>
                            </h4>
                            <div class="grid gap-4">
                    `;

                    ankingData.alternatives.forEach(alt => {
                        const altStyle = resources[alt.resource] || resources['FirstAid'];
                        html += `
                            <div class="group rounded-xl ${isDark ? 'bg-dark-surface/30 hover:bg-dark-surface border border-dark-border' : 'bg-solarized-base2/30 hover:bg-white border border-solarized-base1/10'} p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                                <div class="flex items-start gap-4">
                                    <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg ${altStyle.bg} text-white font-semibold text-sm shadow-md flex-shrink-0">
                                        <span>${altStyle.icon}</span>
                                        <span>${alt.resource}</span>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm ${isDark ? 'text-dark-muted' : 'text-solarized-base00'} leading-relaxed">
                                            ${alt.chapter.replace(/_/g, ' ').replace(/>/g, ' › ')}
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

                html += '</div>';
                contentDiv.innerHTML = html;
            } else {
                contentDiv.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-20 text-center">
                        <div class="w-32 h-32 mb-6 rounded-full ${isDark ? 'bg-dark-surface' : 'bg-solarized-base2'} flex items-center justify-center shadow-lg">
                            <span class="text-6xl">🏫</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 ${isDark ? 'text-dark-text' : 'text-solarized-base01'}">In-House Lecture is Best</h3>
                        <p class="text-lg ${isDark ? 'text-dark-muted' : 'text-solarized-base1'} max-w-md mx-auto leading-relaxed">
                            This lecture doesn't have a strong match with third-party resources. Focus on your in-house materials!
                        </p>
                    </div>
                `;
            }

            tocDiv.classList.add('hidden');
            document.getElementById('tocToggle').classList.add('hidden');

        }
    } catch (e) {
        console.error('Error rendering tab content:', e);
        contentDiv.innerHTML = `<div class="p-8 text-center text-red-500">Error loading content: ${e.message}</div>`;
    }
}

function generateTableOfContents() {
    const toc = document.getElementById('tableOfContents');
    const headings = document.getElementById('tabContent').querySelectorAll('h1, h2, h3');
    if (headings.length === 0) {
        toc.innerHTML = '';
        return;
    }

    let html = '<h3 class="text-sm font-bold uppercase tracking-wider mb-4 ' + (isDark ? 'text-dark-muted' : 'text-solarized-base1') + '">Contents</h3><nav class="space-y-1">';
    headings.forEach((h, index) => {
        const id = 'heading-' + index;
        h.id = id;
        const level = parseInt(h.tagName[1]);
        const padding = (level - 1) * 12;
        html += `<a href="#" onclick="document.getElementById('${id}').scrollIntoView({behavior: 'smooth'}); return false;" class="block text-sm py-1 toc-link ${isDark ? 'text-dark-text hover:text-dark-accent' : 'text-solarized-base00 hover:text-solarized-blue'}" style="padding-left: ${padding}px">${h.textContent}</a>`;
    });
    html += '</nav>';
    toc.innerHTML = html;
}

function renderMarkdown(html) {
    if (!html) return '';

    // Auto-Link Glossary Terms (Exclude Headings)
    if (selectedLecture.glossary && selectedLecture.glossary.length > 0) {
        // Split by lines to process headings separately
        const lines = html.split('\n');
        html = lines.map(line => {
            // Skip headings
            if (line.trim().startsWith('#')) return line;

            let processedLine = line;
            selectedLecture.glossary.forEach(g => {
                // Match whole words, case insensitive, but avoid matching inside HTML tags
                // Also verify we are not inside a link or existing tag
                const regex = new RegExp(`\\b(${g.term})\\b(?![^<]*>)`, 'gi');
                processedLine = processedLine.replace(regex, `<span class="border-b-2 border-dashed border-indigo-400 cursor-help relative group/tooltip">$1<span class="invisible group-hover/tooltip:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-sm rounded shadow-lg z-50 pointer-events-none">${g.definition}</span></span>`);
            });
            return processedLine;
        }).join('\n');
    }



    // Table parsing
    html = html.replace(/(\n|^)(\|.*\|\r?\n)+/g, function (match) {
        const rows = match.trim().split(/\r?\n/).filter(row => row.trim());
        if (rows.length < 2) return match;

        const secondRow = rows[1].trim();
        if (!/^\|?[\s-:]+\|?$/.test(secondRow.replace(/\|/g, ''))) {
            return match;
        }

        const headerRow = rows[0];
        const bodyRows = rows.slice(2);

        const headerCells = headerRow.split('|').filter(c => c.trim() !== '').map(c => c.trim());

        let tableHtml = '<div class="overflow-x-auto rounded-xl border ' + (isDark ? 'border-dark-border' : 'border-solarized-base1/30') + ' shadow-lg my-8"><table class="min-w-full divide-y ' + (isDark ? 'divide-dark-border' : 'divide-solarized-base1/20') + '"><thead class="' + (isDark ? 'bg-dark-surface' : 'bg-solarized-base2') + '"><tr>';

        headerCells.forEach(cell => {
            tableHtml += '<th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider font-sans ' + (isDark ? 'text-dark-accent' : 'text-solarized-cyan') + ' sticky top-0">' + cell + '</th>';
        });

        tableHtml += '</tr></thead><tbody class="divide-y ' + (isDark ? 'divide-dark-border bg-dark-bg' : 'divide-solarized-base1/10 bg-white') + '">';

        bodyRows.forEach(row => {
            const cells = row.split('|');
            if (cells.length > 0 && cells[0].trim() === '') cells.shift();
            if (cells.length > 0 && cells[cells.length - 1].trim() === '') cells.pop();

            tableHtml += '<tr class="' + (isDark ? 'hover:bg-dark-surface' : 'hover:bg-solarized-base2/30') + ' transition-colors duration-200">';
            cells.forEach(cell => {
                const formatted = cell.trim().replace(/<br>/g, '<br/>');
                tableHtml += '<td class="px-6 py-4 text-base leading-relaxed font-serif ' + (isDark ? 'text-dark-muted' : 'text-solarized-base00') + '">' + formatted + '</td>';
            });
            tableHtml += '</tr>';
        });

        return tableHtml + '</tbody></table></div>';
    });

    // High Yield Callouts
    html = html.replace(/:::highyield\s*([\s\S]*?):::/g, function (match, content) {
        return '<div class="my-8 p-6 rounded-xl border-l-8 ' + (isDark ? 'border-yellow-500 bg-yellow-500/10' : 'border-yellow-400 bg-yellow-50') + ' shadow-sm"><div class="flex items-center gap-3 mb-3"><span class="text-2xl">⚡</span><h4 class="text-lg font-bold uppercase tracking-wide font-sans ' + (isDark ? 'text-yellow-400' : 'text-yellow-700') + '">High Yield</h4></div><div class="text-lg font-serif leading-relaxed ' + (isDark ? 'text-dark-text' : 'text-solarized-base00') + '">' + content.trim().replace(/\n/g, '<br/>') + '</div></div>';
    });

    // Clinical Pearls (Block Style to match Correlates)
    html = html.replace(/:::pearl\s*([\s\S]*?):::/g, function (match, content) {
        return '<div class="my-8 p-6 rounded-xl border-l-8 ' + (isDark ? 'border-orange-500 bg-orange-500/10' : 'border-orange-400 bg-orange-50') + ' shadow-sm"><div class="flex items-center gap-3 mb-3"><span class="text-2xl">💡</span><h4 class="text-lg font-bold uppercase tracking-wide font-sans ' + (isDark ? 'text-orange-400' : 'text-orange-700') + '">Clinical Pearl</h4></div><div class="text-lg font-serif leading-relaxed ' + (isDark ? 'text-dark-text' : 'text-solarized-base00') + '">' + content.trim().replace(/\n/g, '<br/>') + '</div></div>';
    });

    // Clinical Correlates (Red Block with List Support)
    html = html.replace(/:::correlate\s*([\s\S]*?):::/g, function (match, content) {
        const lines = content.trim().split('\n');
        let processedContent = '';
        let inList = false;

        lines.forEach(line => {
            line = line.trim();
            if (/^[\*\-]\s/.test(line)) {
                if (!inList) {
                    processedContent += '<ul class="list-disc list-outside ml-6 space-y-2 marker:' + (isDark ? 'text-red-400' : 'text-red-700') + '">';
                    inList = true;
                }
                const itemText = line.replace(/^[\*\-]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-solarized-base01 dark:text-dark-text">$1</strong>');
                processedContent += '<li class="text-lg font-serif leading-relaxed ' + (isDark ? 'text-dark-text' : 'text-solarized-base00') + '">' + itemText + '</li>';
            } else {
                if (inList) {
                    processedContent += '</ul>';
                    inList = false;
                }
                if (line.length > 0) {
                    const processedLine = line.replace(/^[\s\*]+|[\s\*]+$/g, '');
                    processedContent += '<p class="mb-2 text-lg font-serif leading-relaxed ' + (isDark ? 'text-dark-text' : 'text-solarized-base00') + '"><strong class="font-bold text-solarized-base01 dark:text-dark-text">' + processedLine + '</strong></p>';
                }
            }
        });
        if (inList) processedContent += '</ul>';

        return '<div class="my-8 p-6 rounded-xl border-l-8 ' + (isDark ? 'border-red-500 bg-red-500/10' : 'border-red-500 bg-red-50') + ' shadow-sm"><div class="flex items-center gap-3 mb-3"><span class="text-2xl">🩺</span><h4 class="text-lg font-bold uppercase tracking-wide font-sans ' + (isDark ? 'text-red-400' : 'text-red-700') + '">Clinical Correlate</h4></div><div class="space-y-2">' + processedContent + '</div></div>';
    });

    // Slides
    html = html.replace(/:::slides ([^\n]+)\n([\s\S]*?):::/g, function (match, label, content) {
        const items = content.trim().split('\n').filter(l => l.trim());
        let itemsHtml = '';
        items.forEach(item => {
            const cleaned = item.replace(/^\*\s*/, '').trim();
            itemsHtml += '<div class="flex gap-3 items-start"><span class="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ' + (isDark ? 'bg-dark-accent' : 'bg-solarized-cyan') + '"></span><span class="text-solarized-base00 dark:text-dark-muted">' + cleaned + '</span></div>';
        });
        return '<details class="my-8 group"><summary class="cursor-pointer px-6 py-4 rounded-xl border ' + (isDark ? 'bg-dark-surface/50 border-dark-border hover:bg-dark-surface text-dark-accent' : 'bg-solarized-blue/5 border-solarized-blue/20 hover:bg-solarized-blue/10 text-solarized-blue') + ' transition-all duration-300 flex items-center gap-3 font-bold text-sm list-none font-sans shadow-sm"><svg class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><span>Slides ' + label + '</span></summary><div class="mt-4 ml-2 pl-6 border-l-2 border-solarized-base1/20 dark:border-dark-border text-base font-serif leading-relaxed space-y-3 slide-up">' + itemsHtml + '</div></details>';
    });

    // Remove leading page breaks (dashes at start of content)
    html = html.replace(/^[\s\n]*(-{3,5}|\*{3})[\s\n]+/, '');

    // H1 (Lecture Title Style) - reduced bottom margin for tighter spacing
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-4 pb-4 border-b-2 ' + (isDark ? 'border-dark-border text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500' : 'border-solarized-base1/20 text-transparent bg-clip-text bg-gradient-to-r from-solarized-blue to-solarized-cyan') + ' font-sans text-left">$1</h1>');

    // H2 (Poppy Block Style - Centered, Block, 4 Dots)
    html = html.replace(/^## (.*$)/gm, '<div class="my-16 p-8 rounded-2xl ' + (isDark ? 'bg-dark-surface shadow-lg border border-dark-border' : 'bg-white shadow-xl border border-white/50') + ' text-center transform hover:scale-[1.02] transition-transform duration-300"><div class="flex justify-center gap-2 mb-4"><div class="w-1.5 h-1.5 rounded-full bg-red-500"></div><div class="w-1.5 h-1.5 rounded-full bg-yellow-500"></div><div class="w-1.5 h-1.5 rounded-full bg-green-500"></div><div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div></div><h2 class="text-3xl font-black ' + (isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-solarized-cyan to-solarized-blue') + ' font-display tracking-tight">$1</h2></div>');

    // H3 (Subsections)
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mt-8 mb-4 ' + (isDark ? 'text-dark-accent' : 'text-solarized-blue') + ' font-sans flex items-center gap-2 text-left"><span class="w-2 h-8 rounded-full ' + (isDark ? 'bg-dark-accent' : 'bg-solarized-blue') + '"></span>$1</h3>');

    // H4 (Sub-subsections)
    html = html.replace(/^#### (.*$)/gm, '<h4 class="text-xl font-bold mt-6 mb-3 ' + (isDark ? 'text-dark-text' : 'text-solarized-base01') + ' font-sans flex items-center gap-2 text-left"><span class="w-1.5 h-1.5 rounded-full ' + (isDark ? 'bg-dark-muted' : 'bg-solarized-base1') + '"></span>$1</h4>');

    // HR (Hidden)
    html = html.replace(/^\*{3,}$/gm, '');
    html = html.replace(/^-{3,}$/gm, '');

    // Blockquotes
    html = html.replace(/^> (.*$)/gm, '<div class="my-8 pl-8 pr-6 py-6 border-l-4 ' + (isDark ? 'border-dark-accent bg-dark-surface/50' : 'border-solarized-yellow bg-solarized-yellow/10') + ' rounded-r-xl italic text-xl font-serif ' + (isDark ? 'text-dark-text' : 'text-solarized-base01') + ' shadow-sm relative"><span class="absolute top-2 left-2 text-4xl opacity-20 font-serif">"</span>$1</div>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-solarized-base01 dark:text-dark-text">$1</strong>');

    // Italics
    html = html.replace(/(\*|_)(.*?)\1/g, '<em class="italic text-solarized-base01 dark:text-dark-text">$2</em>');

    // Lists (Improved Parsing & Interactivity)
    html = html.replace(/^(\s*)[\*\-]\s+(.*)$/gm, (match, indent, content) => {
        const ml = indent.length * 0.5;
        return '<ul><li class="relative pl-2 leading-relaxed text-lg text-solarized-base00 dark:text-dark-muted font-serif hover:scale-[1.01] origin-left transition-transform duration-200 cursor-default" style="margin-left: ' + ml + 'rem">' + content + '</li></ul>';
    });

    html = html.replace(/^(\s*)\d+\.\s+(.*)$/gm, (match, indent, content) => {
        const ml = indent.length * 0.5;
        return '<ol><li class="relative pl-2 leading-relaxed text-lg text-solarized-base00 dark:text-dark-muted font-serif hover:scale-[1.01] origin-left transition-transform duration-200 cursor-default" style="margin-left: ' + ml + 'rem">' + content + '</li></ol>';
    });

    // Fix nested lists (naive approach: join adjacent lists)
    html = html.replace(/<\/ul>\s*<ul>/g, '');
    html = html.replace(/<\/ol>\s*<ol>/g, '');

    // Styling for lists
    html = html.replace(/<ul>/g, '<ul class="list-disc list-outside ml-6 my-6 space-y-2 marker:' + (isDark ? 'text-dark-accent' : 'text-solarized-blue') + '">');
    html = html.replace(/<ol>/g, '<ol class="list-decimal list-outside ml-6 my-6 space-y-2 marker:font-bold marker:' + (isDark ? 'text-dark-accent' : 'text-solarized-blue') + '">');

    // Subscripts (Standard Markdown ~sub~)
    html = html.replace(/~(.*?)~/g, '<sub>$1</sub>');

    // LaTeX-like Math Support (Basic)
    // 1. Remove $ delimiters for inline math
    html = html.replace(/\$([^$]+)\$/g, function (match, content) {
        let processed = content;
        // \times -> ×
        processed = processed.replace(/\\times/g, '×');
        // \text{...} -> ...
        processed = processed.replace(/\\text\{([^}]+)\}/g, '$1');
        // \frac{num}{den} -> (num / den)
        processed = processed.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)');
        // _{...} -> <sub>...</sub>
        processed = processed.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');
        // _x -> <sub>x</sub> (single char subscript)
        processed = processed.replace(/_([a-zA-Z0-9]+)/g, '<sub>$1</sub>');

        return '<span class="font-serif italic">' + processed + '</span>';
    });

    // Images (Lazy Loading)
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" loading="lazy" class="rounded-xl shadow-lg my-6 max-w-full h-auto mx-auto border-4 ' + (isDark ? 'border-dark-surface' : 'border-white') + '">');

    // Paragraphs
    html = html.replace(/\n\n/g, '</div><div class="mb-8 leading-loose text-lg font-serif text-solarized-base00 dark:text-dark-muted text-justify hyphens-auto">');
    html = html.replace(/\n/g, ' ');

    // Slide Citations: "(Slide X)" -> Badge
    html = html.replace(/\(Slide\s+(\d+)\)/gi, '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-solarized-blue/10 dark:bg-dark-accent/10 text-solarized-blue dark:text-dark-accent mx-1 align-baseline cursor-default select-none" title="From Slide $1">Slide $1</span>');

    // Cross-Links: "[[L102]]" -> Clickable Link
    html = html.replace(/\[\[(L\d+)\]\]/gi, function (match, lectureId) {
        const id = lectureId.toLowerCase(); // Ensure lowercase matching if your IDs are case-sensitive
        return `<button onclick="selectLecture('${id}'); return false;" class="text-solarized-blue dark:text-dark-accent hover:underline font-bold transition-colors inline-flex items-center gap-0.5"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>${lectureId}</button>`;
    });

    return '<div class="mb-8 leading-loose text-lg font-serif text-solarized-base00 dark:text-white text-justify hyphens-auto">' + html + '</div>';
}

function updateWelcomeMessage() {
    const msg = lectures.length > 0 ? lectures.length + ' lecture' + (lectures.length !== 1 ? 's' : '') + ' loaded. Select one to begin.' : 'No lectures loaded. Ensure lectures_data.js exists.';
    document.getElementById('welcomeMessage').textContent = msg;

    // Add Footer
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen && !document.getElementById('qh-footer')) {
        const footer = document.createElement('div');
        footer.id = 'qh-footer';
        footer.className = 'absolute bottom-4 text-xs font-sans opacity-40 tracking-widest uppercase';
        footer.textContent = 'Created by QH';
        welcomeScreen.appendChild(footer);
    }

    // Antigravity Effect
    if (welcomeScreen) {
        const card = welcomeScreen.querySelector('.bg-white'); // Target the card
        if (card) {
            document.addEventListener('mousemove', (e) => {
                if (welcomeScreen.classList.contains('hidden')) return;

                const x = e.clientX;
                const y = e.clientY;
                const rect = card.getBoundingClientRect();
                const cardX = rect.left + rect.width / 2;
                const cardY = rect.top + rect.height / 2;

                const angleX = (y - cardY) / 25;
                const angleY = (cardX - x) / 25;

                card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
                card.style.transition = 'transform 0.1s ease-out';
            });

            document.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
                card.style.transition = 'transform 0.5s ease-out';
            });
        }
    }
}

// New function renderMindMapTree added here (Global Scope)
function renderMindMapTree(data) {
    const container = document.getElementById("mindmap-container");
    if (!container) return;

    // Clear existing
    container.innerHTML = '';

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 3])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    const svg = d3.select("#mindmap-container").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .call(zoom)
        .on("dblclick.zoom", null); // Disable double click zoom

    // Define Drop Shadow Filter
    const defs = svg.append("defs");
    const filter = defs.append("filter")
        .attr("id", "drop-shadow")
        .attr("height", "130%");

    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 3)
        .attr("result", "blur");

    filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", 2)
        .attr("dy", 2)
        .attr("result", "offsetBlur");

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "offsetBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const g = svg.append("g")
        .attr("transform", `translate(${100},${height / 2})`);

    let i = 0,
        duration = 500,
        root;

    // Increased spacing for clarity
    const treemap = d3.tree().nodeSize([45, 250]);

    root = d3.hierarchy(data, function (d) { return d.children; });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after level 2 initially for cleaner view
    root.children.forEach(collapse);

    update(root);

    // Initial Zoom to fit
    // Transition to centered view
    svg.call(zoom.transform, d3.zoomIdentity.translate(100, height / 2).scale(0.8));


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
        nodes.forEach(function (d) { d.y = d.depth * 280 });

        // ****************** Nodes section ******************

        const node = g.selectAll('g.node')
            .data(nodes, function (d) { return d.id || (d.id = ++i); });

        const nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', click);

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
        nodeEnter.append('rect')
            .attr('class', 'node-rect')
            .attr('rx', 8) // Pill shape
            .attr('ry', 8)
            .attr('width', d => Math.max(120, d.data.name.length * 8 + 20))
            .attr('height', 36)
            .attr('y', -18)
            .attr('x', -10)
            .style("fill", d => getNodeColor(d))
            .style("stroke", d => d.depth > 2 ? (isDark ? "#586e75" : "#e0e0e0") : "none") // Border only for leaves
            .style("stroke-width", "1.5px")
            .style("filter", "url(#drop-shadow)")
            .style("cursor", "pointer")
            .style("transition", "fill 0.3s");

        // Add Tooltip (Title)
        nodeEnter.append('title')
            .text(d => d.data.definition ? `${d.data.name}\n\n${d.data.definition}` : d.data.name);

        // Labels
        nodeEnter.append('text')
            .attr("dy", ".35em")
            .attr("x", d => 10) // Padding left
            .attr("text-anchor", "start")
            .text(function (d) {
                // Truncate long names
                const maxLen = 40;
                return d.data.name.length > maxLen ? d.data.name.substring(0, maxLen) + '...' : d.data.name;
            })
            .style("font-family", "'Inter', sans-serif")
            .style("font-size", "13px")
            .style("font-weight", d => d.depth < 3 ? "600" : "400")
            .style("fill", d => getTextColor(d))
            .style("pointer-events", "none"); // Let clicks pass to rect

        // UPDATE
        const nodeUpdate = node.merge(nodeEnter).transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Update styles on state change
        nodeUpdate.select('rect')
            .style("fill", d => getNodeColor(d))
            .attr('width', d => Math.max(120, d.data.name.length * 8 + 20)); // Recalc width

        nodeUpdate.select('text')
            .style("fill", d => getTextColor(d));

        // EXIT
        const nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select('rect')
            .attr('r', 1e-6);

        nodeExit.select('text')
            .style('fill-opacity', 1e-6);

        // ****************** Links section ******************

        const link = g.selectAll('path.link')
            .data(links, function (d) { return d.id; });

        const linkEnter = link.enter().insert('path', "g")
            .attr("class", "link")
            .attr('d', function (d) {
                const o = { x: source.x0, y: source.y0 }
                return diagonal(o, o)
            })
            .style("fill", "none")
            .style("stroke", isDark ? "#586e75" : "#93a1a1")
            .style("stroke-width", "1.5px")
            .style("stroke-opacity", "0.4");

        const linkUpdate = link.merge(linkEnter).transition()
            .duration(duration)
            .attr('d', function (d) { return diagonal(d, d.parent) });

        const linkExit = link.exit().transition()
            .duration(duration)
            .attr('d', function (d) {
                const o = { x: source.x, y: source.y }
                return diagonal(o, o)
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
