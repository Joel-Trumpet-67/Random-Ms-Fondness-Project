// js/main.js 
// App entry point - initializes states and loads the title screen

document.addEventListener('DOMContentLoaded', () => {
    State.init();
    Router.navigate('title');
});