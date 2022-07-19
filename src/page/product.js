import generateCanva from "../components/canvaProduct"
import infoProduct from "../components/infoProduct"

export default function product(){
    return generateContent()
}

function generateContent(){
    const page = document.createElement('main')
    page.classList.add('content-product')

    // 3d
    const product= document.createElement('section')
    product.classList.add('product3d')
    generateCanva(product)

    // al while scroll down 

    page.appendChild(product)
    page.appendChild(infoProduct())
    return page
}
