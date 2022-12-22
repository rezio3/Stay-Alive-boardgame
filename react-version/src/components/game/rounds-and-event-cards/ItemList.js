import React from "react";
import axe from "../../../img/siekiera.png";
import sword from "../../../img/miecz.png";
import shoes from "../../../img/lacie.png";
import food from "../../../img/leczo.png";
import coat from "../../../img/ponczo.png";
import torch from "../../../img/pochodnia.png";
import grass from "../../../img/trawa.png";
import stone from "../../../img/kamień.png";
import wood from "../../../img/drewno.png";
import flint from "../../../img/krzesiwo.png";
import lotos from "../../../img/lotos.png";

const ItemList = () => {
	return (
		<div className="item-list-container">
			<span className="item-list-span">Co muszę mieć by przetrwać?</span>
			<div className="item-list-container2">
				<div className="item-list-column-left">
					<button className="axe right-img-div">
						<div className="axe-shadow shadow">
							<div className="item-description-right axe-description-right description-right">
								<h1>Siekiera</h1>
								<img src={axe} alt="siekiera" className="src" />
								<p>Zostań prawdziwym rębajłą</p>
								<span>Nie tracisz energii podczas pozyskiwania surowców</span>
								<div className="axe-price">
									<span>x1</span>
									<img src={stone} alt="stone" />
									<span>x1</span>
									<img src={wood} alt="wood" />
								</div>
							</div>
						</div>
					</button>
					<button className="shoes right-img-div">
						<div className="shoes-shadow shadow">
							<div className="item-description-right shoes-description-right description-right">
								<h1>Lacie</h1>
								<img src={shoes} alt="lacie" />
								<p>Nie uraź stopy o kamień</p>
								<span>
									Na koniec tury odzyskujesz 3 punkty energii zamiast 2.
								</span>
								<div className="shoes-price">
									<span>x2</span>
									<img src={grass} alt="grass" />
								</div>
							</div>
						</div>
					</button>
					<button className="torch right-img-div">
						<div className="torch-shadow shadow">
							<div className="item-description-right torch-description-right description-right">
								<h1>Pochodnia</h1>
								<img src={torch} alt="pochodnia" />
								<p>Przegoń niedobre ciemności</p>
								<span>
									W nocy (i w sytuacjach gdy jest ciemno) nie trać psychiki.
									Tracisz pochodnię, gdy zakończysz turę na lodowej grani.
								</span>
								<div className="torch-price">
									<span>x1</span>
									<img src={wood} alt="wood" />
									<span>x1</span>
									<img src={flint} alt="flint" />
								</div>
							</div>
						</div>
					</button>
				</div>
				<div className="item-list-column-right">
					<button className="sword right-img-div">
						<div className="sword-shadow shadow">
							<div className="item-description-right sword-description-right description-right">
								<h1>Miecz</h1>
								<img src={sword} alt="miecz" />
								<p>Siekaj wrogów jak ogóra</p>
								<span>Podczas walki z wrogiem zwyciężasz wyrzucając 3.</span>
								<div className="sword-price">
									<span>x2</span>
									<img src={stone} alt="stone" />
									<span>x1</span>
									<img src={wood} alt="wood" />
								</div>
							</div>
						</div>
					</button>
					<button className="food right-img-div">
						<div className="food-shadow shadow">
							<div className="item-description-right food-description-right description-right">
								<h1>Leczo</h1>
								<img src={food} alt="leczo" className="src" />
								<p>Leczy</p>
								<span>
									Leczo przywraca ci 5 punktów zdrowia i 2 punkty głodu.
								</span>
								<div className="food-price">
									<span>x1</span>
									<img src={wood} alt="wood" />
									<span>x1</span>
									<img src={flint} alt="flint" />
									<span>x1</span>
									<img src={lotos} alt="lotos" />
								</div>
							</div>
						</div>
					</button>
					<button className="coat right-img-div">
						<div className="coat-shadow shadow">
							<div className="item-description-right coat-description-right description-right">
								<h1>Ponczo</h1>
								<img src={coat} alt="ponczo" />
								<p>Żadna dzida ci nie straszna</p>
								<span>
									Otrzymujesz 1 mniej obrażeń w przypadku przegranej walki z
									potworem.
								</span>
								<div className="coat-price">
									<span>x2</span>
									<img src={grass} alt="grass" />
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
