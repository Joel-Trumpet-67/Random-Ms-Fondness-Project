// screens/branch-peer-pressure/screen-peerpressure-03.js
// Peer pressure wrap-up + branch choices

Engine.register('peerpressure-03', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'You Get To Choose Who You Are');

    const joel1 = Utils.speakerBlock('joel',
        'The people around you will shape you — but they don\'t define you. ' +
        'Surrounding yourself with people who respect your boundaries and support ' +
        'your wellbeing is one of the most powerful things you can do for your mental health.'
    );
    const michael1 = Utils.speakerBlock('michael', 'Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🏷️ Stigma',
            desc: 'Learn how stigma and shame around mental health affects people.',
            target: 'stigma-01'
        },
        {
            label: '🧘 Coping Strategies',
            desc: 'Explore tools for managing pressure and maintaining mental wellness.',
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
