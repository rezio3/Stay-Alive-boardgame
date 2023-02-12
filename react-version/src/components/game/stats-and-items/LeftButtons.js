import React, { useContext } from "react";
import "../../../style/css/LeftButtons.css";
import { CharacterContext } from "../../context/CharContext";
import { eatButtons } from "../functions/EatButtons";
import { StatsNotificationsContext } from "../../context/StatsNotificationsContext";

const LeftButtons = () => {
	const [char, setChar] = useContext(CharacterContext);
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);
	const handleEatButton = (e) => {
		eatButtons(e, char, setChar, statsNote, setStatsNote);
	};
	return (
		<div className="left-buttons-container">
			<div className="left-buttons-container-top">
				<button
					name="eat1grass"
					className={
						char.inventoryResources.grass >= 1
							? "btn-eat-1-grass btn-eat-1-grass-active"
							: "btn-eat-1-grass"
					}
					id="btn-eat-1-grass"
					disabled={char.inventoryResources.grass >= 1 ? false : true}
					onClick={handleEatButton}
				>
					Zjedz 1 trawę
					<div>
						<p>Energia +2</p>
					</div>
				</button>
				<button
					name="eat2grass"
					className={
						char.inventoryResources.grass >= 2
							? "btn-eat-2-grass btn-eat-2-grass-active"
							: "btn-eat-2-grass"
					}
					id="btn-eat-2-grass"
					disabled={char.inventoryResources.grass >= 2 ? false : true}
					onClick={handleEatButton}
				>
					Zjedz 2 trawy
					<div>
						<p>Energia +4 Głód +1</p>
					</div>
				</button>
				<button
					name="eatfood"
					className={
						char.inventoryItems.food === 1
							? "btn-eat-food btn-eat-food-active"
							: "btn-eat-food"
					}
					id="btn-eat-food"
					disabled={char.inventoryItems.food === 1 ? false : true}
					onClick={handleEatButton}
				>
					Zjedz Leczo
				</button>
			</div>
			<div className="left-buttons-container-bottom">
				<button
					name="redbull"
					className={
						char.inventoryItems.fireCard > 0
							? "btn-drink-red-bull btn-drink-red-bull-active"
							: "btn-drink-red-bull"
					}
					id="btn-drink-red-bull"
					disabled={char.inventoryItems.fireCard > 0 ? false : true}
					onClick={handleEatButton}
				>
					Wypij czerwonego byka
					<div>
						<p>Energia +8</p>
					</div>
				</button>
				<div className="fire-place-container">
					<div
						className={
							char.inventoryItems.fireCard > 0
								? "fire-place-icon-true"
								: "fire-place-icon-false"
						}
						id="fire-place-icon"
					></div>
					<span className="fire-place-span">
						x{char.inventoryItems.fireCard}
					</span>
				</div>
				<button
					name="sasuages"
					className={
						char.inventoryItems.fireCard > 0
							? "btn-eat-sasuage btn-eat-sasuage-active"
							: "btn-eat-sasuage"
					}
					id="btn-eat-sasuage"
					disabled={char.inventoryItems.fireCard > 0 ? false : true}
					onClick={handleEatButton}
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
