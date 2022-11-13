import React from "react";

const ButtonsRow9 = (props) => {
	let title;
	if (props.id < 95) {
		title = "northrend";
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

export default ButtonsRow9;
