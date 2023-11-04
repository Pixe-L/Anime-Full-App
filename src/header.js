// import { search, inpt } from './search';

import('../styles/header.css');
export function header() {
    const headerContent = document.querySelector('.header');
    const headerContainer = document.createElement('div');

    const phraseContainer = document.createElement('div');
    const phraseContent = document.querySelector('.phrase');

    // search();

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

    headerContainer.classList.add('header__container');
    headerContent.appendChild(headerContainer);
    headerContainer.appendChild(logo);
    // headerContainer.appendChild(inpt);
    headerContainer.appendChild(ul);

    phraseContainer.classList.add('phrase__container');
    phraseContent.innerHTML = `
        <h3>< Less is more /></h3>
    `
}
