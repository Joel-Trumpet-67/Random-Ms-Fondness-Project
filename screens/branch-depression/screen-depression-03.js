// screens/branch-depression/screen-depression-03.js
// Depression wrap-up + branch choices

Engine.register('depression-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Depression Can Get Better');

    const p1 = Utils.makeParagraph(
        'Depression can feel permanent — like it\'s just who you are now. ' +
        'But that\'s the depression talking. With the right support, ' +
        'people recover from depression every single day.'
    );
    const p2 = Utils.makeParagraph('Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '😶 Isolation',
            desc: 'Learn how depression connects to withdrawal and social isolation.',
            target: 'isolation-01'
        },
        {
            label: '🌱 Self-Care',
            desc: 'Learn daily habits and routines that support good mental health.',
            target: 'selfcare-01'
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

    Utils.appendChildren(screen, heading, p1, p2, grid, nav);
    return screen;
});
