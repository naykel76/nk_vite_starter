import './src/scss/app.scss'
import logo from '/logo.svg'
import { setupCounter } from './src/js/counter.js'

document.querySelector('#app').innerHTML = `
<div class="flex items-center justify-center h-screen">
    <div class="tac">
        <img src="${logo}" class="mx-auto h-5" alt="Naykel logo" />
        <div class="my"><h1 class="my">Vite Starter with JTB</h1></div>
        <button class="btn" id="counter" type="button"></button>
    </div>
</div>
`

setupCounter(document.querySelector('#counter'))

