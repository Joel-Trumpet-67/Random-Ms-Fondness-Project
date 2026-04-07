// screens/branch-anxiety/screen-anxiety-01.js
// What anxiety is

Engine.register('anxiety-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Anxiety');
    const heading = Utils.makeHeading(2, 'What Is Anxiety?');

    const joel1 = Utils.speakerBlock('joel',
        'Anxiety is more than just feeling nervous. It\'s a persistent feeling of ' +
        'worry, fear, or dread that doesn\'t go away — even when there\'s no ' +
        'immediate threat. Your brain stays stuck in "danger mode," making it hard ' +
        'to relax, focus, or enjoy everyday life.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Anxiety can show up in your body too — racing heart, sweaty palms, ' +
        'tight chest, upset stomach, or feeling like something bad is about to happen ' +
        'even when everything is fine.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Anxiety is one of the most common mental health experiences. ' +
        'Having anxiety doesn\'t mean something is wrong with you — ' +
        'it means your nervous system needs some support.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'anxiety-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, joel1, michael1, tipBox, nextBtn, nav);
    return screen;
});
