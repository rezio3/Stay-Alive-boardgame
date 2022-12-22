import React from "react";
import "../../../style/css/Statistics.css";
import Life from "./specific statistics/Life";
import Energy from "./specific statistics/Energy";
import Starvation from "./specific statistics/Starvation";
import Sanity from "./specific statistics/Sanity";
import Temperature from "./specific statistics/Temperature";

const Statistics = () => {
	return (
		<div className="stats-container">
			<div className="stats-bars">
				<Life />
				<Energy />
				<Starvation />
				<Sanity />
				<Temperature />
			</div>
			<div className="stats-name">
				<span className="life-text stat-text">Życie</span>
				<span className="energy-text stat-text">Energia</span>
				<span className="starving-text stat-text">Głód</span>
				<span className="sanity-text stat-text">Psychika</span>
				<span className="temperature-text stat-text">Temp.</span>
			</div>
		</div>
	);
};

export default Statistics;
