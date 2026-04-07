// screens/branch-self-care/screen-selfcare-01.js
// Self-care habits

Engine.register('selfcare-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Self-Care');
    const heading = Utils.makeHeading(2, 'Taking Care of Yourself Isn\'t Selfish');

    const p1 = Utils.makeParagraph(
        'Self-care is any intentional action you take to protect and improve ' +
        'your mental, emotional, and physical health. It\'s not bubble baths and ' +
        'candles — it\'s the basics that keep you functioning: sleep, movement, ' +
        'nutrition, connection, and rest.'
    );

    const list = Utils.createElement('ul', '');
    const habits = [
        'Sleep 8–9 hours — your brain literally heals during sleep',
        'Eat regularly — low blood sugar tanks your mood',
        'Move your body daily — even a short walk counts',
        'Spend time with people who make you feel good',
        'Put your phone down before bed — screens disrupt sleep',
        'Do at least one thing a day that you enjoy'
    ];
    habits.forEach(h => {
        const li = Utils.createElement('li', '', h);
        list.appendChild(li);
    });

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 Self-care isn\'t a reward for when things are going well. ' +
        'It\'s what you do consistently so that when things get hard, ' +
        'you have something to fall back on.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'selfcare-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, p1, list, tipBox, nextBtn, nav);
    return screen;
});
