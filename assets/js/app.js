const productsContainer = document.querySelector('#landscapeGaleria') 

BBDD.forEach ((item) => {
    const div = document.createElement('div')
    div.classList.add('cardProduct')
    div.innerHTML = `
                <div class="cardProduct__image">
                    <img src=${item.img} alt=${item.alt} class="cardAnimation">
                </div>
                <div class="cardProduct__description">
                    <strong class="cardProduct__description__price">$ ${item.precio}</strong>
                    <button onclick ="sumarCesta(${item.id})" class="cardProduct__comprar">Comprar</button>
                </div>
    `
    productsContainer.append(div)
})

const cesta = []

const sumarCesta = (id) => {
    const producto = BBDD.find((prod) => prod.id ===  id)
    cesta.push(producto)

    localStorage.setItem ('cesta', JSON.stringify(cesta))
}
