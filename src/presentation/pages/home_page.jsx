import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import { fetchPokemon } from "../../data/providers/pokemon_provider";
import PokemonResultContainer from "../components/pokemon_result_container";

function HomePage() {
	const [nextUrl, setNextUrl] = useState(null);
	const [pokemon, setPokemon] = useState([]);

	const loader = (
		<div className="flex flex-row justify-center py-10">
			<Loader type="TailSpin" color="red"></Loader>
		</div>
	);

	useEffect(() => {
		retrievePokemon("https://pokeapi.co/api/v2/pokemon?limit=50");
	}, []);

	async function retrievePokemon(url) {
		const { next, results } = await fetchPokemon(url);
		setNextUrl(next);
		setPokemon([...pokemon, ...results]);
	}

	return (
		<div>
			<div className="bg-red-600 w-full flex flex-col text-white items-center justify-evenly align-middle p-5">
				<p className="text-3xl font-medium">PokeReader React</p>
			</div>
			<InfiniteScroll
				dataLength={pokemon.length}
				hasMore={nextUrl}
				loader={loader}
				next={() => retrievePokemon(nextUrl)}
			>
				<div className="grid grid-cols-5 gap-2 p-2">
					{pokemon &&
						pokemon.length > 0 &&
						pokemon.map((poke) => (
							<PokemonResultContainer
								key={poke["name"]}
								poke={poke}
							/>
						))}
				</div>
			</InfiniteScroll>
		</div>
	);
}

export default HomePage;
