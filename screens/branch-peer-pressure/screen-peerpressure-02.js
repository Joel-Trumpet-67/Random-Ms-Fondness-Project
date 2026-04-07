// screens/branch-peer-pressure/screen-peerpressure-02.js
// Boundaries and communication

Engine.register('peerpressure-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag1 = Utils.createElement('span', 'concept-tag', 'Boundaries');
    const tag2 = Utils.createElement('span', 'concept-tag', 'Communication');
    const heading = Utils.makeHeading(2, 'Setting Boundaries and Saying No');

    const joel1 = Utils.speakerBlock('joel',
        'Boundaries are the limits you set to protect your mental, emotional, ' +
        'and physical wellbeing. They\'re not walls — they\'re guidelines that ' +
        'tell people how you need to be treated. Setting a boundary is an act ' +
        'of self-respect, not selfishness.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Good communication is key. You don\'t need a long explanation to say no. ' +
        'A clear, calm "no thanks" or "that\'s not something I\'m comfortable with" ' +
        'is enough. People who respect you will respect your boundaries.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 If someone consistently ignores your boundaries or makes you feel ' +
        'bad for having them — that\'s a sign of an unhealthy relationship, ' +
        'not a sign that your boundaries are wrong.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'peerpressure-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag1, tag2, heading, joel1, michael1, tipBox, nextBtn, nav);
    return screen;
});
