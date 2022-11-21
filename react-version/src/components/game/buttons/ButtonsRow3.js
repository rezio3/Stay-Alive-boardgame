import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const ButtonsRow3 = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		console.log(e);
		setBoard({
			...board,
			btnId: e.target.id,
		});
	};
	let title;
	if (props.id < 28) {
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

export default ButtonsRow3;
