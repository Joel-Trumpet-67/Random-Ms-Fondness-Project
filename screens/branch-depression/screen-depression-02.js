// screens/branch-depression/screen-depression-02.js
// Recognizing depression in someone else + genetics

Engine.register('depression-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag1 = Utils.createElement('span', 'concept-tag', 'Depression');
    const tag2 = Utils.createElement('span', 'concept-tag', 'Genetics');
    const heading = Utils.makeHeading(2, 'Recognizing It In Someone You Care About');

    const p1 = Utils.makeParagraph(
        'Sometimes the people we love are struggling and don\'t say anything. ' +
        'They might pull away, seem quieter than usual, stop doing things they ' +
        'used to enjoy, or brush off your concern with "I\'m fine."'
    );
    const p2 = Utils.makeParagraph(
        'It\'s also worth knowing that genetics play a role in depression. ' +
        'If someone in your family has struggled with mental health, you may be ' +
        'more likely to experience it too — but that doesn\'t mean it\'s inevitable, ' +
        'and it absolutely doesn\'t mean it\'s untreatable.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 You don\'t need to fix someone\'s depression. ' +
        'Just showing up, listening without judgment, and reminding them ' +
        'they\'re not alone can make a real difference.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'depression-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag1, tag2, heading, p1, p2, tipBox, nextBtn, nav);
    return screen;
});
