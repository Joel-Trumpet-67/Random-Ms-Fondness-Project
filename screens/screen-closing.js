// screens/screen-closing.js
// Final closing screen — reachable from multiple branches

Engine.register('closing', () => {
    const screen = Utils.createElement('div', 'screen screen--centered screen--closing');

    const heading = Utils.makeHeading(2, 'You Matter. Full Stop.');

    const p1 = Utils.makeParagraph(
        'We made this because we care — about you, about the people in our lives, ' +
        'and about breaking the silence around mental health.'
    );
    const p2 = Utils.makeParagraph(
        'Whatever you\'re going through right now — stress, anxiety, depression, ' +
        'low self-esteem, pressure from others — you don\'t have to white-knuckle ' +
        'your way through it alone. There are people who want to help. ' +
        'There are tools that work. And there is a way through.'
    );
    const p3 = Utils.createElement('p', 'final-message',
        'Take care of yourself. Reach out when you need to. ' +
        'And remember — asking for help isn\'t giving up. ' +
        'It\'s how you keep going.'
    );

    const sign = Utils.createElement('p', 'final-message',
        '— Joel & Michael'
    );

    const divider = Utils.createElement('hr', '');

    const hubBtn = createButton('⌂ Back to Hub', 'hub', 'btn btn--secondary');
    const restartBtn = createButton('↺ Start Over', 'title', 'btn btn--secondary');

    const btnRow = Utils.createElement('div', 'nav');
    Utils.appendChildren(btnRow, hubBtn, restartBtn);

    const spritePair = Sprites.both('happy', 'happy');
    Utils.appendChildren(screen, spritePair, heading, p1, p2, p3, sign, divider, btnRow);
    return screen;
});
