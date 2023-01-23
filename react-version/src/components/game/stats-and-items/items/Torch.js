import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";
import torchImg from "../../../../img/pochodnia.png";
import flintImg from "../../../../img/krzesiwo.png";
import woodImg from "../../../../img/drewno.png";

const Torch = () => {
	const [char, setChar] = useContext(CharacterContext);
	const { torch } = char.inventoryItems;
	return (
		<div className={torch ? "torch-container" : ""} id="torch-container">
			<div className={torch ? "torch-animation" : ""} id="torch-anim">
				<div className="item-description-left torch-description-left description-left">
					<h1>Pochodnia</h1>
					<img src={torchImg} />
					<p>Przegoń niedobre ciemności</p>
					<span>
						W nocy (i w sytuacjach gdy jest ciemno) nie trać psychiki. Tracisz
						pochodnię, gdy zakończysz turę na lodowej grani.
					</span>
					<div className="torch-price">
						<span>x1</span>
						<img src={woodImg} />
						<span>x1</span>
						<img src={flintImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Torch;
