//omdb API - The Open Movie Database. 
//Api key se consigue en: http://www.omdbapi.com/

let api_key = '7fb789f2';

let img = document.querySelector('.pelicula__img');
let titulo = document.querySelector('.pelicula__titulo');
let genero = document.querySelector('.pelicula__genero');
let descripcion = document.querySelector('.pelicula__descripcion');
let resultados = document.querySelector('#resultados')
//Enpoint de titulo de pelicula
async function getMovieByTitle(title) {
    let url = `https://www.omdbapi.com/?apikey=${api_key}&t=${title}`;
    const resp = await fetch(url);
    const data = await resp.json();
    //Puede en vez de crearse y ponerlo en el contenedor, cambiar el src a una imagen ya colocada en el HTML
  
    console.log(data);
    return data;
    
};

let pelicula1 = getMovieByTitle('Donnie Darko');

pelicula1.then((data) => {
    mostrarDOMTemplate(data)
})

let pelicula2 = getMovieByTitle('The Matrix');

pelicula2.then((data) => {
    mostrarDOMTemplate(data)
})

function cambiarAtributos(data) {
    console.log(data)
    img.setAttribute('src', data.Poster);
    titulo.textContent = data.Title;
    genero.textContent = data.Genre;
    descripcion.textContent = data.Plot;
}

function mostrarDOM(data) {
    let div = document.createElement('div')
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    img.setAttribute('src', data.Poster);
    h2.textContent = data.Title;
    h3.textContent = data.Genre;
    p.textContent = data.Plot;
    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(p)
    resultados.appendChild(div)
}

function mostrarDOMTemplate(data) {
    let div = document.createElement('div')
    div.classList.add('pelicula');
    div.innerHTML = `<img src="${data.Poster}" alt="" class="pelicula__img">
    <h2 class="pelicula__titulo">${data.Title}</h2>
    <h3 class="pelicula__genero">${data.Genre}</h3>
    <p class="pelicula__descripcion">${data.Plot}</p>`
    resultados.appendChild(div)
}