import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";

const BoardFields = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleBoardBtn = (e) => {
		if (board.btnId !== e.target.id) {
			setBoard({
				...board,
				btnId: e.target.id,
				prevRow: e.target.getAttribute("row"),
				prevColumn: e.target.getAttribute("column"),
			});
		}
	};
	const checkDistance = (e) => {
		// approve movement if distance is correct (maximum one hex)
		const { prevRow, prevColumn } = board;
		let clickedRowNum = Number(e.target.getAttribute("row"));
		let prevRowNum = Number(prevRow);
		let clickedColumnNum = Number(e.target.getAttribute("column"));
		let prevColumnNum = Number(prevColumn);
		if (prevRow % 2 === 1) {
			if (
				(prevRowNum === clickedRowNum + 1 &&
					prevColumnNum === clickedColumnNum + 1) ||
				(prevRowNum === clickedRowNum + 1 &&
					prevColumnNum === clickedColumnNum) ||
				(prevRowNum + 1 === clickedRowNum &&
					prevColumnNum === clickedColumnNum + 1) ||
				(prevRowNum + 1 === clickedRowNum &&
					prevColumnNum === clickedColumnNum) ||
				(prevRowNum === clickedRowNum &&
					prevColumnNum === clickedColumnNum + 1) ||
				(prevRowNum === clickedRowNum && prevColumnNum + 1 === clickedColumnNum)
			) {
				handleBoardBtn(e);
			} else {
				console.log("Za daleko! Stoisz na rzędzie nieparzystym");
			}
		} else if (prevRow % 2 === 0) {
			if (
				(prevRowNum === clickedRowNum + 1 &&
					prevColumnNum + 1 === clickedColumnNum) ||
				(prevRowNum === clickedRowNum + 1 &&
					prevColumnNum === clickedColumnNum) ||
				(prevRowNum + 1 === clickedRowNum &&
					prevColumnNum === clickedColumnNum) ||
				(prevRowNum + 1 === clickedRowNum &&
					prevColumnNum + 1 === clickedColumnNum) ||
				(prevRowNum === clickedRowNum &&
					prevColumnNum === clickedColumnNum + 1) ||
				(prevRowNum === clickedRowNum && prevColumnNum + 1 === clickedColumnNum)
			) {
				handleBoardBtn(e);
			} else {
				console.log("Za daleko! Stoisz na rzędzie parzystym");
			}
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
					: checkDistance
			}
		/>
	);
};

export default BoardFields;
