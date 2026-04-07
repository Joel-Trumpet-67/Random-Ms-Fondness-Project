// components/progress-bar.js
// Displays how many hub branches have been completed

const ProgressBar = {

    update() {
        const container = Utils.getProgressContainer();
        Utils.clearElement(container);

        const { completed, total } = State.getProgress();

        // Don't show on title or intro screens
        const hideOn = ['title', 'intro', 'hub'];
        if (hideOn.includes(State.current)) return;

        const wrapper = Utils.createElement('div', 'progress-bar');
        const fill = Utils.createElement('div', 'progress-bar__fill');
        const label = Utils.createElement('span', 'progress-bar__label',
            `${completed} of ${total} topics explored`
        );

        const percent = total === 0 ? 0 : (completed / total) * 100;
        fill.style.width = `${percent}%`;

        Utils.appendChildren(wrapper, fill);
        Utils.appendChildren(container, wrapper, label);
    }

};
