import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Energy = () => {
	const [char, setChar] = useContext(CharacterContext);

	const energyChange = () => {
		const energyBar = document.querySelector(`.energy-bar`);
		energyBar.style.height = char.energy * 10 + "%";
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

		// energyValue.innerHTML = `${char.energy}/10`;
	};

	if (char.energy || char.energy === 0) energyChange();

	return (
		<div className="energy stat-bar">
			<div className="energy-bar" />
			<span className="energy-value">{char.energy}/10</span>
		</div>
	);
};

export default Energy;
