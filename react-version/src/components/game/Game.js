import React, { useState } from "react";
import "../../style/css/Game.css";

const Game = () => {
	const [arrowBtnActive, setArrowBtnActive] = useState(true);
	const [characterSet, setCharacterSet] = useState(false);

	const handleArrowButton = () => {
		setArrowBtnActive(false);
		setCharacterSet(true);
	};

	return (
		<div>
			<div className="game">
				{characterSet ? null : (
					<div className="click-start-hex">
						<h2>Umieść bohatera na planszy by rozpocząć grę</h2>
					</div>
				)}
				<div className="middle-container">
					<div className="game-board" id="game-board">
						{characterSet ? null : <div className="board-bg"></div>}
						<div
							className="row16-container"
							id="row16"
							title="16"
							data-value="16"
						>
							<button
								type="button"
								className="btn1 btn-line16 cave"
								id="165"
								title="fjord"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line16"
								id="166"
								title="fjord"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line16"
								id="167"
								title="fjord"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line16"
								id="168"
								title="fjord"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line16 grass"
								id="169"
								title="fjord"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line16"
								id="170"
								title="crater"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line16 lotos"
								id="171"
								title="crater"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line16"
								id="172"
								title="crater"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line16"
								id="173"
								title="crater"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line16 boss"
								id="174"
								title="crater"
								value="10"
							></button>
						</div>
						<div
							className="row15-container"
							id="row15"
							title="15"
							data-value="15"
						>
							<button
								type="button"
								className="btn1 btn-line15"
								id="154"
								title="fjord"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line15"
								id="155"
								title="fjord"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line15 wood"
								id="156"
								title="fjord"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line15"
								id="157"
								title="fjord"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line15"
								id="158"
								title="fjord"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line15"
								id="159"
								title="crater"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line15"
								id="160"
								title="crater"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line15"
								id="161"
								title="crater"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line15 stone"
								id="162"
								title="crater"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line15"
								id="163"
								title="crater"
								value="10"
							></button>
							<button
								type="button"
								className="btn11 btn-line15"
								id="164"
								title="crater"
								value="11"
							></button>
						</div>
						<div
							className="row14-container"
							id="row14"
							title="14"
							data-value="14"
						>
							<button
								type="button"
								className="btn1 btn-line14 stone"
								id="144"
								title="fjord"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line14"
								id="145"
								title="fjord"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line14"
								id="146"
								title="fjord"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line14 fire"
								id="147"
								title="fjord"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line14"
								id="148"
								title="fjord"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line14"
								id="149"
								title="crater"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line14"
								id="150"
								title="crater"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line14"
								id="151"
								title="crater"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line14"
								id="152"
								title="crater"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line14"
								id="153"
								title="crater"
								value="10"
							></button>
						</div>
						<div
							className="row13-container"
							id="row13"
							title="13"
							data-value="13"
						>
							<button
								type="button"
								className="btn1 btn-line13"
								id="133"
								title="fjord"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line13"
								id="134"
								title="northrend"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line13"
								id="135"
								title="fjord"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line13"
								id="136"
								title="fjord"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line13"
								id="137"
								title="fjord"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line13"
								id="138"
								title="crater"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line13 stone"
								id="139"
								title="crater"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line13"
								id="140"
								title="crater"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line13"
								id="141"
								title="crater"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line13"
								id="142"
								title="crater"
								value="10"
							></button>
							<button
								type="button"
								className="btn11 btn-line13"
								id="143"
								title="crater"
								value="11"
							></button>
						</div>
						<div
							className="row12-container"
							id="row12"
							title="12"
							data-value="12"
						>
							<button
								type="button"
								className="btn1 btn-line12"
								id="122"
								title="northrend"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line12"
								id="123"
								title="northrend"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line12"
								id="124"
								title="northrend"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line12"
								id="125"
								title="fjord"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line12"
								id="126"
								title="crater"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line12"
								id="127"
								title="crater"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line12"
								id="128"
								title="crater"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line12"
								id="129"
								title="desert"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line12"
								id="130"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line12"
								id="131"
								title="crater"
								value="10"
							></button>
						</div>
						<div
							className="row11-container"
							id="row11"
							title="11"
							data-value="11"
						>
							<button
								type="button"
								className="btn1 btn-line11"
								id="111"
								title="northrend"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line11"
								id="112"
								title="northrend"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line11"
								id="113"
								title="northrend"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line11"
								id="114"
								title="northrend"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line11"
								id="115"
								title="northrend"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line11"
								id="116"
								title="northrend"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line11"
								id="117"
								title="desert"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line11"
								id="118"
								title="desert"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line11"
								id="119"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line11"
								id="120"
								title="desert"
								value="10"
							></button>
							<button
								type="button"
								className="btn11 btn-line11 flint"
								id="121"
								title="crater"
								value="11"
							></button>
						</div>
						<div
							className="row10-container"
							id="row10"
							title="10"
							data-value="10"
						>
							<button
								type="button"
								className="btn1 btn-line10"
								id="100"
								title="northrend"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line10"
								id="101"
								title="northrend"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line10 frozen-crown"
								id="102"
								title="northrend"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line10"
								id="103"
								title="northrend"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line10 flint"
								id="104"
								title="northrend"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line10"
								id="105"
								title="northrend"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line10"
								id="106"
								title="desert"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line10"
								id="107"
								title="desert"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line10 wood"
								id="108"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line10"
								id="109"
								title="desert"
								value="10"
							></button>
						</div>
						<div className="row9-container" id="row9" title="9" data-value="9">
							<button
								type="button"
								className="btn1 btn-line9"
								id="89"
								title="northrend"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line9 stone"
								id="90"
								title="northrend"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line9"
								id="91"
								title="northrend"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line9"
								id="92"
								title="northrend"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line9"
								id="93"
								title="northrend"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line9"
								id="94"
								title="northrend"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line9"
								id="95"
								title="desert"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line9 grass"
								id="96"
								title="desert"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line9 oasis"
								id="97"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line9"
								id="98"
								title="desert"
								value="10"
							></button>
							<button
								type="button"
								className="btn11 btn-line9"
								id="99"
								title="desert"
								value="11"
							></button>
						</div>
						<div className="row8-container" id="row8" title="8" data-value="8">
							<button
								type="button"
								className="btn1 btn-line8"
								id="78"
								title="northrend"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line8"
								id="79"
								title="northrend"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line8"
								id="80"
								title="northrend"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line8"
								id="81"
								title="northrend"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line8"
								id="82"
								title="northrend"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line8"
								id="83"
								title="desert"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line8"
								id="84"
								title="desert"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line8"
								id="85"
								title="desert"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line8"
								id="86"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line8 lotos"
								id="87"
								title="desert"
								value="10"
							></button>
						</div>
						<div className="row7-container" id="row7" title="7" data-value="7">
							<button
								type="button"
								className="btn1 btn-line7"
								id="67"
								title="northrend"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line7"
								id="68"
								title="northrend"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line7"
								id="69"
								title="northrend"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line7"
								id="70"
								title="northrend"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line7"
								id="71"
								title="northrend"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line7"
								id="72"
								title="northrend"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line7"
								id="73"
								title="desert"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line7"
								id="74"
								title="desert"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line7"
								id="75"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line7"
								id="76"
								title="desert"
								value="10"
							></button>
							<button
								type="button"
								className="btn11 btn-line7"
								id="77"
								title="desert"
								value="11"
							></button>
						</div>
						<div className="row6-container" id="row6" title="6" data-value="6">
							<button
								type="button"
								className="btn1 btn-line6"
								id="56"
								title="jungle"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line6"
								id="57"
								title="jungle"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line6 grass"
								id="58"
								title="jungle"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line6"
								id="59"
								title="northrend"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line6"
								id="60"
								title="outland"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line6"
								id="61"
								title="outland"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line6 wood"
								id="62"
								title="outland"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line6"
								id="63"
								title="desert"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line6"
								id="64"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line6 flint"
								id="65"
								title="desert"
								value="10"
							></button>
						</div>
						<div className="row5-container" id="row5" title="5" data-value="5">
							<button
								type="button"
								className="btn1 btn-line5 flint"
								id="45"
								title="jungle"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line5"
								id="46"
								title="jungle"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line5"
								id="47"
								title="jungle"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line5"
								id="48"
								title="jungle"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line5"
								id="49"
								title="outland"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line5 fire"
								id="50"
								title="outland"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line5"
								id="51"
								title="outland"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line5"
								id="52"
								title="outland"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line5"
								id="53"
								title="desert"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line5"
								id="54"
								title="desert"
								value="10"
							></button>
							<button
								type="button"
								className="btn11 btn-line5"
								id="55"
								title="desert"
								value="11"
							></button>
						</div>
						<div className="row4-container" id="row4" title="4" data-value="4">
							<button
								type="button"
								className="btn1 btn-line4"
								id="34"
								title="jungle"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line4 stone"
								id="35"
								title="jungle"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line4"
								id="36"
								title="jungle"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line4"
								id="37"
								title="jungle"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line4"
								id="38"
								title="outland"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line4"
								id="39"
								title="outland"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line4"
								id="40"
								title="outland"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line4 grass"
								id="41"
								title="outland"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line4"
								id="42"
								title="outland"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line4"
								id="43"
								title="outland"
								value="10"
							></button>
						</div>
						<div className="row3-container" id="row3" title="3" data-value="3">
							<button
								type="button"
								className="btn1 btn-line3"
								id="23"
								title="jungle"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line3"
								id="24"
								title="jungle"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line3"
								id="25"
								title="jungle"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line3 wood"
								id="26"
								title="jungle"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line3"
								id="27"
								title="jungle"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line3"
								id="28"
								title="outland"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line3"
								id="29"
								title="outland"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line3"
								id="30"
								title="outland"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line3"
								id="31"
								title="outland"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line3"
								id="32"
								title="outland"
								value="10"
							></button>
							<button
								type="button"
								className="btn11 btn-line3"
								id="33"
								title="outland"
								value="11"
							></button>
						</div>
						<div className="row2-container" id="row2" title="2" data-value="2">
							<button
								type="button"
								className="btn1 btn-line2 tent"
								id="12"
								title="jungle"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line2"
								id="13"
								title="jungle"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line2"
								id="14"
								title="jungle"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line2"
								id="15"
								title="jungle"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line2 grass"
								id="16"
								title="outland"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line2"
								id="17"
								title="outland"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line2 stone"
								id="18"
								title="outland"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line2"
								id="19"
								title="outland"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line2"
								id="20"
								title="outland"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line2"
								id="21"
								title="outland"
								value="10"
							></button>
						</div>
						<div className="row1-container" id="row1" title="1" data-value="1">
							<button
								type="button"
								className="btn1 btn-line1"
								id="1"
								title="jungle"
								value="1"
							></button>
							<button
								type="button"
								className="btn2 btn-line1"
								id="2"
								title="jungle"
								value="2"
							></button>
							<button
								type="button"
								className="btn3 btn-line1 wood"
								id="3"
								title="jungle"
								value="3"
							></button>
							<button
								type="button"
								className="btn4 btn-line1"
								id="4"
								title="jungle"
								value="4"
							></button>
							<button
								type="button"
								className="btn5 btn-line1"
								id="5"
								title="jungle"
								value="5"
							></button>
							<button
								type="button"
								className="btn6 btn-line1"
								id="6"
								title="outland"
								value="6"
							></button>
							<button
								type="button"
								className="btn7 btn-line1"
								id="7"
								title="outland"
								value="7"
							></button>
							<button
								type="button"
								className="btn8 btn-line1"
								id="8"
								title="outland"
								value="8"
							></button>
							<button
								type="button"
								className="btn9 btn-line1"
								id="9"
								title="outland"
								value="9"
							></button>
							<button
								type="button"
								className="btn10 btn-line1"
								id="10"
								title="outland"
								value="10"
							></button>
							<button
								type="button"
								className={`btn11 btn-line1 arrow-button ${
									arrowBtnActive === true ? "animation" : null
								}`}
								id="11"
								title="outland"
								value="11"
								onClick={handleArrowButton}
							>
								<div className="character"></div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;
