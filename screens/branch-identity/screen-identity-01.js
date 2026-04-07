// screens/branch-identity/screen-identity-01.js
// Personal identity, personality, genetics

Engine.register('identity-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag1 = Utils.createElement('span', 'concept-tag', 'Personal Identity');
    const tag2 = Utils.createElement('span', 'concept-tag', 'Personality');
    const tag3 = Utils.createElement('span', 'concept-tag', 'Genetics');
    const heading = Utils.makeHeading(2, 'Who Are You?');

    const joel1 = Utils.speakerBlock('joel',
        'Personal identity is your sense of who you are — your values, beliefs, ' +
        'experiences, and the story you tell yourself about your life. ' +
        'It\'s shaped by where you come from, what you\'ve been through, ' +
        'and the choices you make every day.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Your personality — the unique way you think, feel, and behave — ' +
        'is influenced by both genetics (what you\'re born with) and your ' +
        'environment (how you were raised and what you\'ve experienced). ' +
        'Neither fully determines who you become.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Your identity isn\'t fixed. It\'s something you actively build. ' +
        'Who you are today doesn\'t have to be who you are forever.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'identity-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag1, tag2, tag3, heading, joel1, michael1, tipBox, nextBtn, nav);
    return screen;
});
