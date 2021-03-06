
// Funcion constructora objetos

function producto(id, nombre, precio, img, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.descripcion = descripcion;
}

const producto1 = new producto("P01", "Living Carrara", 20000, "img/naomi-hebert-MP0bgaS_d1c-unsplash.jpg", "Living moderno de sofisticado estilo con marmol de Carrara")
const producto2 = new producto("P02", "Comedor Clásico", 190000, "img/home-2609600_1280.jpg", "Comedor Clásico estilo Renacentista" )
const producto3 = new producto("P03", "Sofas Mágicos", 120000, "img/living-room-1835923_1280.jpg", "Sofas Indios traidos de India(?), especial para el dia del padre")
const producto4 = new producto("P04", "Espacios grandes para mentes amplias", 290000, "img/furniture-998265_1280.jpg", "No paga expensas")

// Array de objetos "producto"

const productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
console.log(productos)
console.log(productos.length)

// Modificacion del Titulo con DOM


let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
titulo.innerText = "Market House"

// Creacion de subtitulo con DOM

let ofertas = document.createElement("div")
ofertas.innerHTML = (`<h3 class="text-danger">Ofertas</h3>`)
ofertas.classList.add("containner", "bg-light", "mt-5", "mb-5", "d-flex","justify-content-center")
document.body.append(ofertas)

// Funcion dinamica para crear cards de productos

productos.forEach((producto) => {
    document.getElementById("cardsdinamicas").innerHTML += 
    `<div class="card col-3 m-2">
    <img src="${producto.img}" class="card-img-top" alt="comedor">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion} <br> <strong>Precio: U$D ${producto.precio}</strong></p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`
})

//Funcion borrar objeto del inventario de productos

function borrarProducto(idDelProducto) {
    const index = productos.findIndex((producto) => producto.id === idDelProducto)
    productos.splice(index, 1)
    console.log(productos)
    console.log(productos.length)
}
//borrarProducto(idDelProducto = prompt("Ingrese el id a eliminar"))

// Buscador por nombre de producto

//let terminoDeBusqueda = prompt("Ingrese el producto que necesita").toLowerCase()
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
//envios();

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

//pagoEnCuotas()

