import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage"
import { pokemonsMock } from "../mocks/pokemons.mock"



describe( 'PokemonPage', function () {
    let wrapper
    let mixPokemonArraySpy

    beforeEach(() => {
        mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, "mixPokemonArr" )
        wrapper = shallowMount( PokemonPage )
    })

    test( 'Must Call mixPokemonArray on mounted', () => {
        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    } );
    
    test('Must match the Snapshot when Pokemons been loaded', () => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                    acerto: false,
                    error: false
                }
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    });
    
    test('Must show the PokemonImage and PokemonOptions components', () => {


        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                    acerto: false,
                    error: false
                }
            }
        })

        let imageStub = wrapper.find( 'pokemon-image-stub' )
        let optionsStub = wrapper.find( 'pokemon-options-stub' )

        expect( imageStub.exists() ).toBeTruthy()
        expect( optionsStub.exists() ).toBeTruthy()

        expect( imageStub.attributes('pokemonid') ).toBe( '1' )
        expect( optionsStub.attributes( 'pokemons' ) ).toBeTruthy()
    });

    test('CheckAnswer Test', async () => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[ 0 ],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                    acerto: false,
                    error: false
                }
            }
        } )

        await wrapper.vm.checkAnswer( 1 )

        expect( wrapper.find( 'h2' ).exists() ).toBeTruthy()
        expect( wrapper.find( 'button' ).exists() ).toBeTruthy()

        expect( wrapper.vm.showPokemon ).toBeTruthy()
        expect( wrapper.vm.showAnswer ).toBeTruthy()
        expect( wrapper.find( 'h2' ).text() ).toBe( `Correcto, ${pokemonsMock[0].name}!` )

        await wrapper.vm.checkAnswer( 10 )
        expect( wrapper.vm.message ).toBe( `Ooopss, it was ${ pokemonsMock[ 0 ].name }!` )
    });

} );