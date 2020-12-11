let lista = document.querySelector('.nav-list');
let newLi = document.createElement('li');
// let newA = document.createElement('a');
// newA.innerHTML = 'item 5';
// newLi.appendChild(newA);
newLi.innerHTML = `<a href="">item new</a>`
lista.appendChild(newLi);

let parrafo = document.querySelector('p');
let contenido = parrafo.innerText;
let contenidoArr = contenido.split(" ");

contenidoArr.splice(0,1,`<b>${contenidoArr[0]}</b>`)
parrafo.innerHTML = contenidoArr.join(' ')


setTimeout(function () {
    let imagen1 = document.querySelector('.img-principal');
    imagen1.setAttribute('src', 'https://via.placeholder.com/250')
}, 10000)

document.querySelectorAll('figure')[0].style.order = 2;