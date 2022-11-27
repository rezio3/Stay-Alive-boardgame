import React, { useContext } from "react";
import { CharaterContext } from "../context/CharContext";
import char1 from "../../img/char2.png";
import char2 from "../../img/char3.png";
import char3 from "../../img/char4.png";
import char4 from "../../img/char5.png";
import char5 from "../../img/char6.png";

const Characters = () => {
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
		<div className="character-selection">
			<img
				src={char1}
				className="char-img-1 char-img"
				id="0"
				onClick={selectCharacterHandler}
			/>
			<img
				src={char2}
				className="char-img-2 char-img"
				id="1"
				onClick={selectCharacterHandler}
			/>
			<img
				src={char3}
				className="char-img-3 char-img"
				id="2"
				onClick={selectCharacterHandler}
			/>
			<img
				src={char4}
				className="char-img-4 char-img"
				id="3"
				onClick={selectCharacterHandler}
			/>
			<img
				src={char5}
				className="char-img-5 char-img"
				id="4"
				onClick={selectCharacterHandler}
			/>
		</div>
	);
};

export default Characters;
