import React from "react";

const Temperature = () => {
	const temperatureView = document.querySelector(`.temperature-bar`);
	const temperatureValue = document.querySelector(`.temperature-value`);
	return (
		<div className="temperature stat-bar">
			<div className="temperature-bar"></div>
			<span className="temperature-value"></span>
		</div>
	);
};

export default Temperature;
