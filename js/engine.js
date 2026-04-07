// js/engine.js
// Handles rendering screens into the DOM and managing transitions

const Engine = {

    // Registry of all screens — each screen registers itself here
    screens: {},

    // Register a screen by its ID
    register(screenId, renderFn) {
        Engine.screens[screenId] = renderFn;
    },

    // Maps screen IDs to episode label shown in podcast header
    episodeLabels: {
        'title':          'Welcome',
        'intro':          'Intro',
        'hub':            'Main Menu',
        'stress-01':      'Ep. 1 — Stress',
        'stress-02':      'Ep. 1 — Stress',
        'stress-03':      'Ep. 1 — Stress',
        'anxiety-01':     'Ep. 2 — Anxiety',
        'anxiety-02':     'Ep. 2 — Anxiety',
        'anxiety-03':     'Ep. 2 — Anxiety',
        'depression-01':  'Ep. 3 — Depression',
        'depression-02':  'Ep. 3 — Depression',
        'depression-03':  'Ep. 3 — Depression',
        'isolation-01':   'Ep. 4 — Isolation',
        'isolation-02':   'Ep. 4 — Isolation',
        'isolation-03':   'Ep. 4 — Isolation',
        'selfesteem-01':  'Ep. 5 — Self-Esteem',
        'selfesteem-02':  'Ep. 5 — Self-Esteem',
        'selfesteem-03':  'Ep. 5 — Self-Esteem',
        'identity-01':    'Ep. 6 — Identity',
        'identity-02':    'Ep. 6 — Identity',
        'peerpressure-01':'Ep. 7 — Peer Pressure',
        'peerpressure-02':'Ep. 7 — Peer Pressure',
        'peerpressure-03':'Ep. 7 — Peer Pressure',
        'stigma-01':      'Ep. 8 — Stigma',
        'stigma-02':      'Ep. 8 — Stigma',
        'coping-01':      'Ep. 9 — Coping',
        'coping-02':      'Ep. 9 — Coping',
        'coping-03':      'Ep. 9 — Coping',
        'selfcare-01':    'Ep. 10 — Self-Care',
        'selfcare-02':    'Ep. 10 — Self-Care',
        'sources-01':     'Ep. 11 — Sources',
        'sources-02':     'Ep. 11 — Sources',
        'sources-03':     'Ep. 11 — Sources',
        'professional-01':'Ep. 12 — Professional',
        'professional-02':'Ep. 12 — Professional',
        'closing':        'Closing'
    },

    // Update the podcast header episode label
    updateEpisodeLabel(screenId) {
        const label = Engine.episodeLabels[screenId] || '';
        const el = document.getElementById('podcast-ep-label');
        if (el) el.textContent = label;
    },

    // Render a screen by ID into the screen container
    render(screenId) {
        const container = Utils.getScreenContainer();
        const screen = Engine.screens[screenId];

        if (!screen) {
            console.error(`Screen not found: ${screenId}`);
            return;
        }

        // Fade out
        container.classList.remove('fade-in');
        container.classList.add('fade-out');

        setTimeout(() => {
            // Clear and render new screen
            Utils.clearElement(container);
            const content = screen();
            container.appendChild(content);

            // Fade in
            container.classList.remove('fade-out');
            container.classList.add('fade-in');

            // Update progress bar and episode label
            ProgressBar.update();
            Engine.updateEpisodeLabel(screenId);
            Engine.applyTypewriter(container);

            // Scroll to top
            window.scrollTo(0, 0);
        }, 300);
    },

    // Apply typewriter effect to h2 headings on each new screen
    applyTypewriter(container) {
        const heading = container.querySelector('h2');
        if (!heading) return;
        heading.classList.add('typewriter-text');
        heading.addEventListener('animationend', (e) => {
            if (e.animationName === 'typewriter') {
                heading.classList.add('done');
            }
        });
    },

    // Check if a screen exists in the registry
    exists(screenId) {
        return !!Engine.screens[screenId];
    }

};
