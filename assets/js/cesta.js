const productsCesta = document.querySelector('#cestaContenedora')
const contadorCesta = document.querySelector('#contadorCesta')
const totalCesta = document.querySelector('#totalCesta')

const codigos = [
    {id:1, codeDesc:"SALE20", descuento:0.20 },
    {id:2, codeDesc:"SALE30", descuento:0.30 },
    {id:3, codeDesc:"SALE40", descuento:0.40 },
    {id:4, codeDesc:"SALE50", descuento:0.50 }
]

const cestaJSon = JSON.parse( localStorage.getItem('cesta') ) || []

 const renderCesta = () => {

    cestaJSon.forEach ((producto) => {

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
/* console.log(cestaJSon) */

 const renderContCesta = () => {
    contadorCesta.innerText = cestaJSon.length
}
renderContCesta()
/* console.log(contadorCesta) */
/* const validarCode = () => {
    let codePromo
    codigos.forEach ((codigo) => {
        if codePromo == codigo.codeDesc
        to
    })
} */

const renderTotalCesta = () => {
    let total = 0
    cestaJSon.forEach ((producto) => { 
        total += producto.precio
    })


    totalCesta.innerText = total
}

renderTotalCesta()

const btnPromo = document.querySelector(`#btnCodDesc`)
   

btnPromo.addEventListener('click', () => {
    console.log(codePromo)
    let totalConDesc = 0
    codigos.forEach ((codigo) => {
        if (codePromo === codigo.codeDesc) {
            totalConDesc = total * codigo.descuento
            sessionStorage.getItem('promoCode', promo)
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Descuento aplicado',
            showConfirmButton: false,
            timer: 100
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    })
    totalCesta.innerText = totalConDesc
    console.log(totalConDesc)
})
console.log(totalCesta)
/* const calcConDesc = () => {
    const promo = 0
    sessionStorage.getItem('promoCode', promo)
    console.log(promo)
}

btnPromo.onclick = calcConDesc
console.log(calcConDesc) */

const btnVaciar = document.getElementById(`btnVaciarCesta`)

btnVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then((result) => {
        if (result.isConfirmed) {
            cestaJSon.length = 0
          Swal.fire(
            'Eliminado!',
            'Su cesta ha sido vaciada.',
            'success'
          )
        }
      })
})