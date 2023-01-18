export const checkDistance = (e, board, char) => {
	// approve movement if distance is correct (maximum one hex)
	const { prevRow, prevColumn } = board;
	let clickedRowNum = Number(e.target.getAttribute("row"));
	let prevRowNum = Number(prevRow);
	let clickedColumnNum = Number(e.target.getAttribute("column"));
	let prevColumnNum = Number(prevColumn);
	if (board.btnId === e.target.id || e.target.id === "selected-character") {
		console.log("Stoisz w miejscu");
	} else if (prevRow % 2 === 1) {
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
			if (board.btnId !== e.target.id) {
				if (char.energy > 0) {
					return true;
				} else if (char.energy === 0) {
					console.log("Za mało energii");
					return false;
				}
			}
		} else {
			console.log("Za daleko! Stoisz na rzędzie nieparzystym");
			return false;
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
			if (char.energy > 0) {
				return true;
			} else if (char.energy === 0) {
				console.log("Za mało energii");
				return false;
			}
		} else {
			console.log("Za daleko! Stoisz na rzędzie parzystym");
			return false;
		}
	}
};
