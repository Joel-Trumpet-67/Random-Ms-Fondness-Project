// screens/screen-02-hub.js
// Central hub — player picks which topic to explore

Engine.register('hub', () => {
    const screen = Utils.createElement('div', 'screen screen--hub');

    const heading = Utils.makeHeading(2, 'What would you like to learn about?');
    const subtitle = Utils.createElement('p', 'hub-subtitle',
        'Pick a topic to explore. You can always come back and check out the others.'
    );

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '😰 Stress & Anxiety',
            desc: 'Learn what stress and anxiety are and how they affect you.',
            target: 'stress-01'
        },
        {
            label: '😔 Depression & Isolation',
            desc: 'Understand depression, withdrawal, and how to recognize them.',
            target: 'depression-01'
        },
        {
            label: '💭 Self-Esteem & Identity',
            desc: 'Explore how we see ourselves and build confidence.',
            target: 'selfesteem-01'
        },
        {
            label: '👥 Peer Pressure & Boundaries',
            desc: 'Learn about pressure from others and how to set healthy limits.',
            target: 'peerpressure-01'
        },
        {
            label: '🤝 Sources of Help',
            desc: 'Find out where and how to get support when it\'s needed.',
            target: 'sources-01'
        }
    ];

    choices.forEach(({ label, desc, target }) => {
        grid.appendChild(createChoiceCard(label, desc, target));
    });

    Utils.appendChildren(screen, heading, subtitle, grid);
    return screen;
});
