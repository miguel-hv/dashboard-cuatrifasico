
const URL = "https://pokeapi.co/api/v2/";

//get html button and add click event firing JS function
const getPokemonsBtn = document.getElementById('getPokemonsBtn');
getPokemonsBtn.addEventListener('click', getPokemons);

function getPokemons() {
    fetch(URL+"pokemon?limit=151")
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .then(data => renderDataList(data))
    .catch(err => console.warn('Something went wrong.', err));
}

function renderDataList(data) {
    console.log(data);
    //get display html element so we can attach JS function data response to it
    // document.getElementById('data').innerHTML = 
    data.results.forEach(element => {
        // return `<li>${element.name}</li>`;
        var listItem = document.createElement('li');
        listItem.innerText = element.name;
        document.getElementById("data").appendChild(listItem);
    });
}