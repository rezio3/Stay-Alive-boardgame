import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import { CharacterContext } from "../../context/CharContext";
import Character from "../Character";
import { checkDistance } from "../functions/Character-movement";

const BoardFields = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const [char, setChar] = useContext(CharacterContext);

	const handleFieldClick = (e) => {
		const moveApproved = checkDistance(e, board, char);
		if (moveApproved) {
			setBoard({
				...board,
				btnId: e.target.id,
				// btnData: e.target,
				prevRow: e.target.getAttribute("row"),
				prevColumn: e.target.getAttribute("column"),
			});
		} else {
			setChar({
				...char,
				cantMove: true,
			});
		}
	};

	return (
		<button
			row={props.row}
			column={props.column}
			type="button"
			className={`${
				props.id === 11
					? `btn11 btn-line1 arrow-button ${
							board.arrowBtnActive ? null : "animation"
					  }`
					: props.className
			}`}
			id={props.id}
			value={props.value}
			// title={title}

			onClick={
				props.id === 11 && board.charSetOnBoard === false
					? props.dataArrowBtnHandler
					: handleFieldClick
			}
		>
			{Number(board.btnId) === props.id ? <Character /> : null}
		</button>
	);
};

export default BoardFields;
