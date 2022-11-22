import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow5 = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		console.log(e);
		setBoard({
			...board,
			btnId: e.target.id,
		});
	};
	let title;
	if (props.id < 49) {
		title = "jungle";
	} else if (props.id >= 49 && props.id < 53) {
		title = "outland";
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

export default ButtonsRow5;