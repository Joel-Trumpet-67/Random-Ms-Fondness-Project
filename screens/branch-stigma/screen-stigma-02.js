// screens/branch-stigma/screen-stigma-02.js
// Stigma wrap-up + branch choices

Engine.register('stigma-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Asking For Help Is Brave');

    const joel1 = Utils.speakerBlock('joel',
        'Seeking help for your mental health is not weakness. ' +
        'It takes more courage to say "I\'m struggling and I need support" ' +
        'than to suffer alone and pretend everything is fine.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'You wouldn\'t tell someone with a broken leg to just walk it off. ' +
        'Mental health is no different. It deserves the same care and attention.'
    );
    const joel2 = Utils.speakerBlock('joel', 'Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🤝 Sources of Help',
            desc: 'Find out who you can reach out to for real support.',
            target: 'sources-01'
        },
        {
            label: '⌂ Back to Hub',
            desc: 'Explore a different topic.',
            target: 'hub'
        }
    ];

    choices.forEach(({ label, desc, target }) => {
        grid.appendChild(createChoiceCard(label, desc, target));
    });

    const nav = createNav(true, false);

    Utils.appendChildren(screen, heading, joel1, michael1, joel2, grid, nav);
    return screen;
});
