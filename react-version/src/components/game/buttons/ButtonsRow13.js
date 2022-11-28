import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow13 = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		if (board.btnId !== e.target.id) {
			setBoard({
				...board,
				btnId: e.target.id,
				prevBtnId: board.btnId,
			});
		}
	};
	let title;
	if (props.id === 134) {
		title = "northrend";
	} else if (props.id > 137) {
		title = "crater";
	} else {
		title = "fjord";
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

export default ButtonsRow13;
