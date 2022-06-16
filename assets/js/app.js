let subTotal = 0
let total = 0
let art 
let tasa = 2
let iva = 1.21
let totalCuota
let cantArticulos
let itemDesc

function sumaArticulos(cantArticulos) {
    if (cantArticulos >= 1) {
        for (let i = 1; i <= cantArticulos;i++){
            art = Number( prompt(`Ingrese el valor del articulo # ${i}`))
            subTotal += art
        }
        console.log('Subtotal $' + subTotal)
    }
}

function valorCuotas(cuotas) {

    if (cuotas > 1) {
        total = (subTotal * tasa) * iva
        console.log('El monto total a pagar es '+total+'$ y cada cuota es de '+ total / cuotas +'$')
    }
    else {
        total = subTotal*iva
        console.log('El monto total a pagar es ' + total + '$')
    }
} 

class articulo {
    constructor (id, descripcion, precio) 
    {
        this.id = id
        this.descripcion = descripcion
        this.precio = precio
    }
    sumaIva () {
        this.precio = this.precio * iva
    }
}

const productos = [
    new articulo(1, "Aros luna", 2500),
    new articulo(2, "Aros sol", 3000),
    new articulo(3, "Pendiente Landscape", 5000)
]

function agregarArticulo () {
     let id = Number(prompt('Ingrese ID del producto'))
     let descripcion = prompt('Ingrese la descripción del producto')
     let precio = Number(prompt('Ingrese el precio del producto'))

     productos.push (new articulo (id, descripcion, precio))
}

function desicion(comprar) {
    if (comprar == 'si') { 
        itemDesc = prompt(`Ingrese la descripción del producto que desea comprar`)
        const buscar = productos.find( (articulo) => articulo.descripcion === itemDesc)
        cantArticulos = Number( prompt('Ingrese la cantidad de articulos a comprar'))
        let cuotas = Number( prompt('Ingrese en cuantas cuotas desea pagar'))
        sumaArticulos(cantArticulos)
        valorCuotas(cuotas)
    }
    else {
        let desicion= prompt(`Desea ingresar productos a la base?`)
        if (desicion == `si`) {
            alert('Ingrese productos a la base')
            agregarArticulo()
            for (const item of productos) {
                console.log(item)
            }
        }
        else {
            let parametroBusq = prompt(`Ingrese que tipo de productos desea filtrar`)
            const lista = productos.filter ( (articulo) => articulo.descripcion.includes (parametroBusq) )
            console.log(lista)
        }
    }
}

let comprar = prompt('Desea comprar un artículo?')
desicion(comprar)




