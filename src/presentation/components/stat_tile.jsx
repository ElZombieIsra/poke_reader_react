import React from "react";

function StatTile({ title, children }) {
	return (
		<div className="w-full odd:bg-gray-200 py-5 h-full">
			{title && <div className="text-center">{title}</div>}
			{children}
		</div>
	);
}

export default StatTile;
