// components/choice-card.js
// Creates a large clickable card used on the hub and branch choice screens

function createChoiceCard(label, description, targetScreenId) {
    const card = Utils.createElement('div', 'choice-card');
    const title = Utils.createElement('h3', 'choice-card__title', label);
    const desc = Utils.createElement('p', 'choice-card__desc', description);

    Utils.appendChildren(card, title, desc);

    // Mark already-visited choices visually
    if (State.hasVisited(targetScreenId)) {
        card.classList.add('choice-card--visited');
    }

    card.addEventListener('click', () => {
        Router.navigate(targetScreenId);
    });

    return card;
}
