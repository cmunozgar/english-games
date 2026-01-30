// Shared components for English Learning Games

// Background Animation Icons - featuring icons from all games
const learningIcons = [
    // Healthy game
    { svg: `<text font-size="48" fill="currentColor">🍎</text>` },
    { svg: `<text font-size="48" fill="currentColor">🥦</text>` },
    { svg: `<text font-size="48" fill="currentColor">🍔</text>` },
    // Plural game
    { svg: `<text font-size="48" fill="currentColor">🐶</text>` },
    { svg: `<text font-size="48" fill="currentColor">📚</text>` },
    // Counting game
    { svg: `<text font-size="48" fill="currentColor">🔢</text>` },
    { svg: `<text font-size="48" fill="currentColor">⭐</text>` },
    // Processed/Natural game
    { svg: `<text font-size="48" fill="currentColor">🌿</text>` },
    { svg: `<text font-size="48" fill="currentColor">🏭</text>` },
    // Nutrients game
    { svg: `<text font-size="48" fill="currentColor">💪</text>` },
    { svg: `<text font-size="48" fill="currentColor">🥩</text>` },
    { svg: `<text font-size="48" fill="currentColor">🍞</text>` },
    // Weather game
    { svg: `<text font-size="48" fill="currentColor">☀️</text>` },
    { svg: `<text font-size="48" fill="currentColor">🌧️</text>` },
    // Paths game
    { svg: `<text font-size="48" fill="currentColor">🐾</text>` },
    { svg: `<text font-size="48" fill="currentColor">🏠</text>` },
    // Clock game
    { svg: `<text font-size="48" fill="currentColor">🕐</text>` },
    { svg: `<text font-size="48" fill="currentColor">⏰</text>` },
    // General learning
    { svg: `<text font-size="48" fill="currentColor">🌈</text>` },
    { svg: `<text font-size="48" fill="currentColor">🎓</text>` }
];

// Fixed positions for icons - distributed around the edges
const iconPositions = [
    { top: '5%', left: '8%', delay: '0s', duration: '20s' },
    { top: '10%', left: '85%', delay: '2s', duration: '25s' },
    { top: '25%', left: '3%', delay: '1s', duration: '22s' },
    { top: '30%', left: '92%', delay: '3s', duration: '23s' },
    { top: '50%', left: '6%', delay: '1.5s', duration: '24s' },
    { top: '55%', left: '90%', delay: '4s', duration: '21s' },
    { top: '70%', left: '10%', delay: '2.5s', duration: '26s' },
    { top: '75%', left: '88%', delay: '3.5s', duration: '19s' },
    { top: '85%', left: '15%', delay: '0.5s', duration: '23s' },
    { top: '90%', left: '80%', delay: '4.5s', duration: '22s' },
    { top: '15%', left: '25%', delay: '1.2s', duration: '24s' },
    { top: '20%', left: '70%', delay: '2.8s', duration: '20s' },
    { top: '65%', left: '20%', delay: '3.2s', duration: '25s' },
    { top: '80%', left: '65%', delay: '0.8s', duration: '21s' },
    { top: '40%', left: '95%', delay: '2.2s', duration: '23s' },
    { top: '95%', left: '40%', delay: '1.8s', duration: '24s' }
];

/**
 * Renders the top header with back link and game logo
 * @param {string} containerId - The ID of the container element
 */
function renderTopHeader(containerId = 'top-header') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const title = container.dataset.title || 'Game';
    const html = `
        <a href="/" class="back-link">← Games</a>
        <h1 class="game-logo">${title}</h1>
    `;
    container.innerHTML = html;
}

/**
 * Renders the score component with current streak and max streak
 * @param {string} containerId - The ID of the container element
 */
function renderScoreComponent(containerId = 'score-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = `
        <div class="score">
            <div class="score-item">
                <div class="score-label">Current Streak</div>
                <div class="score-value" id="streak">0</div>
            </div>
            <div class="score-item">
                <div class="score-label">Max Streak</div>
                <div class="score-value" id="max-streak">0</div>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

/**
 * Renders the background animation with learning icons
 * @param {string} containerId - The ID of the container element
 */
function renderBackgroundAnimation(containerId = 'background-animation') {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    learningIcons.forEach((icon, index) => {
        if (index < iconPositions.length) {
            const pos = iconPositions[index];
            html += `
                <div class="social-icon" style="top: ${pos.top}; left: ${pos.left}; animation-delay: ${pos.delay}; animation-duration: ${pos.duration};">
                    ${icon.svg}
                </div>
            `;
        }
    });
    container.innerHTML = html;
}

/**
 * Initialize all shared components on page load
 */
/**
 * Renders the site footer with credits
 */
function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.textContent = 'Made with ❤️ for the kids';
    document.querySelector('.main-container').appendChild(footer);
}

function initializeComponents() {
    renderTopHeader();
    renderScoreComponent();
    renderBackgroundAnimation();
    renderFooter();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    initializeComponents();
}

// ============================================
// Shared Game Utilities
// ============================================

/**
 * Shared message arrays for feedback
 */
const correctMessages = [
    "⭐ Perfect!",
    "🎉 Excellent work!",
    "👏 Amazing!",
    "🌟 Great job!",
    "💚 Fantastic!",
    "🎊 Brilliant!",
    "✨ Correct!",
    "🏆 Outstanding!",
    "💪 Well done!",
    "🎯 Spot on!"
];

const incorrectMessages = [
    "💭 Not quite!",
    "🤔 Good try!",
    "📚 Let's learn!",
    "💡 Almost!",
    "🌱 Nice effort!",
    "🎓 Keep learning!",
    "🔍 Not this time!",
    "📖 Don't worry!",
    "🧠 Learning time!",
    "💫 Good guess!"
];

