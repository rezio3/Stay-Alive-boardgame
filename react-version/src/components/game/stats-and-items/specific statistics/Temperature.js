import React, { useCallback, useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Temperature = () => {
	const [char, setChar] = useContext(CharacterContext);

	const temperatureChange = () => {
		const temperatureBar = document.querySelector(`.temperature-bar`);
		// setTimeout(function () {
		// 	const temperatureChangeSpan = document.querySelector(
		// 		`.temperature-notification`
		// 	);
		// 	temperatureChangeSpan.style.display = `flex`;
		// 	if (prevTemperature > temperature) {
		// 		temperatureChangeSpan.innerHTML = `<p>Temperatura -${
		// 			prevTemperature - temperature
		// 		}`;
		// 	} else if (prevTemperature < temperature) {
		// 		temperatureChangeSpan.innerHTML = `<p>Temperatura +${
		// 			temperature - prevTemperature
		// 		}`;
		// 	}
		// 	setTimeout(function () {
		// 		temperatureChangeSpan.style.display = `none`;
		// 	}, 800);
		// 	prevTemperature = temperature;
		// }, 100);

		temperatureBar.style.height = char.temperature * 10 + "%";
	};
	if (char.prevTemperature !== char.temperature) temperatureChange();
	return (
		<div className="temperature stat-bar">
			<div className="temperature-bar" />
			<span className="temperature-value">{char.temperature}/10</span>
		</div>
	);
};

export default Temperature;
