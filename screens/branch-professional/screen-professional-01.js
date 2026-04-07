// screens/branch-professional/screen-professional-01.js
// What therapy looks like + mental health disorders

Engine.register('professional-01', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag1 = Utils.createElement('span', 'concept-tag', 'Seeking Professional Advice');
    const tag2 = Utils.createElement('span', 'concept-tag', 'Mental Health Disorders');
    const heading = Utils.makeHeading(2, 'What Getting Professional Help Actually Looks Like');

    const p1 = Utils.makeParagraph(
        'A lot of people avoid therapy because they don\'t know what to expect. ' +
        'Here\'s the reality: a therapist or counselor is someone trained to listen ' +
        'without judgment, help you understand your thoughts and feelings, ' +
        'and give you tools to cope. It\'s just a conversation — a safe one.'
    );
    const p2 = Utils.makeParagraph(
        'Mental health disorders like anxiety disorders, depression, PTSD, and others ' +
        'are real medical conditions — not personality flaws or signs of weakness. ' +
        'They\'re also highly treatable. Most people who seek professional help ' +
        'see significant improvement.'
    );

    const tipBox = Utils.createElement('div', 'tip-box');
    const tipText = Utils.makeParagraph(
        '💡 You don\'t need a diagnosis to see a therapist. ' +
        'You just need to feel like things are harder than they should be. ' +
        'That\'s enough of a reason.'
    );
    tipBox.appendChild(tipText);

    const nextBtn = createButton('Next →', 'professional-02', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag1, tag2, heading, p1, p2, tipBox, nextBtn, nav);
    return screen;
});
