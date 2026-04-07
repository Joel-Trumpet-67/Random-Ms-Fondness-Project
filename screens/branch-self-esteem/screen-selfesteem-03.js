// screens/branch-self-esteem/screen-selfesteem-03.js
// Self-esteem wrap-up + branch choices

Engine.register('selfesteem-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'You Are Worth Taking Care Of');

    const joel1 = Utils.speakerBlock('joel',
        'Your self-esteem and confidence aren\'t fixed. They can grow. ' +
        'Every time you treat yourself with kindness, push through something hard, ' +
        'or ask for help when you need it — you\'re investing in yourself.'
    );
    const michael1 = Utils.speakerBlock('michael', 'Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🪞 Identity',
            desc: 'Explore who you are — personality, identity, and where it all comes from.',
            target: 'identity-01'
        },
        {
            label: '🌱 Self-Care',
            desc: 'Practical ways to take care of your mental and emotional health.',
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

    Utils.appendChildren(screen, heading, joel1, michael1, grid, nav);
    return screen;
});
