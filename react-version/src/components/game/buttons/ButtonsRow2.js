import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow2 = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		setBoard({
			...board,
			btnId: e.target.id,
		});
	};
	let title;
	if (props.id < 16) {
		title = "jungle";
	} else {
		title = "outland";
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

export default ButtonsRow2;