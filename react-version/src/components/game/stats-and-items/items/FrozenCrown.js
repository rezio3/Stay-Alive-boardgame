import React, { useContext } from "react";
import frozenCrownImg from "../../../../img/lodowa korona.png";
import { CharacterContext } from "../../../context/CharContext";

const FrozenCrown = () => {
	const [char, setChar] = useContext(CharacterContext);
	return (
		<div
			className={
				char.inventoryItems.frozenCrown ? "frozenCrown-cotainer" : null
			}
			id="frozenCrown-container"
		>
			<div
				className={
					char.inventoryItems.frozenCrown ? "frozenCrown-animation" : null
				}
				id="frozenCrown-anim"
			>
				<div className="item-description-left frozenCrown-description-left description-left">
					<h1>Lodowa Korona</h1>
					<img src={frozenCrownImg} className="src" />
					<p>Zamróź sobie mózg</p>
					<span>
						Nie tracisz psychiki w żadnym przypadku. Lodowa Korona roztapia się
						gdy skończysz ruch na pustyni lub w kraterze.
					</span>
				</div>
			</div>
		</div>
	);
};

export default FrozenCrown;
