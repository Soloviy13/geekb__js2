import _ from 'lodash';
import '../public/main.css'
import getProductList from '../moc/data.js';
import renderGoodList from './showcase.js';
// import {
//     json,
//     send,
//     type
// } from 'express/lib/response';
import {
    send
} from './utils';

console.log(getProductList)
const productLists = getProductList(20)
console.log(productLists)
renderGoodList(productLists)



header__basket.onclick = function () {
    document.getElementById('please__click').style.display = 'none'
    document.getElementById('display__none_baskett').style.display = 'block'
}


close__basket.onclick = function () {
    document.getElementById('please__click').style.display = 'block'
    document.getElementById('display__none_baskett').style.display = 'none'
}





const API_URL = 'http://localhost:3000/api/v1'


let productList = []
let cart = []



send((error) => {
    console.log(err)
}, (res) => {
    console.log(res)
    let list = JSON.parse(res);
    productList = list;
    renderGoodList(productList);
}, `${API_URL}/catalog`)


let buyed = {
    id: 5,
    title: 'new',
    price: 999,

};
send((error) => {
        console.log(err)
    }, (res) => {
        cart.push(buyed)
    },
    `${API_URL}/cart`, 'POST', JSON.stringify(buyed), {
        'Content-type': 'application/json'
    })