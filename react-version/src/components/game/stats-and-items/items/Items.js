import React, { useContext, useEffect } from "react";
import "../../../../style/css/Items.css";
import { AnimationContext } from "../../../context/AnimationContext";
import { BoardContext } from "../../../context/BoardContext";
import { CharacterContext } from "../../../context/CharContext";
import { resourcesAnimation } from "../../functions/ResourcesAnimation";
import sejmitarImg from "../../../../img/sejmitar.png";
import ogniskoImg from "../../../../img/ognisko.png";
import Axe from "./Axe";
import Shoes from "./Shoes";
import Torch from "./Torch";
import Sword from "./Sword";
import Food from "./Food";
import Coat from "./Coat";

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
						<Axe />
						<Shoes />
						<Torch />
						<Sword />
						<Food />
						<Coat />
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
