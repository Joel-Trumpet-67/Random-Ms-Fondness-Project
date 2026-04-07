// screens/branch-stress/screen-stress-01.js
// What is stress + concept: Stress

Engine.register('stress-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Stress');
    const heading = Utils.makeHeading(2, 'What Is Stress?');

    const joel1 = Utils.speakerBlock('joel',
        'Stress is your body\'s natural response to demands or pressure. ' +
        'It\'s not always a bad thing — in small doses, stress can actually ' +
        'motivate you and help you perform. But when it builds up without relief, ' +
        'it starts to take a real toll on your mental and physical health.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'You might notice stress as tension in your body, racing thoughts, ' +
        'trouble sleeping, irritability, or just feeling constantly on edge. ' +
        'These are signs your mind and body are asking for help.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Stress is normal. Every single person experiences it. ' +
        'The goal isn\'t to eliminate stress — it\'s to learn how to manage it.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'stress-02', 'btn');
    const nav = createNav(true, true);

    const conceptSprite = Sprites.concept('stress');
    Utils.appendChildren(screen, tag, conceptSprite, heading, joel1, michael1, tipBox, nextBtn, nav);
    return screen;
});
