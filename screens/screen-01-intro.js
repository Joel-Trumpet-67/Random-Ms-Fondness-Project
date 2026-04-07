// screens/screen-01-intro.js
// Intro screen — sets up the scenario

Engine.register('intro', () => {
    const screen = Utils.createElement('div', 'screen screen--centered screen--intro');

    const spritePair = Sprites.both('happy', 'neutral');
    const heading = Utils.makeHeading(2, 'Hi, it\'s us — Joel & Michael.');
    const quote = Utils.createElement('p', 'quote',
        '"Please take a few minutes to listen to what we have to say..."'
    );
    const p1 = Utils.makeParagraph(
        'Everyone goes through tough times. Stress, anxiety, sadness, feeling alone — ' +
        'these are things we all experience at some point in our lives.'
    );
    const p2 = Utils.makeParagraph(
        'This guide covers mental wellness topics that matter — and gives you real ' +
        'strategies, information, and resources to understand and improve mental health.'
    );
    const p3 = Utils.makeParagraph(
        'Pick any topic from the menu to get started.'
    );
    const nextBtn = createButton('Let\'s Go →', 'hub', 'btn');

    Utils.appendChildren(screen, spritePair, heading, quote, p1, p2, p3, nextBtn);
    return screen;
});
