import { search } from './search';

import('../styles/header.css');
export function header() {
    const headerContent = document.querySelector('.header');
    const headerContainer = document.createElement('div');

    const phraseContainer = document.createElement('div');
    const phraseContent = document.querySelector('.phrase');

    // const inpt = document.createElement('input');
    // inpt.classList.add('search');
    // inpt.placeholder = 'Search your favorite character...'

    // inpt.addEventListener('input', () => {
    //     if (inpt.value.length > 0) {
    //         inpt.style.boxShadow = '0 0 1.5rem rgb(180, 12, 214)';
    //         inpt.style.opacity = 1;
    //     } else {
    //         inpt.style.border = '2px solid #b40cd6';
    //         inpt.style.opacity = .5;
    //         inpt.style.boxShadow = 'none';
    //     }
    // })
    // inpt.addEventListener('keyup', (event) => {

    //     if (event.keyCode === 13) {
    //         let character = inpt.value.toUpperCase().trim();
    //         console.log(character);
    //         const API_URL = `https://api.jikan.moe/v4/characters?q=${character}&sfw`
    //     }
    // })

    search();

    const disc = document.createElement('img');
    disc.classList.add('discord');
    disc.src = '../assets/discord.png';
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = '../assets/logo.svg';
    const git = document.createElement('img');
    git.classList.add('git');
    git.src = '../assets/git.svg';

    const aD = document.createElement('a');
    aD.href = 'https://discord.gg/6rYqASjj';
    aD.appendChild(disc);

    const aG = document.createElement('a');
    aG.href = 'https://github.com/Pixe-L';
    aG.appendChild(git);

    const ul = document.createElement('ul');
    let elem = document.createElement('li');
    let elem1 = document.createElement('li');

    elem.appendChild(aD);
    elem1.appendChild(aG);

    ul.appendChild(elem);
    ul.appendChild(elem1);

    headerContainer.innerHTML = ``;
    headerContainer.classList.add('header__container');
    headerContent.appendChild(headerContainer);
    headerContainer.appendChild(logo);
    headerContainer.appendChild(inpt);
    headerContainer.appendChild(ul);

    phraseContainer.classList.add('phrase__container');
    phraseContent.innerHTML = `
        <h3>< Less is more /></h3>
    `
}
