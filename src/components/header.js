export default function header(){
    const header= document.createElement('header')
    const title = document.createElement('h1')
    

    header.classList.add('header')
    title.classList.add('title')

    title.textContent='Product Title'

    header.appendChild(title)
    return header
}