let cantArticulos = Number( prompt('Ingrese la cantidad de articulos a comprar'))
let subTotal 
let total
let articulo 
const tasa = 2
const iva = 1.21
let cuotas = Number( prompt('Ingrese en cuantas cuotas desea pagar'))
let totalCuota

function sumaArticulos(cantArticulos) {
    if (cantArticulos > 1) {
        for (let i = 1; i <= cantArticulos;i++){
            articulo = Number( prompt(`Ingrese el valor del articulo # ${i}`))
            subTotal += articulo
            console.log(subTotal)
        }
    }
    else {
        console.log(`Ingrese el valor del articulo`)
        articulo = Number( prompt(`Ingrese el valor del articulo # ${i}`))
        subTotal += articulo
        console.log(subTotal) 
    }
}

function valorCuotas(cuotas) {
    if (cuotas > 1) {
        total = math.round((subTotal*tasa)*iva)
    }
    else {
        total = math.round(subTotal*iva)
        console.log('El monto total a pagar es ' + monto * tasa + '$')
    }
}
sumaArticulos()
valorCuotas()