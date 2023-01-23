import React, { useContext, useEffect } from "react";
import "../../../../style/css/Items.css";
import { AnimationContext } from "../../../context/AnimationContext";
import { BoardContext } from "../../../context/BoardContext";
import { CharacterContext } from "../../../context/CharContext";
import { resourcesAnimation } from "../../functions/ResourcesAnimation";
import axeImg from "../../../../img/siekiera.png";
import swordImg from "../../../../img/miecz.png";
import shoesImg from "../../../../img/lacie.png";
import foodImg from "../../../../img/leczo.png";
import coatImg from "../../../../img/ponczo.png";
import torchImg from "../../../../img/pochodnia.png";
import grassImg from "../../../../img/trawa.png";
import stoneImg from "../../../../img/kamień.png";
import woodImg from "../../../../img/drewno.png";
import flintImg from "../../../../img/krzesiwo.png";
import lotosImg from "../../../../img/lotos.png";
import sejmitarImg from "../../../../img/sejmitar.png";
import ogniskoImg from "../../../../img/ognisko.png";

const usePrevious = (value) => {
	const ref = React.useRef();
	React.useEffect(() => {
		ref.current =
			value.wood + value.stone + value.grass + value.flint + value.lotos;
	});
	return ref.current;
};

const Items = () => {
	const [anim, setAnim] = useContext(AnimationContext);
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);
	const { wood, stone, grass, flint, lotos } = char.inventoryResources;
	const { axe, sword, shoes, coat, torch, food } = char.inventoryItems;

	const prevResourcesState = usePrevious(char.inventoryResources);
	const currentResourcesState = wood + stone + grass + flint + lotos;

	useEffect(() => {
		if (prevResourcesState < currentResourcesState)
			resourcesAnimation({
				setter: setAnim,
				resourceType: board.resourcePlayerStandsOn,
				anim: anim,
			});
		// arguments
	}, [char.inventoryResources]);

	return (
		<div className="items-container">
			<div className="items-inboard-container">
				<div className="resources-container">
					<div className="resources-icons">
						<div className="stone">
							<div
								className={
									anim.stone ? "stone-anim stone-animation" : "stone-anim"
								}
								title="kamień"
							></div>
						</div>
						<div className="wood">
							<div
								className={anim.wood ? "wood-anim wood-animation" : "wood-anim"}
								title="drewno"
							></div>
						</div>
						<div className="grass">
							<div
								className={
									anim.grass ? "grass-anim grass-animation" : "grass-anim"
								}
								title="trawa"
							></div>
						</div>
						<div className="flint">
							<div
								className={
									anim.flint ? "flint-anim flint-animation" : "flint-anim"
								}
								title="krzesiwo"
							></div>
						</div>
						<div className="lotos">
							<div
								className={
									anim.lotos ? "lotos-anim lotos-animation" : "lotos-anim"
								}
								title="lotos"
							></div>
						</div>
					</div>
					<div className="resources-text">
						<span className="stone-count">x{stone}</span>
						<span className="wood-count">x{wood}</span>
						<span className="grass-count">x{grass}</span>
						<span className="flint-count">x{flint}</span>
						<span className="lotos-count">x{lotos}</span>
					</div>
					<div className="items-inventory">
						<div className={axe ? "axe-container" : ""} id="axe-container">
							<div className={axe ? "axe-animation" : ""} id="axe-anim">
								<div className="item-description-left axe-description-left description-left">
									<h1>Siekiera</h1>
									<img src={axeImg} alt="siekiera" className="src" />
									<p>Zostań prawdziwym rębajłą</p>
									<span>Nie tracisz energii podczas pozyskiwania surowców</span>
									<div className="axe-price">
										<span>x1</span>
										<img src={stoneImg} />
										<span>x1</span>
										<img src={woodImg} />
									</div>
								</div>
							</div>
						</div>
						<div
							className={shoes ? "shoes-container" : ""}
							id="shoes-container"
						>
							<div className={shoes ? "shoes-animation" : ""} id="shoes-anim">
								<div className="item-description-left shoes-description-left description-left">
									<h1>Lacie</h1>
									<img src={shoesImg} />
									<p>Nie uraź stopy o kamień</p>
									<span>
										Na koniec tury odzyskujesz 3 punkty energii zamiast 2.
									</span>
									<div className="shoes-price">
										<span>x2</span>
										<img src={grassImg} />
									</div>
								</div>
							</div>
						</div>
						<div
							className={torch ? "torch-container" : ""}
							id="torch-container"
						>
							<div className={torch ? "torch-animation" : ""} id="torch-anim">
								<div className="item-description-left torch-description-left description-left">
									<h1>Pochodnia</h1>
									<img src={torchImg} />
									<p>Przegoń niedobre ciemności</p>
									<span>
										W nocy (i w sytuacjach gdy jest ciemno) nie trać psychiki.
										Tracisz pochodnię, gdy zakończysz turę na lodowej grani.
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
						<div
							className={sword ? "sword-container" : ""}
							id="sword-container"
						>
							<div className={sword ? "sword-animation" : ""} id="sword-anim">
								<div className="item-description-left sword-description-left description-left">
									<h1>Miecz</h1>
									<img src={swordImg} />
									<p>Siekaj wrogów jak ogóra</p>
									<span>Podczas walki z wrogiem zwyciężasz wyrzucając 3.</span>
									<div className="sword-price">
										<span>x2</span>
										<img src={stoneImg} />
										<span>x1</span>
										<img src={woodImg} />
									</div>
								</div>
							</div>
						</div>
						<div className={food ? "food-container" : ""} id="food-container">
							<div className={food ? "food-animation" : ""} id="food-anim">
								<div className="item-description-left food-description-left description-left">
									<h1>Leczo</h1>
									<img src={foodImg} alt="leczo" className="src" />
									<p>Leczy</p>
									<span>
										Leczo przywraca ci 5 punktów zdrowia i 2 punkty głodu.
									</span>
									<div className="food-price">
										<span>x1</span>
										<img src={woodImg} />
										<span>x1</span>
										<img src={flintImg} />
										<span>x1</span>
										<img src={lotosImg} />
									</div>
								</div>
							</div>
						</div>
						<div className={coat ? "coat-container" : ""} id="coat-container">
							<div className={coat ? "coat-animation" : ""} id="coat-anim">
								<div className="item-description-left coat-description-left description-left">
									<h1>Ponczo</h1>
									<img src={coatImg} />
									<p>Żadna dzida ci nie straszna</p>
									<span>
										Otrzymujesz 1 mniej obrażeń w przypadku przegranej walki z
										potworem.
									</span>
									<div className="coat-price">
										<span>x2</span>
										<img src={grassImg} />
									</div>
								</div>
							</div>
						</div>
						<div
							className={
								char.inventoryItems.sejmitar === 1 ? "sejmitar-container" : ""
							}
							id="sejmitar-container"
						>
							<div
								className={
									char.inventoryItems.sejmitar === 1 ? "sejmitar-animation" : ""
								}
								id="sejmitar-anim"
							>
								<div className="item-description-left sejmitar-description-left description-left">
									<h1>Samonaprowadzający ognisty sejmitar zagłady</h1>
									<img src={sejmitarImg} alt="sejmitar" className="src" />
									<p>Badź niezwyciężony! Ale tylko raz...</p>
									<span>
										Pojawia się ognisty duszek i daje ci samonaprowadzający
										ognisty sejmitar zagłady. Od razu powala jednego potwora i
										psuje się nieodwracalnie. Podczasz ataku nie tracisz
										energii.
									</span>
									<div className="sejmitar-price">
										<img src={ogniskoImg} />
									</div>
								</div>
							</div>
						</div>
						<div className="" id="frozenCrown-container">
							<div className="" id="frozenCrown-anim">
								<div className="item-description-left frozenCrown-description-left description-left">
									<h1>Lodowa Korona</h1>
									<img src="./img/lodowa korona.png" className="src" />
									<p>Zamróź sobie mózg</p>
									<span>
										Nie tracisz psychiki w żadnym przypadku. Lodowa Korona
										roztapia się gdy skończysz ruch na pustyni lub w kraterze.
									</span>
								</div>
							</div>
						</div>
						<div className="" id="securis-container">
							<div className="" id="securis-anim">
								<div className="item-description-left securis-description-left description-left">
									<h1>Securis</h1>
									<img
										src="./img/Topór obosieczny obrys2.png"
										className="src"
									/>
									<p>Wypraw Tanatosa na tamten świat</p>
									<span>
										Tym toporem możesz pokonać Tanatosa zamieszkującego
										czeluście krateru. Po wygranej walce lub kiedy skończy ci
										się energia i przegrasz, Securis psuje się nieodwracalnie.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Items;
