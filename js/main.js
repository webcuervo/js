
// Uso del Nullish coalescing operator

const carrito = JSON.parse(localStorage.getItem("carrito")) ??  []
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
document.getElementById("carrito-contador").innerHTML = `${carrito.length} - $${total}`


// Uso del operador AND

carrito.length === 0 && Toastify({text: "El carrito está vacío", 
                            className: "info", 
                            gravity: "bottom", 
                            style:{background:"linear-gradient(to right, #dc3545, #6f42c1)",
                            }}).showToast() 



// Generar modal de carrito

function modalCarrito() {
    document.getElementById("elemento-carrito").innerHTML = ""
    carrito.forEach((producto) => {
        document.getElementById("elemento-carrito").innerHTML += 
        `<tr>
        <th scope="row">${producto.id}</th>
        <td><b>${producto.nombre}</b></td>
        <td><img class="card-img w-25 h-25" src="${producto.img}"></td>
        <td><b>${producto.precio}</b></td>
        <td><button id="borrar-carrito-${producto.id}" onclick="borrarCarrito(${producto.id})"class="btn btn-danger btn-sm">Eliminar producto</button></td>
        </tr>`
    })
}

// Funcion borrar elemento de carrito

function borrarCarrito(id) {
    const indiceBorrado = carrito.findIndex((producto) => producto.id == id)
    carrito.splice(indiceBorrado, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    //document.getElementById("total-carrito").innerHTML = `Total: $${total}`
    document.getElementById("carrito-contador").innerHTML = `${carrito.length} - $${total}`
    document.getElementById("elemento-carrito").innerHTML = ""
    carrito.forEach((producto) => {
        document.getElementById("elemento-carrito").innerHTML +=
        `<tr>
        <th scope="row">${producto.id}</th>
        <td><b>${producto.nombre}</b></td>
        <td><img class="card-img w-25 h-25" src="${producto.img}"></td>
        <td><b>${producto.precio}</b></td>
        <td><button id="borrar-carrito-${producto.id}" onclick="borrarCarrito(${producto.id})"class="btn btn-danger btn-sm">Eliminar producto</button></td>
        </tr>`
    })
    }

// Funcion vaciar carrito

function vaciarCarrito() {
            const carrito = []
            document.getElementById("elemento-carrito").innerHTML = ""
            localStorage.setItem("carrito", JSON.stringify(carrito))
            const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
            document.getElementById("carrito-contador").innerHTML = `${carrito.length} - $${total}`
            window.location.reload()

}

// Funcion finalizar compra y reinicar el proceso

function finalizarCompra () {
    carrito.forEach((producto) => {
        const carrito = []
        document.getElementById("elemento-carrito").innerHTML = ""
        localStorage.setItem("carrito", JSON.stringify(carrito))
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        document.getElementById("carrito-contador").innerHTML = `${carrito.length} - $${total}`
        window.open('pages/fincompra.html')
        window.location.reload()
        
})} 



// Funcion constructora objetos
function producto(id, nombre, precio, img, descripcion, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.descripcion = descripcion;
    this.categoria = categoria
}

const producto1 = new producto("001", "Living Carrara",20000, "img/naomi-hebert-MP0bgaS_d1c-unsplash.jpg", "Living moderno de sofisticado estilo con marmol de Carrara", "Muebles Interior")


// Spread operator

const producto2 = {
    ...producto1,
    id:"002",
    nombre:"Comedor Clásico",
    precio: 190000,
    img:"img/home-2609600_1280.jpg",
    descripcion:"Comedor Clásico estilo Renacentista",
}

const producto3 = {
    ...producto2,
    id:"003",
    nombre:"Sofas Mágicos",
    precio: 120000,
    img:"img/living-room-1835923_1280.jpg",
    descripcion:"Sofas Indios traidos de India(?), especial para el dia del padre",
    categoria: "Muebles Exterior"
}

const producto4 = {
    ...producto3,
    id:"004",
    nombre:"Espacios grandes para mentes amplias",
    precio:290000,
    img: "img/furniture-998265_1280.jpg",
    descripcion:"No paga expensas"
    
}

const producto5 = {
    ...producto4,
    id: "005",
    nombre: "Living Spread",
    descripcion: "Espaciomas spreader",
    }

// Array de objetos "producto"
const productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);

// Funcion de fltrado de por categorias

function filtrarPorCategoria(categoria) { 
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)
    document.getElementById("cardsdinamicas").innerHTML = ""
    productosFiltrados.forEach((producto) => {
        const idButton = `add-cart-${producto.id}`
        document.getElementById("cardsdinamicas").innerHTML += 
        `<div class="card col-3 m-2">
        <img src="${producto.img}" class="card-img-top" alt="comedor">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion} <br> <strong>Precio: U$D ${producto.precio}</strong></p>
            <a id="${idButton}" data-id="${producto.id}" class="btn btn-primary">COMPRAR</a>
        </div>
    </div>`
})}


// Modificacion del Titulo con DOM

let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
titulo.innerHTML = `<a class="text-danger" style="text-decoration:none" href="index.html">Market Garden-House</a>`

// Funcion dinamica para crear cards de productos

productos.forEach((producto) => {
    const idButton = `add-cart-${producto.id}`
    document.getElementById("cardsdinamicas").innerHTML += 
    `<div class="card col-3 m-2">
    <img src="${producto.img}" class="card-img-top" alt="comedor">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion} <br> <strong>Precio: U$D ${producto.precio}</strong></p>
        <a id="${idButton}" data-id="${producto.id}" class="btn btn-primary">COMPRAR</a>
    </div>
</div>`
})


// Agregar al carrito

    productos.forEach((producto) => {
        const idButton = `add-cart-${producto.id}`
        document.getElementById(idButton).addEventListener('click', (event) => {
        carrito.push(producto)
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        document.getElementById("carrito-contador").innerHTML = `${carrito.length} - $${total}`
        Toastify({
            text: `Agregaste al carrito ${producto.nombre}`,
            className: "info",
            gravity: "bottom",
            style: {
            background: "linear-gradient(to right, #dc3545, #6f42c1)",
            }
        }).showToast()
})})


    /* const index = productos.findIndex((producto) => producto.id === idDelProducto)
    productos.splice(index, 1)
    console.log(productos)
    console.log(productos.length) 

//borrarProducto(idDelProducto = prompt("Ingrese el id a eliminar"))

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
    } */

//pagoEnCuotas()*/