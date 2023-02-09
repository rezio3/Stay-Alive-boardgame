import React, { useContext, useEffect } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Sanity = () => {
	const [char, setChar] = useContext(CharacterContext);
	// check if statistics are over-peaked
	let overload = char.sanity;
	if (char.sanity > 10) {
		setChar({
			...char,
			sanity: 10,
		});
	} else if (char.sanity < 0) {
		setChar({
			...char,
			sanity: 0,
			life: char.life + overload,
		});
	}

	return (
		<div className="sanity stat-bar">
			<div className="sanity-bar" style={{ height: char.sanity * 10 + "%" }} />
			<span className="sanity-value">{char.sanity}/10</span>
		</div>
	);
};

export default Sanity;
