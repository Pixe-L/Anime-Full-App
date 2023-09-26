import './style.css'
import { characters } from './src/characters'


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <section class="card-container"></section>
  </div>
`
characters();