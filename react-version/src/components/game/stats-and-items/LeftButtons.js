import React from "react";
import "../../../style/css/LeftButtons.css";

const LeftButtons = () => {
	const handler = () => {
		console.log("elo");
	};
	return (
		<div className="left-buttons-container">
			<div className="left-buttons-container-top">
				<button
					className="btn-eat-1-grass"
					id="btn-eat-1-grass"
					onClick={handler}
					disabled={true}
				>
					Zjedz 1 trawę
					<div>
						<p>Energia +2</p>
					</div>
				</button>
				<button
					className="btn-eat-2-grass"
					id="btn-eat-2-grass"
					disabled={true}
				>
					Zjedz 2 trawy
					<div>
						<p>Energia +4 Głód +1</p>
					</div>
				</button>
				<button className="btn-eat-food" id="btn-eat-food" disabled={true}>
					Zjedz Leczo
				</button>
			</div>
			<div className="left-buttons-container-bottom">
				<button
					className="btn-drink-red-bull"
					id="btn-drink-red-bull"
					disabled={true}
				>
					Wypij czerwonego byka
					<div>
						<p>Energia +8</p>
					</div>
				</button>
				<div className="fire-place-container">
					<div className="fire-place-icon-false" id="fire-place-icon"></div>
					<span className="fire-place-span">x0</span>
				</div>
				<button
					className="btn-eat-sasuage"
					id="btn-eat-sasuage"
					disabled={true}
				>
					Zjedz kiełbaski
					<div>
						<p>Głód +4</p>
					</div>
				</button>
			</div>
		</div>
	);
};

export default LeftButtons;
