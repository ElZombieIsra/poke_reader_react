import React from "react";
import { Link } from "react-router-dom";
import pokeball from "../../assets/img/poke.png";

function WelcomePage() {
	return (
		<div className="bg-red-600 w-full h-screen flex flex-col text-white items-center justify-evenly align-middle p-12">
			<div className="w-1/2 lg:w-1/4">
				<img src={pokeball} alt="PokeReader icon" className="" />
			</div>
			<div className="text-center my-10">
				<p>PokeReader in React</p>
				<p>By ElZombieIsra</p>
			</div>
			<Link
				to="/home"
				className="font-semibold py-2 px-4 border border-red-600 hover:border-gray-400 rounded hover:shadow"
			>
				Let's go
			</Link>
		</div>
	);
}

export default WelcomePage;
