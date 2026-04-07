// js/utils.js
// Shared helper functions used across the app

const Utils = {

    // Creates a DOM element with optional className and text content
    createElement(tag, className = '', text = '') {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text) el.textContent = text;
        return el;
    },

    // Clears all children from a DOM element
    clearElement(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    },

    // Appends multiple children to a parent element
    appendChildren(parent, ...children) {
        children.forEach(child => parent.appendChild(child));
    },

    // Wraps text in a paragraph element
    makeParagraph(text, className = '') {
        return Utils.createElement('p', className, text);
    },

    // Wraps text in a heading element
    makeHeading(level, text, className = '') {
        return Utils.createElement(`h${level}`, className, text);
    },

    // Returns the main screen container
    getScreenContainer() {
        return document.getElementById('screen-container');
    },

    // Returns the progress container
    getProgressContainer() {
        return document.getElementById('progress-container');
    },

    // Creates a speaker block — who = 'joel' | 'michael'
    // text can be a string or an array of strings (multiple paragraphs)
    speakerBlock(who, text) {
        const block = Utils.createElement('div', `speaker-block speaker-block--${who}`);
        const label = Utils.createElement('span', `speaker-label speaker-label--${who}`, who === 'joel' ? 'Joel' : 'Michael');
        block.appendChild(label);

        const lines = Array.isArray(text) ? text : [text];
        lines.forEach(line => {
            const p = Utils.makeParagraph(line);
            block.appendChild(p);
        });

        return block;
    }

};
