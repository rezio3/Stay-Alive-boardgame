import React from "react";
import "../../../style/css/Statistics.css";

const Statistics = () => {
	return (
		<div className="stats-container">
			<div className="stats-bars">
				<div className="life stat-bar">
					<div className="life-bar"></div>
					<span className="life-value"></span>
				</div>
				<div className="energy stat-bar">
					<div className="energy-bar"></div>
					<span className="energy-value"></span>
				</div>
				<div className="starvation stat-bar">
					<div className="starvation-bar"></div>
					<span className="starvation-value"></span>
				</div>
				<div className="sanity stat-bar">
					<div className="sanity-bar"></div>
					<span className="sanity-value"></span>
				</div>
				<div className="temperature stat-bar">
					<div className="temperature-bar"></div>
					<span className="temperature-value"></span>
				</div>
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
