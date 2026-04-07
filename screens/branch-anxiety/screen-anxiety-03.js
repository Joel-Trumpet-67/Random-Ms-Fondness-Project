// screens/branch-anxiety/screen-anxiety-03.js
// Anxiety wrap-up + branch choices

Engine.register('anxiety-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Anxiety Is Manageable');

    const p1 = Utils.makeParagraph(
        'Anxiety can feel overwhelming, but it is manageable — especially when ' +
        'you have the right tools and support. You don\'t have to white-knuckle ' +
        'your way through it alone.'
    );
    const p2 = Utils.makeParagraph('Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🧘 Coping Strategies',
            desc: 'Learn techniques that help reduce anxiety and build long-term resilience.',
            target: 'coping-01'
        },
        {
            label: '😔 Depression',
            desc: 'Learn how anxiety and depression are connected and how to understand both.',
            target: 'depression-01'
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
