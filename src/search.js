export const inpt = document.createElement('input');
inpt.classList.add('search');
inpt.placeholder = 'Search your favorite character...'

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
            console.log(character);
            const API_URL = `https://api.jikan.moe/v4/characters?q=${character}&sfw`
        }
    })
}