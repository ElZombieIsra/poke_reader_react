export async function fetchPokemon(url) {
	const res = await fetch(url, {
		cache: "force-cache",
	});
	const data = await res.json();
	return data;
}

export async function fetchPokemonInfo(pokemonUrl) {
	const res = await fetch(pokemonUrl, {
		cache: "force-cache",
	});
	const data = await res.json();
	return data;
}
