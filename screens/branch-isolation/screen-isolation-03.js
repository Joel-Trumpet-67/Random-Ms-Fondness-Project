// screens/branch-isolation/screen-isolation-03.js
// Isolation wrap-up + branch choices

Engine.register('isolation-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Connection Is the Antidote');

    const p1 = Utils.makeParagraph(
        'The opposite of isolation isn\'t just being around people — ' +
        'it\'s feeling genuinely connected. Even one real conversation ' +
        'with someone who cares can shift everything.'
    );
    const p2 = Utils.makeParagraph('Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🤝 Sources of Help',
            desc: 'Find out who you can turn to when things feel too heavy.',
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

    Utils.appendChildren(screen, heading, p1, p2, grid, nav);
    return screen;
});
