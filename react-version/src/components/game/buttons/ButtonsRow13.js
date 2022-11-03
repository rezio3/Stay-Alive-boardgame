import React from "react";

const ButtonsRow13 = (props) => {
	let title;
	if (props.id === 134) {
		title = "northrend";
	} else if (props.id > 137) {
		title = "crater";
	} else {
		title = "fjord";
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

export default ButtonsRow13;
