import React from "react";

const ButtonsRow6 = (props) => {
	let title;
	if (props.id < 59) {
		title = "jungle";
	} else if (props.id === 59) {
		title = "northrend";
	} else if (props.id > 59 && props.id < 63) {
		title = "outland";
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

export default ButtonsRow6;
