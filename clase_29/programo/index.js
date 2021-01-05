let promesa1 = new Promise((resolve, reject) => {
    console.log('Promesa 1 Pendiente...');
    setTimeout(() => {
        resolve('Promesa 1 está resuelta');
    }, 1000)
    setTimeout(() => {
        reject('Promesa 1 está rechazada');
    }, 2500)
})

promesa1.then((success) => {
    console.log(success);
}).catch((error) => {
    console.log(error);
})

let promesa2 = new Promise(function(resolve, reject) {
    console.log('Promesa 2 Pendiente...');
    setTimeout( function () {
        if (false) {
            resolve('Promesa 2 Resuelta!')
        } else {
            reject('Promesa2 Rechazada :(')
        }
    }, 250)
})

promesa2.then(function(exito) {
    console.log(`Promesa 2 exitosa: ${exito}`)
}).catch(function (err) {
    console.log(`Promesa 2 Rechazada: ${err}`)
})

let promesa3 = new Promise((resolve, reject) => {
    resolve('Promesa 3 Sincrona')
})

promesa3.then((success) => {
    console.log(success);
}).catch((error) => {
    console.log(error);
})

let imgCtn = document.getElementById('imgCtn');
function getDogImg(url) {
    fetch(url)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.log(json)
            let dogImg = document.createElement('img');
            dogImg.setAttribute('src', json.message);
            dogImg.style.width = '300px';
            imgCtn.appendChild(dogImg);
        })
        .catch(err => console.log(err))
}

getDogImg('https://dog.ceo/api/breeds/image/random')


let pokemonCtn = document.getElementById('pokemon');
function getPokemon(url) {
    fetch(url)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.log(json)
            let pokeIMG = document.createElement('img');
            pokeIMG.setAttribute('src', json.sprites.front_default);
            pokeIMG.style.width = '300px';
            pokemonCtn.appendChild(pokeIMG);
        })
        .catch(err => console.log(err))
}

getPokemon('https://pokeapi.co/api/v2/pokemon/6')