const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")

let limit = 10
let offset = 0


function loadMorePokemonsItens(offset, limit) {
    pokeApi.getPokemon(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}

                    </ol>

                        
                    <img src="${pokemon.photo}" alt="imagem do pokemom ${pokemon.name} ">
            
                </div>
            </li>`).join('')
        pokemonList.innerHTML += newHtml
    })

}
loadMorePokemonsItens(offset, limit)

loadMoreButton.addEventListener('click', () => {

    offset += limit
    loadMorePokemonsItens(offset, limit)
    
})



