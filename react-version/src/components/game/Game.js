import React, { useContext } from "react";
import "../../style/css/Game.css";
import Copyright from "./Copyright";
import Character from "./SelectedCharacterMove";
import BoardRows from "./buttons/BoardRows";
import LeftContent from "./left container/LeftContent";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";

const Game = () => {
	const [board, setBoard] = useContext(BoardContext);
	const [char, setChar] = useContext(CharacterContext);
	const handleArrowButton = () => {
		console.log("Działa arrow butn");
		setBoard({
			...board,
			btnId: 11,
			clickedRow: 1,
			clickedColumn: 11,
			charSetOnBoard: true,
			arrowBtnActive: true,
		});

		setChar({
			...char,
			life: 20,
			energy: 10,
			starvation: 10,
			sanity: 10,
			temperature: 5,
			prevLife: char.life,
			prevEnergy: char.energy,
			prevStarvation: char.starvation,
			prevSanity: char.sanity,
			prevTemperature: char.temperature,
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
			<LeftContent />
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
