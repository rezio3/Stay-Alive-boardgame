import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow11 = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		setBoard({
			...board,
			btnId: e.target.id,
			prevBtnId: board.btnId,
		});
	};
	let title;
	if (props.id < 117) {
		title = "northrend";
	} else if (props.id === 121) {
		title = "crater";
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
			onClick={handleBoardBtn}
		/>
	);
};

export default ButtonsRow11;
