import {
    random
} from "lodash";

const PRODUCTS = [
    'Shirt',
    'Shoes',
    'Hat',
    'Jacket',
    'Socks'
]

const COLORS = [
    'green',
    'red',
    'orange',
    'black',
    'white'
]


function getProductsName() {
    const products = PRODUCTS[random(0, PRODUCTS.length - 1)]
    const colors = COLORS[random(0, COLORS.length - 1)]

    return `${products}  ${colors}`
}

let lastIndex = 0

function getProduct() {
    return {
        id: ++lastIndex,
        title: getProductsName(),
        price: random(99, 999)

    }
}


export default

function getProductList(count) {
    let products = [];
    for (let i = 0; i < count; i++) {
        products.push(getProduct())
    }
    return products
}