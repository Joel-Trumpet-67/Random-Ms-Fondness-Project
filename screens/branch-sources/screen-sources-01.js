// screens/branch-sources/screen-sources-01.js
// Sources of help 1 & 2

Engine.register('sources-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Sources of Help');
    const heading = Utils.makeHeading(2, 'You Don\'t Have To Figure This Out Alone');

    const p1 = Utils.makeParagraph(
        'One of the most important things you can do for your mental health is know ' +
        'where to turn when things get hard. Here are real sources of help ' +
        'that are available to you right now:'
    );

    const h3a = Utils.makeHeading(3, '1. School Counselor');
    const pa = Utils.makeParagraph(
        'Your school counselor is there specifically for situations like this. ' +
        'They\'re trained, confidential, and free. You don\'t need a crisis to ' +
        'see them — you can go just to talk. Find them in the guidance office ' +
        'or ask any teacher to connect you.'
    );

    const h3b = Utils.makeHeading(3, '2. A Trusted Adult');
    const pb = Utils.makeParagraph(
        'A parent, guardian, coach, teacher, or any adult you trust. ' +
        'You don\'t need the perfect words — just start with ' +
        '"I\'ve been struggling and I need to talk to someone." ' +
        'Most adults want to help if you give them the chance.'
    );

    const nextBtn = createButton('Next →', 'sources-02', 'btn');
    const nav = createNav(true, true);

    const conceptSprite = Sprites.concept('help');
    Utils.appendChildren(screen, tag, conceptSprite, heading, p1, h3a, pa, h3b, pb, nextBtn, nav);
    return screen;
});
