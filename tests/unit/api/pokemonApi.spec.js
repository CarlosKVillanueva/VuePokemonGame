import pokemonApi from "@/api/pokemonApi";


describe( 'pokemonApi', function () {
    test( 'axios debe estar configurado', () => {
        expect( pokemonApi.defaults.baseURL ).toBe( 'https://pokeapi.co/api/v2/pokemon' );
    } );
} );