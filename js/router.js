// js/router.js
// Handles navigation between screens and branch logic

const Router = {

    // Navigate to a screen by ID
    navigate(screenId) {
        if (!Engine.exists(screenId)) {
            console.error(`Router: no screen registered as "${screenId}"`);
            return;
        }

        State.setScreen(screenId);
        Engine.render(screenId);
        Router.checkBranchCompletion(screenId);
    },

    // Go back to the previous screen
    back() {
        const prev = State.goBack();
        if (prev) {
            Engine.render(prev);
        }
    },

    // Go back to the hub from anywhere
    goToHub() {
        Router.navigate('hub');
    },

    // Maps final screens of each branch to their branch name
    branchEndScreens: {
        'stress-03':      'stress',
        'anxiety-03':     'stress',
        'depression-03':  'depression',
        'isolation-03':   'depression',
        'selfesteem-03':  'self-esteem',
        'identity-02':    'self-esteem',
        'peerpressure-03':'peer-pressure',
        'stigma-02':      'peer-pressure',
        'coping-03':      'coping',
        'selfcare-02':    'coping',
        'sources-03':     'sources',
        'professional-02':'sources'
    },

    // Marks a branch complete when its final screen is reached
    checkBranchCompletion(screenId) {
        const branch = Router.branchEndScreens[screenId];
        if (branch) {
            State.completeBranch(branch);
        }
    }

};
