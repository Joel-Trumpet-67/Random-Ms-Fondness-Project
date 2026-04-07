// screens/branch-coping/screen-coping-02.js
// Coping strategies 3 & 4

Engine.register('coping-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Coping Strategies');
    const heading = Utils.makeHeading(2, 'More Tools For Your Toolkit');

    const h3c = Utils.makeHeading(3, '3. Journaling');
    const joel1 = Utils.speakerBlock('joel',
        'Writing out your thoughts helps you process them. It turns a swirling mess ' +
        'in your head into something concrete you can look at. You don\'t need to write well — ' +
        'just write honestly. Even a few sentences a day makes a difference.'
    );

    const h3d = Utils.makeHeading(3, '4. Talking to Someone You Trust');
    const michael1 = Utils.speakerBlock('michael',
        'Sharing what you\'re going through cuts its weight in half. ' +
        'It doesn\'t have to be a therapist — a friend, parent, coach, or anyone ' +
        'who listens without judgment. Saying it out loud makes it more manageable.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 You don\'t need to use every coping strategy. ' +
        'Find 2 or 3 that work for you and practice them regularly — ' +
        'before you\'re in crisis, not just during one.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'coping-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, h3c, joel1, h3d, michael1, tipBox, nextBtn, nav);
    return screen;
});
