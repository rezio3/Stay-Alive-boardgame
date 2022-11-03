import React from "react";

const ButtonsRow5 = (props) => {
	let title;
	if (props.id < 49) {
		title = "jungle";
	} else if (props.id >= 49 && props.id < 53) {
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

export default ButtonsRow5;
