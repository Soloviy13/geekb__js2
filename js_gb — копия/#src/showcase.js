const $showcase = document.querySelector('.showcase')

const renderGoodsItem = (item) => {
    return `<div class='good-item'><h3>${item.title}</h3> <p>${item.price}$</p></div>`
}

const renderGoodList = (list) => {
    let goodsList = list.map(
        (item) => {
            return renderGoodsItem(item)
        }
    ).join('');
    $showcase.insertAdjacentHTML('beforeend', goodsList)
}

export default renderGoodList