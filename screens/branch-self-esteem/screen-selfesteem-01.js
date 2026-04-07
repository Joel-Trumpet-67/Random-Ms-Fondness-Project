// screens/branch-self-esteem/screen-selfesteem-01.js
// What self-esteem is

Engine.register('selfesteem-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Self-Esteem');
    const heading = Utils.makeHeading(2, 'How You See Yourself');

    const joel1 = Utils.speakerBlock('joel',
        'Self-esteem is how you value and see yourself — your overall sense ' +
        'of your own worth. It affects every part of your life: how you handle ' +
        'challenges, how you relate to others, and how you talk to yourself ' +
        'when things go wrong.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Low self-esteem often sounds like an inner voice that says ' +
        '"I\'m not good enough," "I don\'t deserve good things," or ' +
        '"Everyone else has it together except me." That voice isn\'t the truth — ' +
        'it\'s a habit of thinking that can be changed.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Self-esteem isn\'t about thinking you\'re perfect. ' +
        'It\'s about knowing you have value — even with your flaws, ' +
        'even when you fail, even on the hard days.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'selfesteem-02', 'btn');
    const nav = createNav(true, true);

    const conceptSprite = Sprites.concept('happy');
    Utils.appendChildren(screen, tag, conceptSprite, heading, joel1, michael1, tipBox, nextBtn, nav);
    return screen;
});
