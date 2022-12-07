import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Starvation = () => {
	const [char, setChar] = useContext(CharacterContext);
	const starvationChange = () => {
		const starvationBar = document.querySelector(`.starvation-bar`);
		const starvationValue = document.querySelector(`.starvation-value`);
		// setTimeout(function () {
		// 	const starvationChangeSpan = document.querySelector(
		// 		`.starvation-notification`
		// 	);
		// 	starvationChangeSpan.style.display = `flex`;
		// 	if (prevStarvation > starvation) {
		// 		starvationChangeSpan.innerHTML = `<p>Głód -${
		// 			prevStarvation - starvation
		// 		}`;
		// 	} else if (prevStarvation < starvation) {
		// 		starvationChangeSpan.innerHTML = `<p>Głód +${
		// 			starvation - prevStarvation
		// 		}`;
		// 	}
		// 	setTimeout(function () {
		// 		starvationChangeSpan.style.display = `none`;
		// 	}, 800);
		// 	prevStarvation = starvation;
		// }, 100);

		starvationBar.style.height = char.starvation * 10 + "%";
		starvationValue.innerHTML = `${char.starvation}/10`;
	};

	if (char.prevStarvation !== char.starvation) starvationChange();

	return (
		<div className="starvation stat-bar">
			<div className="starvation-bar"></div>
			<span className="starvation-value"></span>
		</div>
	);
};

export default Starvation;
