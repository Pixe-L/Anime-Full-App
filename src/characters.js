import '../style.css'
export function characters() {
    const API_URL = 'https://api.jikan.moe/v4/characters';

    fetch(API_URL)
        .then(res => res.json())
        .then(response => {
            if (response.data && Array.isArray(response.data)) {
                const characters = response.data;
                console.log(characters);
                renderCard(characters);
            } else {
                console.error('Error: Invalid response format.');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

// FUNCION PARA RENDERIZAR LA DATA
function renderCard(data) {
    const cardContainer = document.querySelector('.card-container');

    if (!Array.isArray(data)) {
        console.error('Error: data is not an array.');
        return;
    }

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = data.map(item => `
        <div class="card-item">
        <div>
        <h1 class="name">${item.name}</h1>
        <p class="name_chinese">${item.name_kanji}</p>
        <p class="description">${item.about}</p>
        </div>
            <img class="img" src="${item.images.jpg.image_url}"/>
        </div>
    `).join('');

    cardContainer.appendChild(card);
}