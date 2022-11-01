import React, { useState } from "react";
import "../../style/css/Game.css";
import BoardButtons from "./BoardButtons";

const Game = () => {
	const [arrowBtnActive, setArrowBtnActive] = useState(true);
	const [characterSet, setCharacterSet] = useState(false);

	const handleArrowButton = () => {
		setArrowBtnActive(false);
		setCharacterSet(true);
	};

	return (
		<div className="game">
			{characterSet ? null : (
				<div className="click-start-hex">
					<h2>Umieść bohatera na planszy by rozpocząć grę</h2>
				</div>
			)}
			<div className="middle-container">
				<div className="game-board" id="game-board">
					{characterSet ? null : <div className="board-bg"></div>}
					<BoardButtons
						arrowBtnActive={arrowBtnActive}
						handleArrowButton={handleArrowButton}
					/>
					<div className="character"></div>
				</div>
			</div>
		</div>
	);
};

export default Game;
