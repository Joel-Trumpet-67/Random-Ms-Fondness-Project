// js/engine.js
// Handles rendering screens into the DOM and managing transitions

const Engine = {

    // Registry of all screens — each screen registers itself here
    screens: {},

    // Register a screen by its ID
    register(screenId, renderFn) {
        Engine.screens[screenId] = renderFn;
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

            // Update progress bar
            ProgressBar.update();

            // Scroll to top
            window.scrollTo(0, 0);
        }, 300);
    },

    // Check if a screen exists in the registry
    exists(screenId) {
        return !!Engine.screens[screenId];
    }

};
