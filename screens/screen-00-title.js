// screens/screen-00-title.js
// Title / start screen

Engine.register('title', () => {
    const screen = Utils.createElement('div', 'screen screen--centered screen--title');

    const title = Utils.makeHeading(1, 'Giving Your Best Advice');
    const subtitle = Utils.createElement('p', 'subtitle',
        'A mental wellness guide from Joel & Michael'
    );
    const startBtn = createButton('Start', 'intro', 'btn btn--pulse');

    Utils.appendChildren(screen, title, subtitle, startBtn);
    return screen;
});
