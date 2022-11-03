import React from "react";

const ButtonsRow14 = (props) => {
	let title;
	if (props.id < 149) {
		title = "fjord";
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

export default ButtonsRow14;
