// screens/branch-depression/screen-depression-01.js
// What depression is

Engine.register('depression-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Depression');
    const heading = Utils.makeHeading(2, 'What Is Depression?');

    const joel1 = Utils.speakerBlock('joel',
        'Depression is more than just feeling sad. It\'s a persistent low mood ' +
        'that affects how you think, feel, and function day to day. It can make ' +
        'even simple tasks feel impossible and drain the joy out of things you ' +
        'used to love.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Common signs of depression include:'
    );

    const list = Utils.createElement('ul', '');
    const signs = [
        'Feeling empty, hopeless, or worthless',
        'Loss of interest in activities you used to enjoy',
        'Changes in sleep — sleeping too much or too little',
        'Low energy or feeling physically heavy',
        'Difficulty concentrating or making decisions',
        'Withdrawing from friends and family'
    ];
    signs.forEach(s => {
        const li = Utils.createElement('li', '', s);
        list.appendChild(li);
    });

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Depression is not a personal failure or a choice. ' +
        'It\'s a real mental health condition that responds well to support and treatment.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'depression-02', 'btn');
    const nav = createNav(true, true);

    const conceptSprite = Sprites.concept('depression');
    Utils.appendChildren(screen, tag, conceptSprite, heading, joel1, michael1, list, tipBox, nextBtn, nav);
    return screen;
});
