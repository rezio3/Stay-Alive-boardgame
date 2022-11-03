import React from "react";

const ButtonsRow15 = (props) => {
	let title;
	if (props.id < 159) {
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

export default ButtonsRow15;
