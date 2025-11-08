// Shared components for English Learning Games

// Background Animation Icons
const learningIcons = [
    // Apple - 1
    {
        color: 'hsl(0, 100%, 50%)',
        svg: `<text font-size="48" fill="currentColor">🍎</text>`
    },
    // Apple - 2
    {
        color: 'hsl(0, 100%, 50%)',
        svg: `<text font-size="48" fill="currentColor">🍎</text>`
    },
    // Book - 1
    {
        color: 'hsl(207, 71%, 55%)',
        svg: `<text font-size="48" fill="currentColor">📚</text>`
    },
    // Book - 2
    {
        color: 'hsl(207, 71%, 55%)',
        svg: `<text font-size="48" fill="currentColor">📚</text>`
    },
    // Star - 1
    {
        color: 'hsl(45, 100%, 60%)',
        svg: `<text font-size="48" fill="currentColor">⭐</text>`
    },
    // Star - 2
    {
        color: 'hsl(45, 100%, 60%)',
        svg: `<text font-size="48" fill="currentColor">⭐</text>`
    },
    // Rainbow - 1
    {
        color: 'hsl(270, 60%, 60%)',
        svg: `<text font-size="48" fill="currentColor">🌈</text>`
    },
    // Rainbow - 2
    {
        color: 'hsl(270, 60%, 60%)',
        svg: `<text font-size="48" fill="currentColor">🌈</text>`
    }
];

// Fixed positions for icons - distributed around the edges
const iconPositions = [
    { top: '8%', left: '12%', delay: '0s', duration: '20s' },
    { top: '15%', left: '88%', delay: '3s', duration: '25s' },
    { top: '45%', left: '5%', delay: '1.5s', duration: '22s' },
    { top: '60%', left: '92%', delay: '4s', duration: '23s' },
    { top: '82%', left: '18%', delay: '2s', duration: '24s' },
    { top: '88%', left: '75%', delay: '5s', duration: '21s' },
    { top: '25%', left: '25%', delay: '2.5s', duration: '26s' },
    { top: '70%', left: '65%', delay: '3.5s', duration: '19s' }
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
                <div class="social-icon" style="color: ${icon.color}; top: ${pos.top}; left: ${pos.left}; animation-delay: ${pos.delay}; animation-duration: ${pos.duration};">
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
