import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonResultContainer({ poke }) {
	const { name, url } = poke;
	const [imageUrl, setImageUrl] = useState(null);
	const [id, setId] = useState(null);

	useEffect(() => {
		fetchPokemonInfo(url).then(({ sprites, id }) => {
			const { front_default } = sprites;
			setImageUrl(front_default);
			setId(id);
		});
	}, []);

	return (
		<Link to={`/pokemon/${id}`}>
			<div className="uppercase p-10 text-center rounded bg-red-600 text-white flex flex-col justify-evenly items-center cursor-pointer">
				{imageUrl && (
					<img className="w-2/3" src={imageUrl} alt={name} />
				)}
				{name}
			</div>
		</Link>
	);
}

async function fetchPokemonInfo(pokemonUrl) {
	const res = await fetch(pokemonUrl);
	const data = await res.json();
	return data;
}

export default PokemonResultContainer;
