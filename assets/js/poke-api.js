const pokeApi = {}
function convertPokeApi(pokeDetails) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetails.id
    pokemon.name = pokeDetails.name
    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetails.sprites.other["official-artwork"].front_default
    return pokemon
    
}
pokeApi.getPokemonDeltail = (pokemons) =>{
    return fetch(pokemons.url)
            .then((resposta) => resposta.json())
            .then(convertPokeApi)

}
pokeApi.getPokemon = (offset, limit ) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((resposta) => resposta.json())
    .then((resposeBody) =>resposeBody.results)
    .then((pokemons) => pokemons.map((pokemon) => pokeApi.getPokemonDeltail(pokemon)))
    .then((detailRest)=> Promise.all(detailRest))
    .then((pokemonsDetails) =>pokemonsDetails)
}

