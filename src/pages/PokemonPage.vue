<template>

	<h1 v-if="!pokemon">Espere por favor...</h1>
	<div v-else>
		<h1>Quien es este Pokemon?</h1>
		<PokemonImage
			:pokemon-id="pokemon.id"
			:show-pokemon="showPokemon"
			class="app-center"
		/>
		<PokemonOptions
			:pokemons="pokemonArr"
			@selected-pokemon="checkAnswer"
			class="app-center"
		/>
		<template v-if="showAnswer">
			<h2 class="fade-in">{{ message }}</h2>
			<button @click="newGame">
				Nuevo Juego
			</button>
		</template>

	</div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions  from "@/helpers/getPokemonOptions";

// console.log( getPokemonOptions() );

export default {
	components: { PokemonImage, PokemonOptions },
	data() {
		return {
			pokemonArr: [],
			pokemon: null,
			showPokemon: false,
			showAnswer: false,
			message: false
		};
	},
	methods: {
		async mixPokemonArr() {
			this.pokemonArr = await getPokemonOptions();
			const rand = Math.floor( Math.random() * 4 );
			this.pokemon = this.pokemonArr[ rand ];
			console.log(this.pokemon)
		},
		checkAnswer(pokemonId) {
			this.showPokemon = true;
			this.showAnswer = true;
			// console.log( 'Pokemon Page Called', pokemonId );
			if ( pokemonId === this.pokemon.id ) {
				this.message = `Correcto ${this.pokemon.name}!`
			} else {
				this.message = `Ooopss, it was ${this.pokemon.name}!`
			}
		},
		newGame() {
			this.showPokemon = false;
			this.showAnswer = false;
			this.pokemon = null;
			this.pokemonArr = [];
			this.mixPokemonArr();
		},
	},
	mounted() {
		this.mixPokemonArr();
	}
}
</script>

<style scoped>

</style>