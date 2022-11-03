import React from "react";

const ButtonsRow11 = (props) => {
	let title;
	if (props.id < 117) {
		title = "northrend";
	} else if (props.id === 121) {
		title = "crater";
	} else {
		title = "desert";
	}

	return (
		<button
			type="button"
			className={props.className}
			id={props.id}
			value={props.value}
			title={title}
		/>
	);
};

export default ButtonsRow11;
