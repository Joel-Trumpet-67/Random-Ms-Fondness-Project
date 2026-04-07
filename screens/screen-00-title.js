// screens/screen-00-title.js
// Title / start screen

Engine.register('title', () => {
    const screen = Utils.createElement('div', 'screen screen--centered screen--title');

    const title = Utils.makeHeading(1, 'Giving Your Best Advice');
    const subtitle = Utils.createElement('p', 'subtitle',
        'A mental wellness guide from Joel & Michael'
    );
    const spritePair = Sprites.both('happy', 'happy');
    const startBtn = createButton('🎙️ Start Listening', 'intro', 'btn btn--pulse');

    Utils.appendChildren(screen, title, subtitle, spritePair, startBtn);
    return screen;
});
