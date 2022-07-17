
// Funcion constructora objetos

function producto(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const producto1 = new producto("P01", "aceite de neem", 200, 25)
const producto2 = new producto("P02", "sustrato", 1900, 12)
const producto3 = new producto("P03", "fertilizante organico", 1200, 9)
const producto4 = new producto("P04", "tijera de poda", 2900, 2)
const producto5 = new producto("P05", "maceta 2 litros", 900, 50)

// Array de objetos "producto"

const productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);


console.log(productos)
console.log(productos.length)


//Funcion borrar objeto del inventario de productos

function borrarProducto(idDelProducto) {
    const index = productos.findIndex((producto) => producto.id === idDelProducto)
    productos.splice(index, 1)
    console.log(productos)
    console.log(productos.length)
}
borrarProducto(idDelProducto = prompt("Ingrese el id a eliminar"))

// Buscador por nombre de producto

let terminoDeBusqueda = prompt("Ingrese el producto que necesita").toLowerCase()
const buscador = productos.filter((el) => el.nombre.includes (terminoDeBusqueda));
console.log(buscador)


//Función envios
function envios(){
    let formaDeEntrega = prompt("Desea que enviemos su compra? Responda si o no").toLowerCase()
        while (formaDeEntrega !== "si" && formaDeEntrega !== "no") {
            alert("Debe ingresar si o no")
            formaDeEntrega = prompt("Desea que enviemos su compra? Responda si o no").toLowerCase()}
        if (formaDeEntrega === "si"){
            console.log("Prepararemos tu envio a la brevedad")
        }
        else if (formaDeEntrega === "no"){
            return console.log("Retira tu pedido por nuestro local")
        }
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

//Funciones flecha
const iva = x => x * 0.21
let costo = 500
let markup = x => x * 0.90
let precioFinal = costo + iva(costo) + markup(costo)
console.log("El total de su compra es de: " + precioFinal)

//Función financiación
function pagoEnCuotas(){
    let cantidadDeCuotas = parseInt(prompt("Indique la cantidad de cuotas entre 1 y 12."))
        while (cantidadDeCuotas > 12){
            alert("Debe ingresar un numero entre 1 y 12")
            cantidadDeCuotas = parseInt(prompt("Indique la cantidad de cuotas entre 1 y 12."))}
        if (cantidadDeCuotas <= 12){
        let precioFinanciado = precioFinal / cantidadDeCuotas
        console.log("El valor de las cuotas será de " + parseInt(precioFinanciado))}
        else {
            alert("Debe ingresar un numero entre 1 y 12")
        }
    }

pagoEnCuotas()

