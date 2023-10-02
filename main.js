import './style.css'
import { characters } from './src/characters'
import { header } from './src/header';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="phrase"></div>
    <header class="header"></header>
    <section class="card-container"></section>
  </div>
`
characters();
header();