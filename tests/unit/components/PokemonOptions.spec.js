import { shallowMount } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions"
import { pokemonsMock } from "../mocks/pokemons.mock"


describe( 'PokemonOptions', function () {

    let wrapper

    beforeEach( () => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons: pokemonsMock
            }
        } )
    } )

    test( 'Snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    } )

    test( 'Must show 4 options correctly', () => {


        const liTags = wrapper.findAll( 'li' )
        expect( liTags.length ).toBe( 4 )

        const [ li1, li2, li3, li4 ] = liTags

        expect( li1.text() ).toBe( 'bulbasaur' )
        expect( li2.text() ).toBe( 'ivysaur' )
        expect( li3.text() ).toBe( 'venusaur' )
        expect( li4.text() ).toBe( 'charmander' )
    } )
    
    test('Must Emit "selection" with corresponding params on click', () => {
        const [ li1, li2, li3, li4 ] = wrapper.findAll( 'li' )
        li1.trigger( 'click' )
        li2.trigger( 'click' )
        li3.trigger( 'click' )
        li4.trigger( 'click' )
        // console.log( wrapper.emitted( 'selectedPokemon' ) )
        expect( wrapper.emitted( 'selectedPokemon' ).length ).toBe( 4 )
        expect( wrapper.emitted( 'selectedPokemon' )[ 0 ] ).toEqual( [ 1 ] )
        expect( wrapper.emitted( 'selectedPokemon' )[ 1 ] ).toEqual( [ 2 ] )
        expect( wrapper.emitted( 'selectedPokemon' )[ 2 ] ).toEqual( [ 3 ] )
        expect( wrapper.emitted( 'selectedPokemon' )[ 3 ] ).toEqual( [ 4 ] )

    })
} )