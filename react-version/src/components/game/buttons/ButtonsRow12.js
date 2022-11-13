import React from "react";

const ButtonsRow12 = (props) => {
	let title;
	if (props.id < 125) {
		title = "northrend";
	} else if (props.id === 125) {
		title = "fjord";
	} else if (props.id > 128 && props.id < 131) {
		title = "desert";
	} else {
		title = "crater";
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

export default ButtonsRow12;
