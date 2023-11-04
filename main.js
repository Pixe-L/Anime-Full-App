import './styles/style.css';
import { characters } from './src/characters'
import { header } from './src/header';
import { search } from './src/search';
document.querySelector('#app').innerHTML = `
  <div>
    <div class="phrase"></div>
    <header class="header"></header>
    <div class="search-container"></div>
    <section class="card-container"></section>
    <section class="modal-container"></section>
  </div>
`
characters();
header();
search();