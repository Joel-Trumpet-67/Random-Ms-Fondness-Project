// screens/branch-stigma/screen-stigma-02.js
// Stigma wrap-up + branch choices

Engine.register('stigma-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Asking For Help Is Brave');

    const p1 = Utils.makeParagraph(
        'Seeking help for your mental health is not weakness. ' +
        'It takes more courage to say "I\'m struggling and I need support" ' +
        'than to suffer alone and pretend everything is fine.'
    );
    const p2 = Utils.makeParagraph(
        'You wouldn\'t tell someone with a broken leg to just walk it off. ' +
        'Mental health is no different. It deserves the same care and attention.'
    );
    const p3 = Utils.makeParagraph('Where would you like to go next?');

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

    Utils.appendChildren(screen, heading, p1, p2, p3, grid, nav);
    return screen;
});
