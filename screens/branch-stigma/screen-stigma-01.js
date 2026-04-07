// screens/branch-stigma/screen-stigma-01.js
// What stigma is and how avoidance makes it worse

Engine.register('stigma-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag1 = Utils.createElement('span', 'concept-tag', 'Stigma');
    const tag2 = Utils.createElement('span', 'concept-tag', 'Avoidance');
    const heading = Utils.makeHeading(2, 'The Shame Around Mental Health');

    const joel1 = Utils.speakerBlock('joel',
        'Stigma is the negative judgment, shame, or discrimination that surrounds ' +
        'mental health struggles. It\'s what makes people say "just get over it" ' +
        'or "you\'re being dramatic." It\'s what makes people afraid to ask for help ' +
        'because they don\'t want to seem weak.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Stigma causes people to avoid talking about mental health, avoid seeking ' +
        'treatment, and suffer in silence. That avoidance is dangerous — ' +
        'because problems that aren\'t addressed don\'t disappear. They grow.'
    );

    const warningBox = Utils.createElement('div', 'warning-box');
    const warningText = Utils.makeParagraph(
        '⚠️ Stigma is one of the biggest barriers to people getting the help they need. ' +
        'When you speak openly about mental health, you help break it down — ' +
        'not just for yourself, but for everyone around you.'
    );
    warningBox.appendChild(warningText);

    const nextBtn = createButton('Next →', 'stigma-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag1, tag2, heading, joel1, michael1, warningBox, nextBtn, nav);
    return screen;
});
