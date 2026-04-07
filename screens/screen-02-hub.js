// screens/screen-02-hub.js
// Central hub — player picks which topic to explore

Engine.register('hub', () => {
    const screen = Utils.createElement('div', 'screen screen--hub');

    const heading = Utils.makeHeading(2, 'What are you going through?');
    const subtitle = Utils.createElement('p', 'hub-subtitle',
        'Pick the option that feels most like what\'s on your mind. ' +
        'You can always come back and explore the others.'
    );

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '😰 Stress & Anxiety',
            desc: 'Feeling overwhelmed, worried, or like everything is too much.',
            target: 'stress-01'
        },
        {
            label: '😔 Depression & Isolation',
            desc: 'Feeling down, empty, or like pulling away from everyone.',
            target: 'depression-01'
        },
        {
            label: '💭 Self-Esteem & Identity',
            desc: 'Struggling with how you see yourself or who you are.',
            target: 'selfesteem-01'
        },
        {
            label: '👥 Peer Pressure & Boundaries',
            desc: 'Feeling pressured by others or unsure how to say no.',
            target: 'peerpressure-01'
        },
        {
            label: '🤝 I Need Help',
            desc: 'Not sure where to turn — let\'s find the right support together.',
            target: 'sources-01'
        }
    ];

    choices.forEach(({ label, desc, target }) => {
        grid.appendChild(createChoiceCard(label, desc, target));
    });

    Utils.appendChildren(screen, heading, subtitle, grid);
    return screen;
});
