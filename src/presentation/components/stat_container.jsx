import React from "react";

function StatContainer({ title = "", value }) {
	return (
		<div className="p-5 flex flex-col justify-evenly text-center">
			<div>{title}</div>
			{value && <div>{value}</div>}
		</div>
	);
}

export default StatContainer;
