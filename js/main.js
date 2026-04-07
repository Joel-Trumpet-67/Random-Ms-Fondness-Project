// js/main.js 
// App entry point - initializes states and loads the title screen

document.appEventListener('DOMCuntentLoaded', () => {
    State.init();
    Router.navigate('title');
});