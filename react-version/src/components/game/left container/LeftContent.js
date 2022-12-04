import React, { useContext } from "react";
import { CharacterContext } from "../../context/CharContext";
import Statistics from "./Statistics";

const LeftContent = () => {
	const { char, setChar } = useContext(CharacterContext);

	return (
		<div className="left-container">
			<header className="header">
				<span className="stay-alive-text">Stay Alive</span>
			</header>
			<Statistics />
		</div>
	);
};

export default LeftContent;
