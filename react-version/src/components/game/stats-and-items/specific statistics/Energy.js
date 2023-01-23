import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Energy = () => {
	const [char, setChar] = useContext(CharacterContext);
	// check if statistics are over-peaked
	if (char.energy > 10) {
		setChar({
			...char,
			energy: 10,
		});
	}

	return (
		<div className="energy stat-bar">
			<div className="energy-bar" style={{ height: char.energy * 10 + "%" }} />
			<span className="energy-value">{char.energy}/10</span>
		</div>
	);
};

export default Energy;
