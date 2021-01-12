//Registrarse a la Api de OpenWeather para sacar la ApiKey gratuita en: https://openweathermap.org/ y agregarla a la variable
//Mentores, se pueden registrar en vivo o utilizar esta API Key 1c67ae33adc312d33476ae4d68a09beb
const apiKey = '1c67ae33adc312d33476ae4d68a09beb';

let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let results = document.getElementById('results');

//Ejemplos de ciudades para el search query: London, Texas, Tokio, Seoul
//Tambien se puede buscar por país: Argentina, Uruguay, etc

function search(){
    //Fetch con async await
    async function newsSearch(city_name) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    let info = newsSearch(searchInput.value);
    info.then(response => {
        console.log(response);
        results.textContent = `Clima: ${response.weather[0].main}, Temperatura:  ${response.main.temp} °C`
    }).catch(error => {
        console.log(error);
    })
}

searchBtn.addEventListener('click', ()=>{
    search();
})
searchInput.addEventListener('keyup', ()=> {
    //event.KeyCode =13 ENTER
    if (event.which === 13 || event.keyCode == 13) {
        search();
    }
})


//Mismo ejemplo de fetch simple que se hizo en clase de promesas, pero esta vez con async await
let imgCtn = document.getElementById('imgCtn');

async function getDogImg() {
    let url = "https://dog.ceo/api/breeds/image/random";
    const resp = await fetch(url);
    const data = await resp.json();
    return data
};
let dog = getDogImg();
dog.then(data => {
    let dogImg = document.createElement('img');
    dogImg.setAttribute('src', data.message);
    dogImg.style.width = '300px';
    imgCtn.appendChild(dogImg);
    console.log(data);
}).catch(err => {
    console.error('fetch failed', err);
})
