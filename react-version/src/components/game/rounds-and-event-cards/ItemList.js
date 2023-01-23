import React, { useContext, useEffect } from "react";
import { CharacterContext } from "../../context/CharContext";
import { checkAvailableItems } from "../functions/CheckAvailableItems";
import axeImg from "../../../img/siekiera.png";
import swordImg from "../../../img/miecz.png";
import shoesUnlImg from "../../../img/lacie.png";
import foodImg from "../../../img/leczo.png";
import coatImg from "../../../img/ponczo.png";
import torchImg from "../../../img/pochodnia.png";
import grassImg from "../../../img/trawa.png";
import stoneImg from "../../../img/kamień.png";
import woodImg from "../../../img/drewno.png";
import flintImg from "../../../img/krzesiwo.png";
import lotosImg from "../../../img/lotos.png";
import { itemCrafting } from "../functions/ItemCrafting";

const ItemList = () => {
	const [char, setChar] = useContext(CharacterContext);
	useEffect(() => {
		checkAvailableItems(char, setChar);
	}, [char.inventoryResources]);
	const { axeUnl, shoesUnl, swordUnl, foodUnl, torchUnl, coatUnl } =
		char.unlockedItems;
	const { axe, shoes, sword, food, torch, coat } = char.inventoryItems;

	const handleActiveItem = (e) => {
		itemCrafting(e, char, setChar);
	};

	return (
		<div className="item-list-container">
			<span className="item-list-span">Co muszę mieć by przetrwać?</span>
			<div className="item-list-container2">
				<div className="item-list-column-left">
					<button
						name="axe"
						className={(() => {
							if (axeUnl && !axe) {
								return "axe item-clickable right-img-div";
							} else if (!axeUnl && !axe) {
								return "axe right-img-div";
							} else if (axe) {
								return "right-img-div";
							}
						})()}
						disabled={!axeUnl}
						onClick={handleActiveItem}
					>
						<div className={axeUnl ? "axe-shadow" : "axe-shadow shadow"}>
							<div className="item-description-right axe-description-right description-right">
								<h1>Siekiera</h1>
								<img src={axeImg} alt="siekiera" className="src" />
								<p>Zostań prawdziwym rębajłą</p>
								<span>Nie tracisz energii podczas pozyskiwania surowców</span>
								<div className="axe-price">
									<span>x1</span>
									<img src={stoneImg} alt="stone" />
									<span>x1</span>
									<img src={woodImg} alt="wood" />
								</div>
							</div>
						</div>
					</button>
					<button
						name="shoes"
						className={(() => {
							if (shoesUnl && !shoes) {
								return "shoes item-clickable right-img-div";
							} else if (!shoesUnl && !shoes) {
								return "shoes right-img-div";
							} else if (shoes) {
								return "right-img-div";
							}
						})()}
						disabled={!shoesUnl}
						onClick={handleActiveItem}
					>
						<div className={shoesUnl ? "shoes-shadow" : "shoes-shadow shadow"}>
							<div className="item-description-right shoes-description-right description-right">
								<h1>Lacie</h1>
								<img src={shoesUnlImg} alt="lacie" />
								<p>Nie uraź stopy o kamień</p>
								<span>
									Na koniec tury odzyskujesz 3 punkty energii zamiast 2.
								</span>
								<div className="shoes-price">
									<span>x2</span>
									<img src={grassImg} alt="grass" />
								</div>
							</div>
						</div>
					</button>
					<button
						name="torch"
						className={(() => {
							if (torchUnl && !torch) {
								return "torch item-clickable right-img-div";
							} else if (!torchUnl && !torch) {
								return "torch right-img-div";
							} else if (torch) {
								return "right-img-div";
							}
						})()}
						disabled={!torchUnl}
						onClick={handleActiveItem}
					>
						<div className={torchUnl ? "torch-shadow" : "torch-shadow shadow"}>
							<div className="item-description-right torch-description-right description-right">
								<h1>Pochodnia</h1>
								<img src={torchImg} alt="pochodnia" />
								<p>Przegoń niedobre ciemności</p>
								<span>
									W nocy (i w sytuacjach gdy jest ciemno) nie trać psychiki.
									Tracisz pochodnię, gdy zakończysz turę na lodowej grani.
								</span>
								<div className="torch-price">
									<span>x1</span>
									<img src={woodImg} alt="wood" />
									<span>x1</span>
									<img src={flintImg} alt="flint" />
								</div>
							</div>
						</div>
					</button>
				</div>
				<div className="item-list-column-right">
					<button
						name="sword"
						className={(() => {
							if (swordUnl && !sword) {
								return "sword item-clickable right-img-div";
							} else if (!swordUnl && !sword) {
								return "sword right-img-div";
							} else if (sword) {
								return "right-img-div";
							}
						})()}
						disabled={!swordUnl}
						onClick={handleActiveItem}
					>
						<div className={swordUnl ? "sword-shadow" : "sword-shadow shadow"}>
							<div className="item-description-right sword-description-right description-right">
								<h1>Miecz</h1>
								<img src={swordImg} alt="miecz" />
								<p>Siekaj wrogów jak ogóra</p>
								<span>Podczas walki z wrogiem zwyciężasz wyrzucając 3.</span>
								<div className="sword-price">
									<span>x2</span>
									<img src={stoneImg} alt="stone" />
									<span>x1</span>
									<img src={woodImg} alt="wood" />
								</div>
							</div>
						</div>
					</button>
					<button
						name="food"
						className={(() => {
							if (foodUnl && !food) {
								return "food item-clickable right-img-div";
							} else if (!foodUnl && !food) {
								return "food right-img-div";
							} else if (food) {
								return "right-img-div";
							}
						})()}
						disabled={!foodUnl}
						onClick={handleActiveItem}
					>
						<div className={foodUnl ? "food-shadow" : "food-shadow shadow"}>
							<div className="item-description-right food-description-right description-right">
								<h1>Leczo</h1>
								<img src={foodImg} alt="leczo" className="src" />
								<p>Leczy</p>
								<span>
									Leczo przywraca ci 5 punktów zdrowia i 2 punkty głodu.
								</span>
								<div className="food-price">
									<span>x1</span>
									<img src={woodImg} alt="wood" />
									<span>x1</span>
									<img src={flintImg} alt="flint" />
									<span>x1</span>
									<img src={lotosImg} alt="lotos" />
								</div>
							</div>
						</div>
					</button>
					<button
						name="coat"
						className={(() => {
							if (coatUnl && !coat) {
								return "coat item-clickable right-img-div";
							} else if (!coatUnl && !coat) {
								return "coat right-img-div";
							} else if (coat) {
								return "right-img-div";
							}
						})()}
						disabled={!coatUnl}
						onClick={handleActiveItem}
					>
						<div className={coatUnl ? "coat-shadow" : "coat-shadow shadow"}>
							<div className="item-description-right coat-description-right description-right">
								<h1>Ponczo</h1>
								<img src={coatImg} alt="ponczo" />
								<p>Żadna dzida ci nie straszna</p>
								<span>
									Otrzymujesz 1 mniej obrażeń w przypadku przegranej walki z
									potworem.
								</span>
								<div className="coat-price">
									<span>x2</span>
									<img src={grassImg} alt="grass" />
								</div>
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemList;
