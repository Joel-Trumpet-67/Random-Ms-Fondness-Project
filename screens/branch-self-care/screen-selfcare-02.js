// screens/branch-self-care/screen-selfcare-02.js
// Resiliency + wrap-up + branch choices

Engine.register('selfcare-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Resiliency');
    const heading = Utils.makeHeading(2, 'Bouncing Back');

    const p1 = Utils.makeParagraph(
        'Resiliency is your ability to recover from difficult experiences. ' +
        'It doesn\'t mean nothing hurts or that you never struggle — ' +
        'it means you have the tools and support to get back up when you get knocked down.'
    );
    const p2 = Utils.makeParagraph(
        'Resiliency is built over time through the small choices you make every day — ' +
        'asking for help when you need it, taking care of your body, maintaining ' +
        'connections with people you trust, and believing that hard times are temporary.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Every hard thing you\'ve already survived is proof of your resiliency. ' +
        'You\'ve made it through 100% of your worst days so far.'
    );
    tipBox.appendChild(tipText);

    const p3 = Utils.makeParagraph('Where would you like to go next?');

    const grid = Utils.createElement('div', 'choice-grid');

    const choices = [
        {
            label: '⌂ Back to Hub',
            desc: 'There\'s more to explore — go back and pick another topic.',
            target: 'hub'
        },
        {
            label: '💬 Closing Message',
            desc: 'Wrap up and hear our final message for you.',
            target: 'closing'
        }
    ];

    choices.forEach(({ label, desc, target }) => {
        grid.appendChild(createChoiceCard(label, desc, target));
    });

    const nav = createNav(true, false);

    Utils.appendChildren(screen, tag, heading, p1, p2, tipBox, p3, grid, nav);
    return screen;
});
