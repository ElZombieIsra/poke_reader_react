import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import pokeball from "../../assets/img/poke.png";

function SplashScreen() {
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => history.push("/test"), 3000);
	}, []);

	return (
		<div className="bg-red-600 w-full h-screen flex flex-col text-white items-center justify-evenly align-middle p-12">
			<div className="w-1/2 lg:w-1/4">
				<img src={pokeball} alt="PokeReader icon" className="" />
			</div>
			<div className="text-center my-10">
				<p>PokeReader in React</p>
				<p>By ElZombieIsra</p>
			</div>
			<div>
				<Loader type="TailSpin" color="white"></Loader>
			</div>
		</div>
	);
}

export default SplashScreen;
