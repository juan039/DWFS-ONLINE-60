console.log(multiplicar(4,3));
function multiplicar(num1, num2) {
    return num1 * num2;
}

let doble = function (numero) {
    return numero * 2;
}

let cuadrado = (num) => {
    return num * num;
}

let cuadrado2 = (num) => num * num;

// IIFE
let result = (function(x) {
    return x * 3;
})(5)
console.log(result)


const secretNum = 25;
let guess = 333;
let win = 0;
function guessTheNum(secret, guess){
    try {
        if (isNaN(+guess)){
            throw new Error("No fue un número lo que se ingresó");
        }else if(guess == ''){
            throw new Error("No se ingresó un número");
        } else if(+guess > secret){
            throw new Error("El número ingresado es muy alto");
        } else if(+guess < secret){
            throw new Error("El número ingresado es muy bajo");
        }
        win = 1;
        alert("Correcto, el número era: " + secret);  
    } catch (error)  {
        alert(error);
    }
}
// guessTheNum(secretNum,'');
// do{
//     let guess = prompt("Adivine el número");
//     guessTheNum(secretNum, guess);
// }while( win === 0);



// Challenge

let calcularPromedio = (arr) => {
    let sumatoria = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sumatoria = sumatoria +element;
    }
    return sumatoria/arr.length;
}