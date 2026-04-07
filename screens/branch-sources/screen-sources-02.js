// screens/branch-sources/screen-sources-02.js
// Sources of help 3 & 4

Engine.register('sources-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Sources of Help');
    const heading = Utils.makeHeading(2, 'Help Is Available 24/7');

    const h3c = Utils.makeHeading(3, '3. Crisis Text Line');
    const michael1 = Utils.speakerBlock('michael',
        'Text HOME to 741741. Free, confidential, available 24/7. ' +
        'A trained crisis counselor will respond by text — ' +
        'no phone call required. Perfect if you\'re not ready to speak out loud.'
    );

    const h3d = Utils.makeHeading(3, '4. 988 Suicide & Crisis Lifeline');
    const joel1 = Utils.speakerBlock('joel',
        'Call or text 988 anytime. Free, confidential, 24/7. ' +
        'This line is for anyone in emotional distress — not just suicide. ' +
        'If you\'re overwhelmed, scared, or don\'t know what to do, ' +
        'this is a safe place to start.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Save these numbers in your phone right now — ' +
        'not because you need them today, but because you might someday, ' +
        'or someone close to you might.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'sources-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, h3c, michael1, h3d, joel1, tipBox, nextBtn, nav);
    return screen;
});
