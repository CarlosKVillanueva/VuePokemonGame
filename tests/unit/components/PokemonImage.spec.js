import { shallowMount } from "@vue/test-utils";
import PokemonImage from "@/components/PokemonImage";



describe( 'PokemonImage', function () {
    test('Snapshot', () => {
        const wrapper = shallowMount( PokemonImage, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        }  );
        expect( wrapper.html() ).toMatchSnapshot();

    });
    
    test('Must show hidden image and pokemon ID:100', () => {
        const wrapper = shallowMount( PokemonImage, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        }  );

        const [img1,img2] = wrapper.findAll('img')

        expect( img1.exists() ).toBeTruthy();
        // console.log( img1.attributes() );
        expect( img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
        expect( img1.classes('hidden-pokemon') ).toBeTruthy();
        expect( img2 ).toBe( undefined );
    });
    
    test('Must show pokemon if shokPokemon:true ', () => {
        const wrapper = shallowMount( PokemonImage, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        }  );

        const img1 = wrapper.find('img')

        expect( img1.exists() ).toBeTruthy();
        expect( img1.classes('hidden-pokemon') ).toBeFalsy();
        expect( img1.classes( 'fade-in' ) ).toBeTruthy();
    });
} );