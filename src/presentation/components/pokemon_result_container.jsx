import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonInfo } from "../../data/providers/pokemon_provider";

function PokemonResultContainer({ poke: { name, url } }) {
	const [imageUrl, setImageUrl] = useState(null);
	const [id, setId] = useState(null);
	const [types, setTypes] = useState(null);

	useEffect(() => {
		fetchPoke();
	}, []);

	const fetchPoke = async () => {
		const { sprites, id, types: _types } = await fetchPokemonInfo(url);
		const { front_default } = sprites;
		setId(id);
		setTypes(_types);
		setImageUrl(front_default);
	};

	return (
		<Link to={`/pokemon/${id}`}>
			<div className="p-2 uppercase rounded-lg bg-red-600 text-white flex flex-col justify-between cursor-pointer">
				<span className="font-bold text-xl">{name}</span>

				<div className="flex flex-row justify-between">
					{types && (
						<div className=" flex flex-col justify-end capitalize space-y-1">
							{types.slice(0, 2).map(({ type: { name } }) => (
								<div className="bg-gray-100 bg-opacity-25 rounded-full px-5">
									{name}
								</div>
							))}
						</div>
					)}
					{imageUrl && (
						<img className="w-1/3" src={imageUrl} alt={name} />
					)}
				</div>
			</div>
		</Link>
	);
}

export default PokemonResultContainer;
