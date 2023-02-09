import React, { useCallback, useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Temperature = () => {
	const [char, setChar] = useContext(CharacterContext);
	let overload = char.temperature;
	if (char.temperature > 10) {
		let upperOverload = overload - 10;
		setChar({
			...char,
			temperature: 10,
			life: char.life - upperOverload,
		});
	} else if (char.temperature < 0) {
		setChar({
			...char,
			temperature: 0,
			life: char.life + overload,
		});
	}
	return (
		<div className="temperature stat-bar">
			<div
				className="temperature-bar"
				style={{ height: char.temperature * 10 + "%" }}
			/>
			<span className="temperature-value">{char.temperature}/10</span>
		</div>
	);
};

export default Temperature;
