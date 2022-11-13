import React from "react";

const ButtonsRow7 = (props) => {
	let title;
	if (props.id < 73) {
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

export default ButtonsRow7;
