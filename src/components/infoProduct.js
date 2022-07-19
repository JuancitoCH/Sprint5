import '../assets/sass/info.scss'
export default function infoProduct(){
    const infoProduct= document.createElement('div')
    infoProduct.classList.add('infoProduct')
    const info1= document.createElement('div')
    const info2= document.createElement('div')
    const info3= document.createElement('div')
    const info4= document.createElement('div')

    info1.classList.add('product1')
    info2.classList.add('product2')
    info3.classList.add('product3')
    info4.classList.add('product4')

    infoProduct.appendChild(info1)
    infoProduct.appendChild(info2)
    infoProduct.appendChild(info3)
    infoProduct.appendChild(info4)

    for(let child of infoProduct.childNodes) 
        observer.observe(child)


    return infoProduct
}

const observer = new IntersectionObserver(show,{
    threshold: .7
})

function show(entries){
    for( let entry of entries){
        // console.log(entry)
        if(entry.isIntersecting){
            console.log("choca")
            entry.target.classList.add('appear1')
            // appear1 3s ease-in forwards
        }
        else{
            console.log("nochoca")
            entry.target.classList.remove('appear1')
        }
    }
}