// screens/screen-01-intro.js
// Intro screen — sets up the scenario

Engine.register('intro', () => {
    const screen = Utils.createElement('div', 'screen screen--centered screen--intro');

    const spritePair = Sprites.both('happy', 'neutral');
    const heading = Utils.makeHeading(2, 'Hi, it\'s us — Joel & Michael.');
    const quote = Utils.createElement('p', 'quote',
        '"Please take a few minutes to listen to what we have to say..."'
    );

    const joel1 = Utils.speakerBlock('joel',
        'Everyone goes through tough times. Stress, anxiety, sadness, feeling alone — ' +
        'these are things we all experience at some point in our lives.'
    );
    const michael1 = Utils.speakerBlock('michael',
        'This guide covers mental wellness topics that matter — and gives you real ' +
        'strategies, information, and resources to understand and improve mental health.'
    );
    const joel2 = Utils.speakerBlock('joel',
        'Pick any topic from the menu to get started.'
    );

    const nextBtn = createButton('Let\'s Go →', 'hub', 'btn');

    Utils.appendChildren(screen, spritePair, heading, quote, joel1, michael1, joel2, nextBtn);
    return screen;
});
