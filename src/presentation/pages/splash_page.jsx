import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import pokeball from "../../assets/img/poke.png";

function SplashPage() {
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => history.push("/welcome"), 3000);
	}, []);

	return (
		<div className="bg-red-600 w-full h-screen flex flex-col text-white items-center justify-evenly align-middle p-12">
			<div className="w-1/2 lg:w-1/4 my-10">
				<img src={pokeball} alt="PokeReader icon" className="" />
			</div>
			<div>
				<Loader type="TailSpin" color="white"></Loader>
			</div>
		</div>
	);
}

export default SplashPage;
