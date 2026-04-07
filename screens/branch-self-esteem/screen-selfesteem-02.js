// screens/branch-self-esteem/screen-selfesteem-02.js
// Self-confidence and how to build it

Engine.register('selfesteem-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Self-Confidence');
    const heading = Utils.makeHeading(2, 'Building Confidence');

    const p1 = Utils.makeParagraph(
        'Self-confidence is believing in your ability to handle situations and ' +
        'take on challenges. Unlike self-esteem — which is about your overall worth — ' +
        'confidence is more specific. You can feel confident in some areas and not others, ' +
        'and that\'s completely normal.'
    );
    const p2 = Utils.makeParagraph(
        'Confidence is built through action — not the other way around. ' +
        'You don\'t wait until you feel confident to try things. ' +
        'You try things, get through them, and confidence follows.'
    );

    const list = Utils.createElement('ul', '');
    const tips = [
        'Set small goals and actually complete them',
        'Stop comparing your insides to other people\'s outsides',
        'Speak to yourself the way you\'d speak to a friend',
        'Acknowledge your wins — even the small ones',
        'Do hard things — discomfort is where confidence grows'
    ];
    tips.forEach(t => {
        const li = Utils.createElement('li', '', t);
        list.appendChild(li);
    });

    const nextBtn = createButton('Next →', 'selfesteem-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, p1, p2, list, nextBtn, nav);
    return screen;
});
