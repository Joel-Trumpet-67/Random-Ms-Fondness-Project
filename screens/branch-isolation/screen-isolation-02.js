// screens/branch-isolation/screen-isolation-02.js
// Suicide ideation — handled with care

Engine.register('isolation-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Suicide Ideation');
    const heading = Utils.makeHeading(2, 'When Things Feel Unbearable');

    const p1 = Utils.makeParagraph(
        'Sometimes when people are deeply isolated and in pain, they may start ' +
        'having thoughts of not wanting to be here anymore. This is called ' +
        'suicide ideation — and it\'s more common than most people know.'
    );
    const p2 = Utils.makeParagraph(
        'If you or someone you know is having these thoughts, please know: ' +
        'it doesn\'t mean they want to die. It usually means they want the ' +
        'pain to stop and don\'t know another way out. That other way exists.'
    );

    const warningBox = Utils.createElement('div', 'warning-box');
    const warningText = Utils.makeParagraph(
        '⚠️ If someone tells you they\'re thinking about suicide — take it seriously. ' +
        'Don\'t leave them alone. Don\'t promise to keep it secret. ' +
        'Get a trusted adult or call/text 988 immediately.'
    );
    warningBox.appendChild(warningText);

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Asking someone directly "Are you thinking about suicide?" ' +
        'does NOT put the idea in their head. It shows you care and opens the door.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'isolation-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, p1, p2, warningBox, tipBox, nextBtn, nav);
    return screen;
});
