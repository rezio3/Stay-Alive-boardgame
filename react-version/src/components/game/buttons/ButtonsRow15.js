import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow15 = (props) => {
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
			onClick={handleBoardBtn}
		/>
	);
};

export default ButtonsRow15;
