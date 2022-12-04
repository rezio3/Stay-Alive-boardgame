import React from "react";

const Life = () => {
	const lifeView = document.querySelector(`.life-bar`);
	const lifeValue = document.querySelector(`.life-valueconst`);
	return (
		<div className="life stat-bar">
			<div className="life-bar"></div>
			<span className="life-value"></span>
		</div>
	);
};

export default Life;
