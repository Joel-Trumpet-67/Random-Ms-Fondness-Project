// screens/branch-coping/screen-coping-01.js
// Coping strategies 1 & 2

Engine.register('coping-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Coping Strategies');
    const heading = Utils.makeHeading(2, 'Tools That Actually Help');

    const joel1 = Utils.speakerBlock('joel',
        'Coping strategies are the things you do to manage stress, anxiety, ' +
        'and difficult emotions. Not all coping is healthy — avoidance, substance use, ' +
        'and self-harm are coping mechanisms too, just harmful ones. ' +
        'Here are strategies that actually work:'
    );

    const h3a = Utils.makeHeading(3, '1. Deep Breathing');
    const michael1 = Utils.speakerBlock('michael',
        'Slow, controlled breathing activates your body\'s calm response. ' +
        'Try box breathing: inhale for 4 counts, hold for 4, exhale for 4, hold for 4. ' +
        'Repeat until you feel your heart rate slow down.'
    );

    const h3b = Utils.makeHeading(3, '2. Physical Exercise');
    const joel2 = Utils.speakerBlock('joel',
        'Movement releases endorphins — your brain\'s natural mood boosters. ' +
        'Even a 20-minute walk can measurably reduce stress and anxiety. ' +
        'You don\'t need a gym — just get your body moving.'
    );

    const nextBtn = createButton('Next →', 'coping-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, joel1, h3a, michael1, h3b, joel2, nextBtn, nav);
    return screen;
});
