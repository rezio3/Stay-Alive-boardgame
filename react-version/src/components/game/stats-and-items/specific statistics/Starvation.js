import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Starvation = () => {
	const [char, setChar] = useContext(CharacterContext);
	// check if statistics are over-peaked
	let overload = char.starvation;
	if (char.starvation > 10) {
		setChar({
			...char,
			starvation: 10,
		});
	} else if (char.starvation < 0) {
		setChar({
			...char,
			starvation: 0,
			life: char.life + overload,
		});
	}

	return (
		<div className="starvation stat-bar">
			<div
				className="starvation-bar"
				style={{ height: char.starvation * 10 + "%" }}
			/>
			<span className="starvation-value">{char.starvation}/10</span>
		</div>
	);
};

export default Starvation;
