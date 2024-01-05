const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")

let limit = 10
let offset = 0


function loadMorePokemonsItens(offset, limit) {
    pokeApi.getPokemon(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
        <span id="id-pokemon" class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <a  href="assets/pag/detalis-poke.html">
                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>

                    <img src="${pokemon.photo}" alt="imagem do pokemom ${pokemon.name} ">
            
                </div>
                </a>
            </li>`).join('')
        pokemonList.innerHTML += newHtml
    })

}


loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadMorePokemonsItens(offset, limit)
    
})


loadMorePokemonsItens(offset, limit)
