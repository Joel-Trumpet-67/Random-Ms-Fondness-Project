// screens/branch-anxiety/screen-anxiety-02.js
// Anxiety vs normal worry + avoidance

Engine.register('anxiety-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag1 = Utils.createElement('span', 'concept-tag', 'Anxiety');
    const tag2 = Utils.createElement('span', 'concept-tag', 'Avoidance');
    const heading = Utils.makeHeading(2, 'When Worry Becomes a Problem');

    const joel1 = Utils.speakerBlock('joel',
        'Normal worry comes and goes. Anxiety sticks around, grows, and can ' +
        'start controlling your decisions. One of the most common responses to ' +
        'anxiety is avoidance — staying away from people, places, or situations ' +
        'that make you feel anxious.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'The problem with avoidance is that it provides short-term relief ' +
        'but makes anxiety worse in the long run. Every time you avoid something, ' +
        'your brain learns that it\'s dangerous — and the fear grows.'
    );

    const warningBox = Utils.createElement('div', 'warning-box');
    const warningText = Utils.makeParagraph(
        '⚠️ Avoiding things that make you anxious feels like relief — ' +
        'but it\'s actually feeding the anxiety. Facing fears gradually, ' +
        'with support, is how anxiety gets better.'
    );
    warningBox.appendChild(warningText);

    const nextBtn = createButton('Next →', 'anxiety-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag1, tag2, heading, joel1, michael1, warningBox, nextBtn, nav);
    return screen;
});
