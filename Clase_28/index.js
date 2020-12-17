// saludar(() => console.log("Saludo intermedio"))
// saludar(function() {
//     console.log("Saludo intermedio")
// })


// obtenerGif (string, cb) {
//     buscar gif de String
//     si la respuesta tienes gif
//         cb(gif)
//     sino 
//         mostrar error no hay gif
// }
// pintarDOM (gifs) {
//     pintar en el dom todos los gifs
// }

// obtenerGif('perritos', pintarDOM)

function getName(cb){  
    let name = prompt('Ingresá tu nombre: ');  
    cb(name);  
}  

function sayHi(name){  
    if (name) {
        alert('Hola ' + name);  
    } else {
        alert('No se ingreso un nombre')
    }
} 
function sayBye(name){  
    alert('Adios ' + name);  
} 
// getName(sayHi);  
// getName(sayBye);  


let suma = (n1, n2) => n1 + n2;
// let resta = (n1, n2) => {
//     return n1 - n2
// };
function resta(n1, n2) {
    return n1 - n2;
}
let mult = (n1, n2) => n1 * n2;
// let dividir = (n1, n2) => n1 / n2;

function calculadora (n1, n2, callback){
    return callback(n1, n2);
}

console.log(calculadora(7, 5, resta));

console.log(calculadora(7, 5, suma));

console.log(calculadora(7, 5, function (numero1, numero2) {
    return numero1 / numero2
}));


let productos3 = [];
productos3.push({nombre: 'Remera', precio: 100});
productos3.push({nombre: 'Pantalon', precio: 800});
productos3.push({nombre: 'Camisa', precio: 300});
productos3.sort(function(valor1, valor2){
    if (valor1.nombre < valor2.nombre){
        return -1;
    } else {
        return 1;
    }
});
// productos3.sort();
console.log(productos3);

function saludar(callback) {
    if (typeof(callback) === 'function') {
        callback();

    } else {
        console.error('El parametro no es una funcion')        
    }
}
function bienvenida(){
    console.log("Hola mundo")
}
function adios(){
    console.log("Adios mundo")
}

saludar(bienvenida)


