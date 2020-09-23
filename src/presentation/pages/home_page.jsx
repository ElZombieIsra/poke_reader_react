import React, { useEffect, useState } from "react";
import PokemonResultContainer from "../components/pokemon_result_container";

function HomePage() {
	const [nextUrl, setNextUrl] = useState(null);
	const [prevUrl, setPrevUrl] = useState(null);
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetchPokemon().then((data) => {
			console.log(data);
			setNextUrl(data["next"]);
			setPrevUrl(data["previous"]);
			setPokemon(data["results"]);
		});
	}, []);

	return (
		<div>
			<div className="bg-red-600 w-full flex flex-col text-white items-center justify-evenly align-middle p-5">
				<p className="text-3xl font-medium">PokeReader React</p>
			</div>
			<div className="grid grid-cols-6 gap-2 p-5">
				{pokemon &&
					pokemon.length > 0 &&
					pokemon.map((poke) => (
						<PokemonResultContainer
							key={poke["name"]}
							poke={poke}
						/>
					))}
			</div>
		</div>
	);
}

async function fetchPokemon() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
	const data = await res.json();
	return data;
}

export default HomePage;
