// screens/branch-peer-pressure/screen-peerpressure-01.js
// What peer pressure is

Engine.register('peerpressure-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Peer Pressure');
    const heading = Utils.makeHeading(2, 'When Others Push You To Be Someone You\'re Not');

    const p1 = Utils.makeParagraph(
        'Peer pressure is the influence people around you have on your choices — ' +
        'sometimes direct ("just do it"), sometimes subtle (feeling like you have to ' +
        'act a certain way to fit in). It doesn\'t just come from friends. ' +
        'It can come from social media, sports teams, family, or anyone whose ' +
        'opinion matters to you.'
    );
    const p2 = Utils.makeParagraph(
        'Not all peer influence is bad — friends can push you toward good things too. ' +
        'But negative peer pressure can lead you to make choices that go against ' +
        'your values, damage your mental health, or put you in unsafe situations.'
    );

    const list = Utils.createElement('ul', '');
    const signs = [
        'Doing things you don\'t want to do just to fit in',
        'Feeling anxious or guilty after hanging out with certain people',
        'Changing how you act, talk, or dress depending on who\'s around',
        'Ignoring your own needs to keep others happy'
    ];
    signs.forEach(s => {
        const li = Utils.createElement('li', '', s);
        list.appendChild(li);
    });

    const nextBtn = createButton('Next →', 'peerpressure-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, p1, p2, list, nextBtn, nav);
    return screen;
});
