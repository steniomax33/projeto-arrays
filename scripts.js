const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')

function showAll(productsArray) {
    let myLi = ''


    productsArray.forEach((product) => {

        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price}</p>
                </li>
            `
    })


    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrice = menuOptions.map((product) => ({
        ...product, // Spread Operador
        price: product.price * 0.9, //dar 10% de desconto
    }))
    showAll(newPrice)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)