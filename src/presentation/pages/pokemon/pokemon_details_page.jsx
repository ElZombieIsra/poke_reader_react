import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonInfo } from "../../../data/providers/pokemon_provider";
import AppBar from "../../components/app_bar";
import StatContainer from "../../components/stat_container";
import StatTile from "../../components/stat_tile";

function PokemonDetailsPage() {
	const { id } = useParams();
	const [poke, setPoke] = useState();

	const {
		name,
		sprites,
		weight,
		height,
		base_experience: experience,
		stats,
		moves,
		types,
		abilities,
	} = poke ? poke : {};

	const pokeName = name || "Pokemon";

	useEffect(() => {
		fetchPokemonInfo(
			`https://pokeapi.co/api/v2/pokemon/${id}`
		).then((poke) => setPoke(poke));
	}, []);

	return (
		<div className="h-screen flex flex-col">
			<div className="shadow-2xl">
				<AppBar text={pokeName} />
			</div>
			{poke && (
				<div className="flex-grow flex flex-col justify-center">
					<div className="grid grid-cols-3 h-full">
						<div className="flex flex-col justify-center bg-red-600">
							<img
								className="w-full"
								src={sprites["front_default"]}
								alt={pokeName}
							/>
						</div>
						<div className="col-span-2">
							<div className="flex flex-col h-full justify-items-stretch items-stretch">
								<StatTile>
									<div className="grid grid-cols-3 w-full overflow-x-auto">
										<StatContainer
											title="Weight"
											value={weight}
										/>
										<StatContainer
											title="Height"
											value={height}
										/>
										<StatContainer
											title="Experience"
											value={experience}
										/>
									</div>
								</StatTile>
								<StatTile title="Stats">
									<div className="w-full flex flex-row overflow-x-auto">
										{stats &&
											stats.map(({ base_stat, stat }) => (
												<StatContainer
													key={stat.name}
													title={stat.name}
													value={base_stat}
												/>
											))}
									</div>
								</StatTile>
								<StatTile title="Movements">
									<div className="w-full flex flex-row overflow-x-auto">
										{moves &&
											moves.map(({ move }) => (
												<StatContainer
													key={move.name}
													title={move.name}
												/>
											))}
									</div>
								</StatTile>
								<StatTile title="Types">
									<div className="w-full flex flex-row overflow-x-auto">
										{types &&
											types.map(({ type }) => (
												<StatContainer
													key={type.name}
													title={type.name}
												/>
											))}
									</div>
								</StatTile>
								<StatTile title="Abilities">
									<div className="w-full flex flex-row overflow-x-auto">
										{abilities &&
											abilities.map(({ ability }) => (
												<StatContainer
													key={ability.name}
													title={ability.name}
												/>
											))}
									</div>
								</StatTile>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default PokemonDetailsPage;
