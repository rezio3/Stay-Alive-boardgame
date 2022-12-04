import React from "react";

const Starvation = () => {
	const starvationView = document.querySelector(`.starvation-bar`);
	const starvationValue = document.querySelector(`.starvation-value`);
	return (
		<div className="starvation stat-bar">
			<div className="starvation-bar"></div>
			<span className="starvation-value"></span>
		</div>
	);
};

export default Starvation;
