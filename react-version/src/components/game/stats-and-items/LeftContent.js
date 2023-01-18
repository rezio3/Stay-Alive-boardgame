import React, { useContext } from "react";
import { CharacterContext } from "../../context/CharContext";
import Statistics from "./Statistics";
import Items from "./Items";

const LeftContent = () => {
	const { char, setChar } = useContext(CharacterContext);

	return (
		<div className="left-container">
			<header className="header">
				<span className="stay-alive-text">Stay Alive</span>
			</header>
			<Statistics />
			<Items />
		</div>
	);
};

export default LeftContent;
