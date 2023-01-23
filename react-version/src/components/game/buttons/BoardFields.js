import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import { CharacterContext } from "../../context/CharContext";
import Character from "../Character";
import { checkDistance } from "../functions/Character-movement";
import { ButtonsContext } from "../../context/ButtonsContext";

const BoardFields = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const [char, setChar] = useContext(CharacterContext);
	const [buttons, setButtons] = useContext(ButtonsContext);

	const handleFieldClick = (e) => {
		const moveApproved = checkDistance(e, board, char);
		if (moveApproved) {
			const biom = e.target.title;
			const { classList } = e.target;
			if (
				classList.contains("wood") ||
				classList.contains("stone") ||
				classList.contains("grass") ||
				classList.contains("flint") ||
				classList.contains("lotos") ||
				classList.contains("fire")
			) {
				setButtons({ ...buttons, useHexButton: true });
				let source;
				if (classList.contains("wood")) source = "wood";
				if (classList.contains("stone")) source = "stone";
				if (classList.contains("grass")) source = "grass";
				if (classList.contains("flint")) source = "flint";
				if (classList.contains("lotos")) source = "lotos";
				if (classList.contains("fire")) source = "fire";
				setBoard({
					...board,
					btnId: e.target.id,
					btnData: e.target,
					prevRow: e.target.getAttribute("row"),
					prevColumn: e.target.getAttribute("column"),
					resourcePlayerStandsOn: source,
					biomPlayerStandsOn: biom,
				});
			} else {
				setButtons({ ...buttons, useHexButton: false });
				setBoard({
					...board,
					btnId: e.target.id,
					btnData: e.target,
					prevRow: e.target.getAttribute("row"),
					prevColumn: e.target.getAttribute("column"),
					resourcePlayerStandsOn: null,
					biomPlayerStandsOn: biom,
				});
			}
		} else {
			setChar({
				...char,
				cantMoveAnimation: true,
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
			title={props.title}
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
