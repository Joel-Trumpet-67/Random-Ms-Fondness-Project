// screens/branch-identity/screen-identity-02.js
// Identity wrap-up + branch choices

Engine.register('identity-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const heading = Utils.makeHeading(2, 'Your Story Isn\'t Over');

    const p1 = Utils.makeParagraph(
        'One of the hardest parts of struggling mentally is that it can feel like ' +
        'it defines you. Like you\'re "the anxious one" or "the depressed one." ' +
        'But your mental health struggles are something you\'re going through — ' +
        'not who you are.'
    );
    const p2 = Utils.makeParagraph(
        'Resiliency — the ability to bounce back from hard times — is something ' +
        'everyone can build. Every challenge you\'ve survived has already made you stronger.'
    );
    const p3 = Utils.makeParagraph('Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '🌱 Self-Care',
            desc: 'Build habits that protect and strengthen your mental health.',
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

    Utils.appendChildren(screen, heading, p1, p2, p3, grid, nav);
    return screen;
});
