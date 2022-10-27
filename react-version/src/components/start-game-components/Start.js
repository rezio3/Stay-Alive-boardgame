import React from "react";
import "../../style/css/Start.css";
import Characters from "./Characters";

const Start = (props) => {
	return (
		<div className="start-main-container">
			<h1 className="title-menu">Stay Alive</h1>
			<h3 className="character-selection-text">Wybierz postać</h3>
			<Characters />
			<button className="start-btn" id="start-button" onClick={props.value}>
				Start!
			</button>
			<div className="copyright-container">
				<span className="alert-reso">
					If your game crashed, you've probably changed your window size
				</span>
				<span className="alert-reso">
					DO NOT CHANGE YOUR SCREEN RESOLUTION DURING THE GAME! Adjust it before
					you start.
				</span>
				<span className="copyright-text">
					2022 Jakub Rezler || &copy; All rights reserved
				</span>
			</div>
		</div>
	);
};

export default Start;
