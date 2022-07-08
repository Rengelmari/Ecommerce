const productsCesta = document.querySelector('#cestaContenedora')
const contadorCesta = document.querySelector('#contadorCesta')
const totalCesta = document.querySelector('#totalCesta')

const cestaJSon = JSON.parse( localStorage.getItem('cesta') )
/* console.log(cestaJSon) */

 const renderCesta = () => {

    cestaJSon.forEach ((producto) => {
/*         productsCesta.innerHTML = `` */

        const li = document.createElement('li')
        li.classList.add(`list-group-item`)
        li.innerHTML = `
                <div>
                    <h6 class="my-0">${producto.descripcion}</h6>
                </div>
                <span class="text-muted">$${producto.precio}</span>
        `
        productsCesta.append(li)
    })
}

renderCesta()
console.log(cestaJSon)

 const renderContCesta = () => {
    contadorCesta.innerText = cestaJSon.length
}
renderContCesta()
console.log(contadorCesta)

const renderTotalCesta = () => {
    let total = 0
    cestaJSon.forEach ((producto) => { 
        total += producto.precio
    })
    totalCesta.innerText = total
}

renderTotalCesta()
console.log(totalCesta)