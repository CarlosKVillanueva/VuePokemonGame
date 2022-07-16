<template>
	<div class="options-container">
		<ul>
			<li v-for="pokemon in pokemons"
				:key="pokemon.id"
				@click="$emit('selectedPokemon', pokemon.id)">
				{{ pokemon.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		pokemons: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
ul {
	list-style-type: none;
}
li {
	background-color: #23487d;
	color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	width: 250px;
	padding: 5px;
	text-transform: capitalize;
}

li:hover {
	background-color: #132949;
}

.options-container {
	display: flex;
	justify-content: center;
}
</style>