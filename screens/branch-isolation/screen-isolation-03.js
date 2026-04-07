// screens/branch-isolation/screen-isolation-03.js
// Isolation wrap-up + branch choices

Engine.register('isolation-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Connection Is the Antidote');

    const joel1 = Utils.speakerBlock('joel',
        'The opposite of isolation isn\'t just being around people — ' +
        'it\'s feeling genuinely connected. Even one real conversation ' +
        'with someone who cares can shift everything.'
    );
    const michael1 = Utils.speakerBlock('michael', 'Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🤝 Sources of Help',
            desc: 'Learn about available support resources and how to access them.',
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

    Utils.appendChildren(screen, heading, joel1, michael1, grid, nav);
    return screen;
});
