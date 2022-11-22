import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow12 = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		console.log(e);
		setBoard({
			...board,
			btnId: e.target.id,
		});
	};
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
			onClick={handleBoardBtn}
		/>
	);
};

export default ButtonsRow12;