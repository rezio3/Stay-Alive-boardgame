import React from "react";

const ButtonsRow2 = (props) => {
	let title;
	if (props.id < 16) {
		title = "jungle";
	} else {
		title = "outland";
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

export default ButtonsRow2;
