import React from "react";

const ButtonsRow10 = (props) => {
	let title;
	if (props.id < 106) {
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

export default ButtonsRow10;
