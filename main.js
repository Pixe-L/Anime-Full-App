import './style.css'
import { characters } from './src/characters'


document.querySelector('#app').innerHTML = `
  <div>
    <header class="header"></header>
    <section class="card-container"></section>
  </div>
`
characters();