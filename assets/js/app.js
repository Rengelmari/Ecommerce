let cantArticulos = Number( prompt('Ingrese la cantidad de articulos a comprar'))
let subTotal = 0
let total = 0
let articulo 
let tasa = 2
let iva = 1.21

let totalCuota

function sumaArticulos(cantArticulos) {
    if (cantArticulos >= 1) {
        for (let i = 1; i <= cantArticulos;i++){
            articulo = Number( prompt(`Ingrese el valor del articulo # ${i}`))
            subTotal += articulo
/*             console.log(subTotal) */
        }
        console.log(subTotal)
    }
/*     else {
        console.log(`Ingrese el valor del articulo`)
        articulo = Number( prompt(`Ingrese el valor del articulo ${i}`))
        subTotal += articulo
        console.log(subTotal) 
    } */
}
let cuotas = Number( prompt('Ingrese en cuantas cuotas desea pagar'))
function valorCuotas(cuotas) {

    if (cuotas > 1) {
        total = (subTotal * tasa) * iva
        console.log('El monto total a pagar es '+total+'$ y cada cuota es de '+ total / cuotas +'$')
/*         console.log('El valor de cada cuotas es ' + (total / cuotas) +'$') */
    }
    else {
        total = subTotal*iva
        console.log('El monto total a pagar es ' + total + '$')
    }
} 
sumaArticulos(cantArticulos)
valorCuotas(cuotas)
