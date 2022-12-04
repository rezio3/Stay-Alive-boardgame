import React, { useContext } from "react";
import "../../style/css/Game.css";
import Copyright from "./Copyright";
import Character from "./SelectedCharacterMove";
import BoardRows from "./buttons/BoardRows";
import { BoardContext } from "../context/BoardContext";

const Game = () => {
	const [board, setBoard] = useContext(BoardContext);

	const handleArrowButton = () => {
		setBoard({
			...board,
			btnId: 11,
			clickedRow: 1,
			clickedColumn: 11,
			charSetOnBoard: true,
			arrowBtnActive: true,
		});
	};

	let boardRowsArray = ["row1-container"];

	for (let i = 2; i <= 16; i++) {
		if (i % 2 === 1) {
			boardRowsArray.push("odd-row-container");
		} else if (i % 2 === 0) {
			boardRowsArray.push("even-row-container");
		}
	}

	return (
		<div className="game">
			{board.charSetOnBoard ? null : (
				<div className="click-start-hex">
					<h2>Umieść bohatera na planszy by rozpocząć grę</h2>
				</div>
			)}
			<div className="middle-container">
				<div className="game-board" id="game-board">
					{board.charSetOnBoard ? null : <div className="board-bg"></div>}
					<div className="field-rows">
						{boardRowsArray.map((e, index) => (
							<BoardRows
								className={e}
								id={index + 1}
								key={index + 1}
								dataArrowBtnHandler={handleArrowButton}
							/>
						))}
					</div>
					<Character />
				</div>
				<Copyright />
			</div>
		</div>
	);
};

export default Game;
