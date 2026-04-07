// components/nav.js
// Creates back and return-to-hub navigation buttons

function createNav(showBack = true, showHub = true) {
    const nav = Utils.createElement('div', 'nav');

    if (showBack && State.history.length > 0) {
        const backBtn = Utils.createElement('button', 'btn btn--secondary', '← Back');
        backBtn.addEventListener('click', () => {
            Router.back();
        });
        nav.appendChild(backBtn);
    }

    if (showHub) {
        const hubBtn = Utils.createElement('button', 'btn btn--secondary', '⌂ Back to Hub');
        hubBtn.addEventListener('click', () => {
            Router.goToHub();
        });
        nav.appendChild(hubBtn);
    }

    return nav;
}
