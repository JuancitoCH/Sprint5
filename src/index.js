import header from './components/header'
import productPage from './page/product'
import sass from './assets/sass/index.scss'
import footer from './components/footer'
const app = document.getElementById('app')

// console.log(app)

function renderApp(page){
    app.innerHTML=''
    app.appendChild(header())
    app.appendChild(page())
    app.appendChild(footer())
}

renderApp(productPage)

