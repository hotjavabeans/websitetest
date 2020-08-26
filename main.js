const apiData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  id: '25',
}
const {url, type, id} = apiData
const apiURL = `${url}${type}/${id}`

fetch(apiURL)
    .then( (data) => data.json())
    .then( (pokemon) => generateHTML(pokemon))

const generateHTML = (data) => {
    console.log(data)
    const html = `
    <div class="name"><h1>${data.name}</h1></div>
    <img src=${data.sprites.front_default}>
    <div class="details">
        <span>Height: ${data.height}</span>
        <span>Weight: ${data.weight}</span>
    </div>
    <div class="otherVersions">
        <span>Generation VII:</span>
    <img src=${data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default}>
    </div>
    `
const pokemonDiv = document.querySelector('.pokemon')
pokemonDiv.innerHTML = html
}
