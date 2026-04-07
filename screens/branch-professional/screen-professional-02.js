// screens/branch-professional/screen-professional-02.js
// How to ask for help + wrap-up + branch choices

Engine.register('professional-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Seeking Professional Advice');
    const heading = Utils.makeHeading(2, 'How To Take The First Step');

    const p1 = Utils.makeParagraph(
        'Asking for professional help can feel intimidating — especially if you\'ve ' +
        'never done it before or if stigma has made you feel like you shouldn\'t need it. ' +
        'Here\'s how to start:'
    );

    const list = Utils.createElement('ul', '');
    const steps = [
        'Tell a parent or trusted adult you\'d like to talk to someone',
        'Ask your school counselor for a referral',
        'Call your doctor and ask about mental health resources',
        'If it\'s urgent — call or text 988 right now'
    ];
    steps.forEach(s => {
        const li = Utils.createElement('li', '', s);
        list.appendChild(li);
    });

    const p2 = Utils.makeParagraph('Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
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

    Utils.appendChildren(screen, tag, heading, p1, list, p2, grid, nav);
    return screen;
});
