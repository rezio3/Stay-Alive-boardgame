import React, { useContext } from "react";
import "../../../style/css/Items.css";
import { AnimationContext } from "../../context/AnimationContext";
import { BoardContext } from "../../context/BoardContext";
import { CharacterContext } from "../../context/CharContext";

const Items = () => {
	const [anim, setAnim] = useContext(AnimationContext);
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);
	const { wood, stone, grass, flint, lotos } = char.inventory;
	if (anim[board.resourcePlayerStandsOn] === true) {
		setTimeout(() => {
			setAnim({
				...anim,
				[board.resourcePlayerStandsOn]: false,
			});
		}, 900);
	}

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
						<div className="" id="axe-container">
							<div className="" id="axe-anim">
								<div className="item-description-left axe-description-left description-left">
									<h1>Siekiera</h1>
									<img src="./img/siekiera.png" alt="" className="src" />
									<p>Zostań prawdziwym rębajłą</p>
									<span>Nie tracisz energii podczas pozyskiwania surowców</span>
									<div className="axe-price">
										<span>x1</span>
										<img src="./img/kamień.png" />
										<span>x1</span>
										<img src="./img/drewno.png" />
									</div>
								</div>
							</div>
						</div>
						<div className="" id="shoes-container">
							<div className="" id="shoes-anim">
								<div className="item-description-left shoes-description-left description-left">
									<h1>Lacie</h1>
									<img src="./img/lacie.png" />
									<p>Nie uraź stopy o kamień</p>
									<span>
										Na koniec tury odzyskujesz 3 punkty energii zamiast 2.
									</span>
									<div className="shoes-price">
										<span>x2</span>
										<img src="./img/trawa.png" />
									</div>
								</div>
							</div>
						</div>
						<div className="" id="torch-container">
							<div className="" id="torch-anim">
								<div className="item-description-left torch-description-left description-left">
									<h1>Pochodnia</h1>
									<img src="./img/pochodnia.png" />
									<p>Przegoń niedobre ciemności</p>
									<span>
										W nocy (i w sytuacjach gdy jest ciemno) nie trać psychiki.
										Tracisz pochodnię, gdy zakończysz turę na lodowej grani.
									</span>
									<div className="torch-price">
										<span>x1</span>
										<img src="./img/drewno.png" />
										<span>x1</span>
										<img src="./img/krzesiwo.png" />
									</div>
								</div>
							</div>
						</div>
						<div className="" id="sword-container">
							<div className="" id="sword-anim">
								<div className="item-description-left sword-description-left description-left">
									<h1>Miecz</h1>
									<img src="./img/miecz.png" />
									<p>Siekaj wrogów jak ogóra</p>
									<span>Podczas walki z wrogiem zwyciężasz wyrzucając 3.</span>
									<div className="sword-price">
										<span>x2</span>
										<img src="./img/kamień.png" />
										<span>x1</span>
										<img src="./img/drewno.png" />
									</div>
								</div>
							</div>
						</div>
						<div className="" id="food-container">
							<div className="" id="food-anim">
								<div className="item-description-left food-description-left description-left">
									<h1>Leczo</h1>
									<img src="./img/leczo.png" alt="" className="src" />
									<p>Leczy</p>
									<span>
										Leczo przywraca ci 5 punktów zdrowia i 2 punkty głodu.
									</span>
									<div className="food-price">
										<span>x1</span>
										<img src="./img/drewno.png" />
										<span>x1</span>
										<img src="./img/krzesiwo.png" />
										<span>x1</span>
										<img src="./img/lotos.png" />
									</div>
								</div>
							</div>
						</div>
						<div className="" id="coat-container">
							<div className="" id="coat-anim">
								<div className="item-description-left coat-description-left description-left">
									<h1>Ponczo</h1>
									<img src="./img//ponczo.png" />
									<p>Żadna dzida ci nie straszna</p>
									<span>
										Otrzymujesz 1 mniej obrażeń w przypadku przegranej walki z
										potworem.
									</span>
									<div className="coat-price">
										<span>x2</span>
										<img src="./img/trawa.png" />
									</div>
								</div>
							</div>
						</div>
						<div className="" id="sejmitar-container">
							<div className="" id="sejmitar-anim">
								<div className="item-description-left sejmitar-description-left description-left">
									<h1>Samonaprowadzający ognisty sejmitar zagłady</h1>
									<img src="./img/sejmitar.png" alt="" className="src" />
									<p>Badź niezwyciężony! Ale tylko raz...</p>
									<span>
										Pojawia się ognisty duszek i daje ci samonaprowadzający
										ognisty sejmitar zagłady. Od razu powala jednego potwora i
										psuje się nieodwracalnie. Podczasz ataku nie tracisz
										energii.
									</span>
									<div className="sejmitar-price">
										<img src="./img/ognisko.png" />
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
