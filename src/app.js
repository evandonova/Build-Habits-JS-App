import { homePage } from './home.js';
import { scoreCard } from './scorecard.js';

const routes = {
    '/': homePage,
    '/sc': scoreCard
};

document.querySelector('nav').addEventListener('click', onNavigate);
document.getElementById('see-how-button').addEventListener('click', onSeeHowButtonClick);


function onNavigate(event) {
    event.preventDefault();
        
    const url = new URL(event.target.href);
    const view = routes[url.pathname];

    if (typeof view == 'function') {
        view();
    }     
}

function onSeeHowButtonClick() {
    scoreCard();
}

homePage();