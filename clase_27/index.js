class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let productos = [];

function crearProducto(nombre, precio) {
    let nuevoProducto = new Producto(nombre, precio);
    productos.push(nuevoProducto);
}

let carrito_de_compras = [];
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

function agregarProductoACarrito(event) {
    let clicked_button = event.target;
    let index = clicked_button.dataset.index;
    console.log(index)
    let producto = productos[index];
    carrito_de_compras.push(producto);
    let carrito = document.querySelector('.carrito');
    let productoElement = document.createElement('li');
    productoElement.innerHTML = producto.nombre;
    carrito.appendChild(productoElement);
    localStorage.setItem('carrito', JSON.stringify(carrito_de_compras));
}

let botones_productos = document.querySelectorAll('.agregar');

for (let i = 0; i < botones_productos.length; i++) {
    const element = botones_productos[i];
    element.addEventListener('click', agregarProductoACarrito)
}
