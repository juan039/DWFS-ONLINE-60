class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let productos = [];
let carrito_de_compras = [];

function crearProducto(nombre, precio) {
    let nuevoProducto = new Producto(nombre, precio);
    productos.push(nuevoProducto);
}

crearProducto('Manzana', 50);
crearProducto('Pera', 80);
crearProducto('Naranja', 100);

function mostrarProductos() {
    let contenerdor_productos = document.querySelector('.productos');
    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        let nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('producto');
        nuevoDiv.innerHTML = `<h3>${element.nombre}</h3>
        <p>$ ${element.precio}</p>
        <button class="agregar" data-index="${i}" id="${i}">Agregar</button>`
        contenerdor_productos.appendChild(nuevoDiv);
    }
}
mostrarProductos();

function agregarProductoACarritoEvento(event) {
    console.log(event.target)
    let clicked_button = event.target;
    let index = clicked_button.dataset.index;
    console.log(index)
    let producto = productos[index];
    agregarProductoACarrito(producto, sayHi)
}

function agregarProductoACarrito(product, cb) {
    carrito_de_compras.push(product);
    let carrito = document.querySelector('.carrito');
    let productoElement = document.createElement('li');
    productoElement.innerHTML = product.nombre;
    carrito.appendChild(productoElement);
    localStorage.setItem('carrito', JSON.stringify(carrito_de_compras));
    cb();
}

function sayHi() {
    console.log('hola')
}
let botones_productos = document.querySelectorAll('.agregar');

for (let i = 0; i < botones_productos.length; i++) {
    const element = botones_productos[i];
    element.addEventListener('click', agregarProductoACarritoEvento)
}
