import React from "react";
import "../../style/css/Start.css";
import Characters from "./Characters";
import Copyright from "../game/Copyright";

const Start = (props) => {
	return (
		<div className="start-main-container">
			<h1 className="title-menu">Stay Alive</h1>
			<h3 className="character-selection-text">Wybierz postać</h3>
			<Characters />
			<button className="start-btn" id="start-button" onClick={props.value}>
				Start!
			</button>
			<Copyright />
		</div>
	);
};

export default Start;
