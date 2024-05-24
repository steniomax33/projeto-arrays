const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')

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

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor total dos itens é R$ ${totalValue}</p>
        </li>
    
    `
    console.log(totalValue)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)