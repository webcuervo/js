// La idea es crear un ecommerce

//Función envios
function envios(){
    let formaDeEntrega = prompt("Desea que enviemos su compra? Responda si o no")
        if (formaDeEntrega==="si") {
            console.log("Prepararemos tu envío lo antes posible")
        } 
        else {return console.log("Retira tu pedido por nuestro local")}
    let codigoPostal = prompt("Indique su codigo postal")
        if (codigoPostal==="1900") {
            console.log("Sos de La Plata tu envio es sin cargo")
        } else {
            console.log("Debes abonar 500$")
    let tiempoDeEntrega = prompt("Queres saber cuanto tarda en llegar tu producto? Indicanos a cuantos km estas de la cuidad de La Plata.")
        if (tiempoDeEntrega <= 300) 
            console.log("tarda 2 días")
        else 
            console.log("tarda 4 días")}
        }
envios();

//Funcines flecha para operaciones simples
const iva = x => x * 0.21
let costo = 500
let markup = x => x * 0.90
let precioFinal = costo + iva(costo) + markup(costo)
console.log("El total de su compra es de: " + precioFinal)

//Función financiación
function pagoEnCuotas(){
    let cantidadDeCuotas = parseInt(prompt("Indique la cantidad de cuotas entre 1 y 12."))
    let precioFinanciado = precioFinal / cantidadDeCuotas
    console.log("El valor de las cuotas será de " +parseInt(precioFinanciado))
    }
pagoEnCuotas()
