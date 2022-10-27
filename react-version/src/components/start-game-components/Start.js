import React, { useContext } from "react";
import "../../style/css/Start.css";

import char1 from "../../img/char2.png";
import char2 from "../../img/char3.png";
import char3 from "../../img/char4.png";
import char4 from "../../img/char5.png";
import char5 from "../../img/char6.png";
import { CharaterContext } from "../context/CharContext";

const Start = () => {
	const [char, setChar] = useContext(CharaterContext);

	const selectCharacterHandler = (e) => {
		let charactersImg = document.getElementsByClassName("char-img");
		for (let i = 0; i < charactersImg.length; i++) {
			charactersImg[i].style.backgroundColor = "rgb(218, 197, 131)";
		}
		const charSelected = document.getElementById(e.target.id);
		charSelected.style.backgroundColor = "rgb(253, 234, 173)";
		setChar({
			selectedChar: e.target.id,
		});
	};

	return (
		<div className="start-main-container">
			<h1 className="title-menu">Stay Alive</h1>
			<h3 className="character-selection-text">Wybierz postać</h3>
			<div className="character-selection">
				<img
					src={char1}
					className="char-img-1 char-img"
					id="./img/char2.png"
					onClick={selectCharacterHandler}
				/>
				<img
					src={char2}
					className="char-img-2 char-img"
					id="./img/char3.png"
					onClick={selectCharacterHandler}
				/>
				<img
					src={char3}
					className="char-img-3 char-img"
					id="./img/char4.png"
					onClick={selectCharacterHandler}
				/>
				<img
					src={char4}
					className="char-img-4 char-img"
					id="./img/char5.png"
					onClick={selectCharacterHandler}
				/>
				<img
					src={char5}
					className="char-img-5 char-img"
					id="./img/char6.png"
					onClick={selectCharacterHandler}
				/>
			</div>
			<button className="start-btn" id="start-button">
				Start!
			</button>
			<div className="copyright-container">
				<span className="alert-reso">
					If your game crashed, you've probably changed your window size
				</span>
				<span className="alert-reso">
					DO NOT CHANGE YOUR SCREEN RESOLUTION DURING THE GAME! Adjust it before
					you start.
				</span>
				<span className="copyright-text">
					2022 Jakub Rezler || &copy; All rights reserved
				</span>
			</div>
		</div>
	);
};

export default Start;
