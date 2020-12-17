Problema/Enunciado

El objetivo de este encuentro es armar una aplicación de un e-commerce, en la cual se listen productos, y que le permita a un/a usuario/a añadir a un carrito aquellos que quiera comprar.
El carrito debe tener un botón de Comprar para pasar a pagar los productos seleccionados.
Divide el proceso de pago en 2 pasos:
Datos personales
Datos de pago

Productos
Utiliza un array de productos, donde cada elemento sea un objeto que almacene toda la información que vas a mostrar en el diseño de tu sitio.


Carrito
Cada vez que un usuario añade un producto a su carrito, almacénalo en el localStorage (te permitirá mantener la información si el usuario recarga la página).


Checkout
Crea el checkout en 2 pasos.
Solicita sus datos personas y si quiere retirar el producto o debes enviar a su dirección.
El segundo informa los medios de pago que dispones y simula una acción de comprar.
No olvides limpiar el localStorage si la compra es correcta.


Definimos la estructura de los productos, es decir que tenga los atributos que se van a mostrar en el HTML, para este caso nombre y precio.
Para llevar esto acabo podemos usar una clase Producto

Nos dice el problema que vamos a tener todos los productos dentro de un Array

Debemos almacenar los productos del carrito en el LocalStorage pero tambien deberiamos crear una variable para no tener que leer el Local Storage a cada momento.

Para el checkout necesitamos 1 formulario, que tenga la parte de datos porsonales, opciones de retiro.

1. comenzamos con el HTML para saber si necesitamos agregar algun atributo adicional de los productos y para tener una guia visual de como va a quedar nuestra pagina.
2. Creamos el HTML
3. Generamos la estructura deseada para un solo producto. En caso de ser necesario para razones de look and fill podemos copiar y pegar el mismo producto las veces que sea necesario.
4. Generar la estructura para el carrito de compra en caso de que sea necesario hacer otro archivo HTML
Como se puede pasar la informacion de un entre archivos HTML?
La manera en que se hace es por medio del LocaslStorage, ya que el LocalStorage es el mismo por Domino (ej. google.com) asi que si guardamos informacion desde la vista de productos en el localStorage, vamos a ser capaces de leerla en la vista de carrito de compras.

5. Ahora pasamos al JS
5.1. Que Necesitamos/Vamos a Necesitar?
    - Una clase para crear los objetos Productos.
    - Un array para guardar los productos creados.
    - Un array para guardar los productos agregados al carro.
    - De acuerdo a lo anterior vamos a necesitar ciertas funciones:
        _ Crear Productos: Se crea un objeto producto y se agrega al array de productos.
        _ Mostrar Productos, este metodo nos va a ayudar a mostrar en HTML los productos de nuestro Array. Por medio de un bucle se va a recorrer todo el array de productos, creando los elementos de acuerdo a la estructura de HTML creada, etiquetas, clases, etc.
        _ Agregar Productos al Carrito, Agregar un producto al array de carrrito y agregar el array de carrito al LocalStorage.
        _ Agregar el Evento click a todos los botones de los productos 
        _ Limpiar Carrito: Elimina la variable en localStorage o solo su contenido.
5.2