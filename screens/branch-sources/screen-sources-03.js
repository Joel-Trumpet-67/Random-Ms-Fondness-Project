// screens/branch-sources/screen-sources-03.js
// Sources wrap-up + branch choices

Engine.register('sources-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Asking For Help Changes Everything');

    const p1 = Utils.makeParagraph(
        'The hardest part is usually the first step — admitting you need help ' +
        'and reaching out. After that, things start to move. ' +
        'Help is not a last resort. It\'s a smart, brave first move.'
    );
    const p2 = Utils.makeParagraph('Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🏥 Professional Help',
            desc: 'Learn what therapy and counseling actually look like.',
            target: 'professional-01'
        },
        {
            label: '💬 Closing Message',
            desc: 'Hear our final message for you.',
            target: 'closing'
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
