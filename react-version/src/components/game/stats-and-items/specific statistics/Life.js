import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Life = () => {
	const [char, setChar] = useContext(CharacterContext);
	// check if statistic are over-peaked
	if (char.life > 20) {
		setChar({
			...char,
			life: 20,
		});
	}

	return (
		<div className="life stat-bar">
			<div className="life-bar" style={{ height: char.life * 5 + "%" }} />
			<span className="life-value">{char.life}/20</span>
		</div>
	);
};

export default Life;
