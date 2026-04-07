// screens/screen-01-intro.js
// Intro screen — sets up the scenario

Engine.register('intro', () => {
    const screen = Utils.createElement('div', 'screen screen--centered screen--intro');

    const heading = Utils.makeHeading(2, 'Hi, it\'s us — Joel & Michael.');
    const quote = Utils.createElement('p', 'quote',
        '"Please take a few minutes to listen to what we have to say..."'
    );
    const p1 = Utils.makeParagraph(
        'Everyone goes through tough times. Stress, anxiety, sadness, feeling alone — ' +
        'these are things we all experience at some point in our lives.'
    );
    const p2 = Utils.makeParagraph(
        'This guide is for someone close to us — maybe a friend, a sibling, a parent — ' +
        'who might be struggling right now and needs a little help finding their way through.'
    );
    const p3 = Utils.makeParagraph(
        'Choose what feels closest to what you or someone you care about is going through.'
    );
    const nextBtn = createButton('Let\'s Go →', 'hub', 'btn');

    Utils.appendChildren(screen, heading, quote, p1, p2, p3, nextBtn);
    return screen;
});