/**
 * Get a random message from an array
 */
function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Get a random item from an array, avoiding recently used items
 * @param {Array} items - Array of items to choose from
 * @param {Set} usedSet - Set of already used item keys
 * @param {Function} keyFn - Function to get a unique key from an item
 * @returns {*} A random item from the array
 */
function getRandomItem(items, usedSet, keyFn) {
    let attempts = 0;
    while (attempts < 100) {
        const item = items[Math.floor(Math.random() * items.length)];
        const key = keyFn(item);
        if (!usedSet.has(key)) {
            usedSet.add(key);
            return item;
        }
        attempts++;
    }
    usedSet.clear();
    return items[Math.floor(Math.random() * items.length)];
}

/**
 * Get random wrong answers from an array
 * @param {Array} items - Array of all items
 * @param {*} correct - The correct item to exclude
 * @param {Function} keyFn - Function to get comparable key from item
 * @param {number} count - Number of wrong answers to get
 * @returns {Array} Array of wrong items
 */
function getWrongAnswers(items, correct, keyFn, count = 2) {
    const wrong = [];
    const correctKey = keyFn(correct);
    while (wrong.length < count) {
        const item = items[Math.floor(Math.random() * items.length)];
        const key = keyFn(item);
        if (key !== correctKey && !wrong.some(w => keyFn(w) === key)) {
            wrong.push(item);
        }
    }
    return wrong;
}

/**
 * Shuffle an array randomly
 */
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Creates a game state manager
 */
function createGameState() {
    return {
        streak: 0,
        maxStreak: 0,
        autoAdvanceTimer: null,
        usedItems: new Set(),

        updateStreak(isCorrect) {
            if (isCorrect) {
                this.streak++;
                if (this.streak > this.maxStreak) {
                    this.maxStreak = this.streak;
                }
            } else {
                this.streak = 0;
            }
            document.getElementById('streak').textContent = this.streak;
            document.getElementById('max-streak').textContent = this.maxStreak;
        },

        clearTimer() {
            if (this.autoAdvanceTimer) {
                clearTimeout(this.autoAdvanceTimer);
                this.autoAdvanceTimer = null;
            }
        },

        startAutoAdvance(callback, delay = 3000) {
            const nextButton = document.getElementById('next-button');
            nextButton.classList.add('show');
            setTimeout(() => nextButton.classList.add('auto-advance'), 10);
            this.autoAdvanceTimer = setTimeout(callback, delay);
        }
    };
}

/**
 * Show feedback message
 * @param {boolean} isCorrect - Whether the answer was correct
 * @param {string} details - Additional details to show
 * @param {string} cardId - Optional ID of card element to highlight
 */
function showFeedback(isCorrect, details, cardId = null) {
    const feedback = document.getElementById('feedback');
    const message = getRandomMessage(isCorrect ? correctMessages : incorrectMessages);

    feedback.innerHTML = `
        <div>${message}</div>
        <div style="margin-top: 0.5rem;">${details}</div>
    `;
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');

    if (cardId) {
        const card = document.getElementById(cardId);
        if (card) {
            card.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    }
}

/**
 * Mark answer pills as correct/incorrect
 * @param {string} selectedKey - The key of the selected answer
 * @param {string} correctKey - The key of the correct answer
 * @param {string} dataAttr - The data attribute name to match (default: 'word')
 */
function markAnswerPills(selectedKey, correctKey, dataAttr = 'word') {
    const pills = document.querySelectorAll('.answer-pill');
    pills.forEach(pill => {
        pill.classList.add('disabled');
        const pillKey = pill.dataset[dataAttr];
        if (pillKey === selectedKey && selectedKey !== correctKey) {
            pill.classList.add('incorrect');
        }
        if (pillKey === correctKey) {
            pill.classList.add('correct');
        }
    });
}

/**
 * Transition to next round with fade animation
 * @param {Function} displayRoundFn - Function to call to display the new round
 */
function transitionToNextRound(displayRoundFn) {
    const guessLayout = document.querySelector('.guess-layout');
    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');

    guessLayout.classList.add('fade-out');
    feedback.classList.add('fade-out');
    nextButton.classList.add('fade-out');

    setTimeout(() => {
        feedback.classList.remove('fade-out');
        nextButton.classList.remove('fade-out');
        displayRoundFn();

        setTimeout(() => {
            guessLayout.classList.remove('fade-out');
            guessLayout.classList.add('fade-in');
            setTimeout(() => guessLayout.classList.remove('fade-in'), 400);
        }, 50);
    }, 300);
}

/**
 * Reset round UI state
 * @param {string} cardId - ID of the main card element
 */
function resetRoundState(cardId) {
    if (cardId) {
        const card = document.getElementById(cardId);
        if (card) {
            card.classList.remove('correct', 'incorrect', 'disabled', 'fade-out', 'fade-in');
        }
    }
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('show', 'correct', 'incorrect');
    const nextButton = document.getElementById('next-button');
    nextButton.classList.remove('show', 'auto-advance');
}

/**
 * Create answer pill buttons
 * @param {Array} options - Array of option objects
 * @param {Function} labelFn - Function to get display label from option
 * @param {Function} keyFn - Function to get key from option
 * @param {Function} onSelect - Callback when option is selected
 * @param {string} dataAttr - Data attribute name (default: 'word')
 */
function createAnswerPills(options, labelFn, keyFn, onSelect, dataAttr = 'word') {
    const container = document.getElementById('answer-options');
    container.innerHTML = '';

    options.forEach(option => {
        const pill = document.createElement('button');
        pill.className = 'answer-pill';
        pill.textContent = labelFn(option);
        pill.dataset[dataAttr] = keyFn(option);
        pill.onclick = () => onSelect(option);
        container.appendChild(pill);
    });
}
