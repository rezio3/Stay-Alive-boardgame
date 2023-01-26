export const checkDistance = (e, board, char) => {
	// approve movement if distance is correct (maximum one hex)
	const { prevRow, prevColumn } = board;
	let clickedRowNum = Number(e.target.getAttribute("row"));
	let prevRowNum = Number(prevRow);
	let clickedColumnNum = Number(e.target.getAttribute("column"));
	let prevColumnNum = Number(prevColumn);
	if (char.cantMove) {
		const textValue = "Aktywowałeś już pole, nie możesz iść dalej";
		return { appropved: false, textValue: textValue };
	} else {
		if (board.btnId === e.target.id || e.target.id === "selected-character") {
			console.log("Stoisz w miejscu");
			return { approved: false };
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
						return { approved: true };
					} else if (char.energy === 0) {
						const textValue = "Za mało energii";
						return { approved: false, textValue: textValue };
					}
				}
			} else {
				const textValue = "Za daleko! Stoisz na rzędzie nieparzystym";
				return { approved: false, textValue: textValue };
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
					return { approved: true };
				} else if (char.energy === 0) {
					const textValue = "Za mało energii";
					return { approved: false, textValue: textValue };
				}
			} else {
				const textValue = "Za daleko! Stoisz na rzędzie parzystym";
				return { approved: false, textValue: textValue };
			}
		}
	}
};
