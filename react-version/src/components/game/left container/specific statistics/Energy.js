import React from "react";

const Energy = () => {
	const energyView = document.querySelector(`.energy-bar`);
	const energyValue = document.querySelector(`.energy-value`);

	return (
		<div className="energy stat-bar">
			<div className="energy-bar"></div>
			<span className="energy-value"></span>
		</div>
	);
};

export default Energy;
