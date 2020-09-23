import React from "react";

function AppBar({ text }) {
	return (
		<div className="bg-red-600 w-full flex flex-col text-white items-center justify-evenly align-middle p-5">
			<p className="text-3xl font-medium">{text}</p>
		</div>
	);
}

export default AppBar;
