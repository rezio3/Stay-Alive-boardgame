import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow10 = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		setBoard({
			...board,
			btnId: e.target.id,
			prevBtnId: board.btnId,
		});
	};
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
			onClick={handleBoardBtn}
		/>
	);
};

export default ButtonsRow10;
