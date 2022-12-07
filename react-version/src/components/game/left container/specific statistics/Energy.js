import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Energy = () => {
	const [char, setChar] = useContext(CharacterContext);
	const energyChange = () => {
		const energyBar = document.querySelector(`.energy-bar`);
		const energyValue = document.querySelector(`.energy-value`);
		// setTimeout(function () {
		// 	const energyChangeSpan = document.querySelector(`.energy-notification`);
		// 	energyChangeSpan.style.display = `flex`;
		// 	if (prevEnergy > energy) {
		// 		energyChangeSpan.innerHTML = `<p>Energia -${prevEnergy - energy}`;
		// 	} else if (prevEnergy < energy) {
		// 		energyChangeSpan.innerHTML = `<p>Energia +${energy - prevEnergy}`;
		// 	}
		// 	setTimeout(function () {
		// 		energyChangeSpan.style.display = `none`;
		// 	}, 800);
		// 	prevEnergy = energy;
		// }, 100);

		energyBar.style.height = char.energy * 10 + "%";
		energyValue.innerHTML = `${char.energy}/10`;
	};

	if (char.prevEnergy !== char.energy) energyChange();

	return (
		<div className="energy stat-bar">
			<div className="energy-bar"></div>
			<span className="energy-value"></span>
		</div>
	);
};

export default Energy;
