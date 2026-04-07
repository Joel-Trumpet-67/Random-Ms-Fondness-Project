// screens/branch-isolation/screen-isolation-01.js
// Isolation and withdrawal

Engine.register('isolation-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag1 = Utils.createElement('span', 'concept-tag', 'Isolation');
    const tag2 = Utils.createElement('span', 'concept-tag', 'Withdrawal');
    const heading = Utils.makeHeading(2, 'Pulling Away From Everyone');

    const joel1 = Utils.speakerBlock('joel',
        'When we\'re hurting, our instinct is often to pull away — to cancel plans, ' +
        'stop texting back, and spend more time alone. This is called withdrawal, ' +
        'and while it feels like self-protection, it usually makes things worse.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'Isolation removes you from the people and experiences that help you heal. ' +
        'The longer you stay isolated, the harder it becomes to reach back out — ' +
        'and the more alone you feel.'
    );

    const warningBox = Utils.createElement('div', 'warning-box');
    const warningText = Utils.makeParagraph(
        '⚠️ Isolation is one of the warning signs that someone may be ' +
        'struggling seriously. If someone you care about has gone quiet ' +
        'and pulled away, reach out — even a simple "I\'m here" matters.'
    );
    warningBox.appendChild(warningText);

    const nextBtn = createButton('Next →', 'isolation-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag1, tag2, heading, joel1, michael1, warningBox, nextBtn, nav);
    return screen;
});
