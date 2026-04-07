// components/button.js
// Creates a standard navigation button

function createButton(label, targetScreenId, className = 'btn') {
    const btn = Utils.createElement('button', className, label);

    btn.addEventListener('click', () => {
        Router.navigate(targetScreenId);
    });

    return btn;
}
