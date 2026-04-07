// screens/branch-stress/screen-stress-02.js
// Stressors — what causes stress

Engine.register('stress-02', () => {
    const screen = Utils.createElement('div', 'screen screen--content');

    const tag = Utils.createElement('span', 'concept-tag', 'Stressors');
    const heading = Utils.makeHeading(2, 'What\'s Causing Your Stress?');

    const joel1 = Utils.speakerBlock('joel',
        'A stressor is anything that triggers a stress response. ' +
        'Stressors can be external — like school, family conflict, or social pressure — ' +
        'or internal, like self-doubt, fear of failure, or unrealistic expectations you set for yourself.'
    );

    const list = Utils.createElement('ul', '');
    const stressors = [
        'School pressure — grades, deadlines, expectations',
        'Social stress — friendships, peer pressure, conflict',
        'Family problems — arguments, changes at home',
        'Big life changes — moving, loss, uncertainty',
        'Internal pressure — perfectionism, self-criticism'
    ];
    stressors.forEach(s => {
        const li = Utils.createElement('li', '', s);
        list.appendChild(li);
    });

    const michael1 = Utils.speakerBlock('michael',
        'Recognizing your stressors is the first step. ' +
        'You can\'t manage what you haven\'t named.'
    );

    const nextBtn = createButton('Next →', 'stress-03', 'btn');
    const nav = createNav(true, true);

    Utils.appendChildren(screen, tag, heading, joel1, list, michael1, nextBtn, nav);
    return screen;
});
