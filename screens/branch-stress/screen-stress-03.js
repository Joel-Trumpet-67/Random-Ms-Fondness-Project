// screens/branch-stress/screen-stress-03.js
// Stress wrap-up + branch choices

Engine.register('stress-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'You\'re Not Alone In This');

    const joel1 = Utils.speakerBlock('joel',
        'Stress is something everyone deals with — but not everyone knows ' +
        'how to handle it in a healthy way. Avoiding it, ignoring it, or ' +
        'letting it pile up only makes it worse over time.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Where would you like to go next?'
    );

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '😰 Anxiety',
            desc: 'Learn how stress connects to anxiety and how to recognize the difference.',
            target: 'anxiety-01'
        },
        {
            label: '🧘 Coping Strategies',
            desc: 'Explore practical techniques for managing stress and maintaining wellness.',
            target: 'coping-01'
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
