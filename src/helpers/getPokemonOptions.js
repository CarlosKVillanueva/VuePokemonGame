import pokemonApi from "@/api/pokemonApi";

export const getPokemons = () => {
    const pokemonsArr = Array.from( Array( 650 ) );

    return pokemonsArr.map( ( _ , index) => index + 1)
};


const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons()
        .sort( () => Math.random() - 0.5 );

    return await getPokemonNames( mixedPokemons.splice( 0, 4 ) );
};

export const getPokemonNames = async ( [a,b,c,d] = [] ) => {
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
   const [p1,p2,p3,p4] = await Promise.all( promiseArr ).then();

    return [
        { name: p1.data.name, id: a},
        { name: p2.data.name, id: b},
        { name: p3.data.name, id: c},
        { name: p4.data.name, id: d}
    ]
};



export default getPokemonOptions;