// js/state.js
// Tracks current screen, visited screens, and navigation history

const State = {

    current: null,
    history: [],
    visited: new Set(),
    branchesCompleted: new Set(),

    // All hub branches — used for progress tracking
    branches: [
        'stress',
        'depression',
        'self-esteem',
        'peer-pressure',
        'sources'
    ],

    init() {
        this.current = null;
        this.history = [];
        this.visited = new Set();
        this.branchesCompleted = new Set();
    },

    // Set the current screen and log it as visited
    setScreen(screenId) {
        if (this.current) {
            this.history.push(this.current);
        }
        this.current = screenId;
        this.visited.add(screenId);
    },

    // Go back one screen in history
    goBack() {
        if (this.history.length === 0) return null;
        const prev = this.history.pop();
        this.current = prev;
        return prev;
    },

    // Mark a hub branch as completed
    completeBranch(branchName) {
        this.branchesCompleted.add(branchName);
    },

    // Check if a branch has been visited
    isBranchCompleted(branchName) {
        return this.branchesCompleted.has(branchName);
    },

    // Returns how many hub branches have been completed
    getProgress() {
        return {
            completed: this.branchesCompleted.size,
            total: this.branches.length
        };
    },

    // Check if all branches are done
    allBranchesCompleted() {
        return this.branchesCompleted.size >= this.branches.length;
    },

    // Check if a screen has been visited before
    hasVisited(screenId) {
        return this.visited.has(screenId);
    },

    // Returns the previous screen without removing it
    getPrevious() {
        if (this.history.length === 0) return null;
        return this.history[this.history.length - 1];
    }

};
