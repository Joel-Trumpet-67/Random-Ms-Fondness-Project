// screens/branch-coping/screen-coping-03.js
// Coping strategy 5 + wrap-up + branch choices

Engine.register('coping-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Coping Strategies');
    const heading = Utils.makeHeading(2, 'One More — And It\'s a Big One');

    const h3e = Utils.makeHeading(3, '5. Mindfulness');
    const joel1 = Utils.speakerBlock('joel',
        'Mindfulness means focusing on the present moment instead of worrying ' +
        'about the past or future. It can be as simple as noticing five things ' +
        'you can see, four you can touch, three you can hear. ' +
        'It pulls your brain out of the anxiety spiral and back to right now.'
    );

    const michael1 = Utils.speakerBlock('michael', 'Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🌱 Self-Care',
            desc: 'Learn how to build coping strategies into lasting daily routines.',
            target: 'selfcare-01'
        },
        {
            label: '🤝 Sources of Help',
            desc: 'Learn about support resources beyond individual coping strategies.',
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

    Utils.appendChildren(screen, tag, heading, h3e, joel1, michael1, grid, nav);
    return screen;
});
