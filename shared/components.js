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
    // General food/learning
    { svg: `<text font-size="48" fill="currentColor">🥕</text>` },
    { svg: `<text font-size="48" fill="currentColor">🧀</text>` },
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
function initializeComponents() {
    renderScoreComponent();
    renderBackgroundAnimation();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    initializeComponents();
}
