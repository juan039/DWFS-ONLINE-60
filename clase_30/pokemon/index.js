
let pokeCtn = document.getElementById('pokeCtn');

let fetch1 = fetch('https://pokeapi.co/api/v2/pokemon/1').then(response => response.json()
);
let fetch2 = fetch('https://pokeapi.co/api/v2/pokemon/25').then(response => response.json()
);
let fetch3 = fetch('https://pokeapi.co/api/v2/pokemon/76').then(response => response.json()
);

Promise.all([fetch1, fetch2, fetch3])
.then((data)=> {
    //Sort personalizado con callback mostrado en clase 28
    // data.sort((valor1, valor2) => {
    //     if (valor1.name < valor2.name){
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // });
    console.log(data);
    for(let i = 0; i < data.length; i++){
        addToDOM(data[i]);
    }
}) .catch((error) => {
    console.log(`Error: ${error}`);
})

/**
 * info @Object Pokemon
 */
function addToDOM(info){
    let ctn = document.createElement('div');
    let name = document.createElement('h2');
    name.textContent = `${info.name} #${info.id}`;
    let img = document.createElement('img');
    img.setAttribute('src', info.sprites.front_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}