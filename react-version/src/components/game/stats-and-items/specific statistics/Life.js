import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Life = () => {
	const [char, setChar] = useContext(CharacterContext);

	const lifeChange = () => {
		const lifeBar = document.querySelector(`.life-bar`);
		// setTimeout(function () {
		// 	const lifeChangeSpan = document.querySelector(`.life-notification`);
		// 	lifeChangeSpan.style.display = `flex`;
		// 	if (prevLife > life) {
		// 		lifeChangeSpan.innerHTML = `<p>Życie -${prevLife - life}`;
		// 	} else if (prevLife < life) {
		// 		lifeChangeSpan.innerHTML = `<p>Życie +${life - prevLife}`;
		// 	}
		// 	setTimeout(function () {
		// 		lifeChangeSpan.style.display = `none`;
		// 	}, 800);
		// 	prevLife = life;
		// }, 100);

		lifeBar.style.height = char.life * 5 + "%";
		if (char.life < 1) {
			// gameOver();
			console.log("You loose");
		}
	};

	if (char.prevLife !== char.life) lifeChange();

	return (
		<div className="life stat-bar">
			<div className="life-bar" />
			<span className="life-value">{char.life}/20</span>
		</div>
	);
};

export default Life;
