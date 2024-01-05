const detalisPokemon = document.getElementById("detalis-pokemon")
const body = document.getElementsByTagName("body")[0]
const idPokemon = document.getElementById("id-pokemon")

function criarPagPokemon() {
    pokeApi.getPokemon(0, 10).then((pokemons = []) => {
        const htmlDetalisPokemon = pokemons.map((pokemon) =>  `  
        <section id="detalis-pokemon" class="detalis-poke ${pokemon.type}" >
            <figure class="voltar ">
            <button><img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/arrow_arrows_back_direction_left_navigation_right_icon_123237.png" alt=""></button>
            <button><img src="https://cdn.icon-icons.com/icons2/494/PNG/512/heart_icon-icons.com_48290.png" alt=""></button>

            </figure>


            <header class="detalis">
            <h1>${pokemon.name}</h1>
            <span class="number">#0${pokemon.number}</span>
            </header>

            <ol class="types-poke">
            ${pokemon.types.map((type) => `<li class="type-poke ${type}">${type}</li>`).join("")}
            </ol>

            <figure class="img-pokemon"><img src="${pokemon.photo}" alt=""></figure>
                
            <main class="detalis">
            <ul class="detalis-titutos">
                <li>About</li>
                <li>Base Stats</li>
                <li>Evolution</li>
                <li>Moves</li>
            </ul>

            <ul class="detalis-poke">
                <li class="detalis-index">Species</li>
                <li class="detalis-index">Height</li>
                <li class="detalis-index">Weight</li>
                <li class="detalis-index">Abilities</li>

                
                <li>Seed</li>
                <li>${pokemon.height}</li>
                <li>${pokemon.weight}</li>
                <li style="font-size: 14px;">${pokemon.ability}</li>
            </ul>
            <h2 class="detalis-poke">Breeding</h2>
            <ul class="detalis-poke">
                
                <li class="detalis-index">Gender</li>
                <li class="detalis-index">Egg Groups</li>
                <li class="detalis-index">Egg Cycle</li>


                <li style="margin-right: 10px;"><img style="margin-right: 10px;" src="../imgs/male.png" alt=""> 87.5% 
                    <img style="margin: 0 10px;"src="../imgs/female.png" alt=""> 12.5%
                </li>
                <li>Monster</li>
                <li >Grass</li>
            </main>
            </section >`)
        
            body.innerHTML = htmlDetalisPokemon[0]



    })
    
}