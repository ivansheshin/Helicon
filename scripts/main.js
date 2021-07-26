[
    product_1 = {

        name: 'Продукт 1',
        price: '1200'

    },
    product_2 = {

        name: 'Продукт 2',
        price: '1400'
    },
    product_3 = {
        name: 'Продукт 3',
        price: '1600'
    }
]



function initListeners() {
    const addToCartButton = document.querySelectorAll('.product-item__button')
    const finalPrice = document.querySelector('.final-amount__price')
    addToCartButton.forEach(item => {
        item.addEventListener('click', () => {
            item.disabled = true;
            const card = item.closest('.product-item');
            const price = card.querySelector('.price__number');
            const finalPriceContent = finalPrice.textContent;
            const cardPriceContent = price.textContent;


            const finalPriceNumber = parseFloat(finalPriceContent.replace(/\s/g, ''))
            const newItemPriceNumber = parseFloat(cardPriceContent.replace(/\s/g, ''))

            const totalPrice = finalPriceNumber + newItemPriceNumber;
            finalPrice.textContent = totalPrice.toLocaleString('ru')

        })
    })


    addName();
    addPrice();


}

function addName() {
    const product1 = document.querySelector('.product-item__title_1')
    const product2 = document.querySelector('.product-item__title_2')
    const product3 = document.querySelector('.product-item__title_3')

    product1.textContent = product_1.name;
    product2.textContent = product_2.name;
    product3.textContent = product_3.name;
}

function addPrice() {
    const product1 = document.querySelector('.price__number_1')
    const product2 = document.querySelector('.price__number_2')
    const product3 = document.querySelector('.price__number_3')

    product1.textContent = product_1.price;
    product2.textContent = product_2.price;
    product3.textContent = product_3.price;
}



initListeners();