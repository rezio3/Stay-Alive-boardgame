import React from "react";

const Sanity = () => {
	const sanityView = document.querySelector(`.sanity-bar`);
	const sanityValue = document.querySelector(`.sanity-value`);
	return (
		<div className="sanity stat-bar">
			<div className="sanity-bar"></div>
			<span className="sanity-value"></span>
		</div>
	);
};

export default Sanity;
