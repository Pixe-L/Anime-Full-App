import('../styles/header.css');
import('../styles/modal.css');
export const inpt = document.createElement('input');
inpt.classList.add('search');
inpt.placeholder = 'Search characters...';

export const search = () => {
    inpt.addEventListener('input', () => {
        if (inpt.value.length > 0) {
            inpt.style.boxShadow = '0 0 1.5rem rgb(180, 12, 214)';
            inpt.style.opacity = 1;
        } else {
            inpt.style.border = '2px solid #b40cd6';
            inpt.style.opacity = .5;
            inpt.style.boxShadow = 'none';
        }
    })
    inpt.addEventListener('keyup', (event) => {

        if (event.keyCode === 13) {
            let character = inpt.value.toUpperCase().trim();
            let cardContainer = document.querySelector('.card-container');

            document.querySelector('.modal-container').innerHTML = '';
            cardContainer.style.display = 'none';

            const API_URL = fetch(`https://api.jikan.moe/v4/characters?q=${character}&sfw`);

            API_URL
                .then(resp => resp.json())
                .then(data => {
                    if (data.data.length <= 0) {
                        alert('Not found!');
                    } else {
                        data.data.forEach(item => {
                            const articleCard = document.createRange().createContextualFragment(`
                                <article class="article">
                                    <div class="card-containers">
                                        <div class="card__info">
                                            <h2 class="card__title">${item.name}</h2>
                                            <h4 class="card__subtitle">${item.name_kanji ? item.name_kanji : '愛してます'}</h4>
                                            <p class="card__description">${item.about ? item.about : 'Not found!'}</p>
                                        </div>
                                        <div class="card__container-img">
                                            <img class="card__img" src="${item.images.webp.image_url}"/>
                                        </div>
                                    </div>
                                </article>
                            `);
                            document.querySelector('.modal-container').appendChild(articleCard);
                        });
                        console.log(data.data);
                    }
                    inpt.value = '';
                    inpt.style.border = '2px solid #b40cd6';
                    inpt.style.opacity = .5;
                    inpt.style.boxShadow = 'none';
                })
                .catch(error => {
                    console.log(error)
                });
        }
    })
    const searchCont = document.querySelector('.search-container');
    searchCont.appendChild(inpt);
}