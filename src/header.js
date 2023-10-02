export function header() {
    const headerContainer = document.createElement('div');
    const headerContent = document.querySelector('.header');

    const phraseContainer = document.createElement('div');
    const phraseContent = document.querySelector('.phrase');

    headerContainer.classList.add('header__container');
    headerContainer.innerHTML = `
        <h1>LOGO</h1>
        <div class="nave">
            <a>Api</a>
            <img/>
            <img/>
        </div>
    `;
    headerContent.appendChild(headerContainer);

    phraseContainer.classList.add('phrase__container');
    phraseContent.innerHTML = `
        <h3>< Less is more /></h3>
    `
}
