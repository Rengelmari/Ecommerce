const productsCesta = document.querySelector('#cestaContenedora')
const contadorCesta = document.querySelector('#contadorCesta')
const totalCesta = document.querySelector('#totalCesta')
const descuento = document.querySelector('#totalConDesc')
const finalCesta = document.querySelector('#finalCesta')


const codigos = [
    {codeDesc:"SALE20", descuento:0.20},
    {codeDesc:"SALE30", descuento:0.30},
    {codeDesc:"SALE40", descuento:0.40},
    {codeDesc:"SALE50", descuento:0.50}
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
 const renderContCesta = () => {
    contadorCesta.innerText = cestaJSon.length
}

renderContCesta()

const renderTotalCesta = () => {
    let total = 0
    cestaJSon.forEach ((producto) => { 
        total += producto.precio
    })
    totalCesta.innerText = total
}

renderTotalCesta()

const btnPromo = document.querySelector(`#btnCodDesc`)
const code = document.getElementById('#promoCode')

btnPromo.addEventListener('click', (e) => { e.preventDefault();
/*     sessionStorage.getItem ('code', JSON.stringify(code))  */
    let totalDesc = 0
    let totalfinal = 0
    codigos.forEach ((codigo) => {
        if (code === codigo.codeDesc) {
            totalDesc = total * codigo.descuento
            totalfinal = total - totalDesc 
            descuento.innerText = totalDesc
            finalCesta.innerText = totalfinal
            renderCesta()
            renderTotalCesta()
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Descuento aplicado',
            showConfirmButton: false,
            timer: 1500
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Código de descuento no válido!',
                timer: 1500

              })
        }
    })
})


const btnVaciar = document.getElementById(`btnVaciarCesta`)

btnVaciar.addEventListener('click', (e) => { e.preventDefault();
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
            productsCesta.remove()
            localStorage.setItem('cestaJSon', JSON.stringify(cestaJSon))
            renderCesta()
            renderContCesta()
            renderTotalCesta()
          Swal.fire(
            'Eliminado!',
            'Su cesta ha sido vaciada.',
            'success'
          )
        }
      })
})