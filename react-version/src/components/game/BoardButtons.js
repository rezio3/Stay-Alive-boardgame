import React, { Fragment, useContext } from "react";
import ButtonsRow1 from "./buttons/ButtonsRow1";
import ButtonsRow2 from "./buttons/ButtonsRow2";
import ButtonsRow3 from "./buttons/ButtonsRow3";
import ButtonsRow4 from "./buttons/ButtonsRow4";
import ButtonsRow5 from "./buttons/ButtonsRow5";
import ButtonsRow6 from "./buttons/ButtonsRow6";
import ButtonsRow7 from "./buttons/ButtonsRow7";
import ButtonsRow8 from "./buttons/ButtonsRow8";
import ButtonsRow9 from "./buttons/ButtonsRow9";
import ButtonsRow10 from "./buttons/ButtonsRow10";
import ButtonsRow11 from "./buttons/ButtonsRow11";
import ButtonsRow12 from "./buttons/ButtonsRow12";
import ButtonsRow13 from "./buttons/ButtonsRow13";
import ButtonsRow14 from "./buttons/ButtonsRow14";
import ButtonsRow15 from "./buttons/ButtonsRow15";
import ButtonsRow16 from "./buttons/ButtonsRow16";
import buttonsData from "./buttons/buttonsData/buttonsData";
import { BoardContext } from "../context/BoardContext";

const BoardButtons = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const handleArrowButton = (event) => {
		props.onArrowButton();
		const handleBtnId = (e) => {
			if (board.btnId !== e.target.id) {
				setBoard({
					...board,
					btnId: e.target.id,
					prevBtnId: board.btnId,
				});
			}
		};
		handleBtnId(event);
	};
	return (
		<Fragment>
			<div className="even-row-container" id="row16" title="16" data-value="16">
				{buttonsData.buttonsRow16.map((e) => (
					<ButtonsRow16
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="odd-row-container" id="row15" title="15" data-value="15">
				{buttonsData.buttonsRow15.map((e) => (
					<ButtonsRow15
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="even-row-container" id="row14" title="14" data-value="14">
				{buttonsData.buttonsRow14.map((e) => (
					<ButtonsRow14
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="odd-row-container" id="row13" title="13" data-value="13">
				{buttonsData.buttonsRow13.map((e) => (
					<ButtonsRow13
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="even-row-container" id="row12" title="12" data-value="12">
				{buttonsData.buttonsRow12.map((e) => (
					<ButtonsRow12
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="odd-row-container" id="row11" title="11" data-value="11">
				{buttonsData.buttonsRow11.map((e) => (
					<ButtonsRow11
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="even-row-container" id="row10" title="10" data-value="10">
				{buttonsData.buttonsRow10.map((e) => (
					<ButtonsRow10
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="odd-row-container" id="row9" title="9" data-value="9">
				{buttonsData.buttonsRow9.map((e) => (
					<ButtonsRow9
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="even-row-container" id="row8" title="8" data-value="8">
				{buttonsData.buttonsRow8.map((e) => (
					<ButtonsRow8
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="odd-row-container" id="row7" title="7" data-value="7">
				{buttonsData.buttonsRow7.map((e) => (
					<ButtonsRow7
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="even-row-container" id="row6" title="6" data-value="6">
				{buttonsData.buttonsRow6.map((e) => (
					<ButtonsRow6
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="odd-row-container" id="row5" title="5" data-value="5">
				{buttonsData.buttonsRow5.map((e) => (
					<ButtonsRow5
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="even-row-container" id="row4" title="4" data-value="4">
				{buttonsData.buttonsRow4.map((e) => (
					<ButtonsRow4
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="odd-row-container" id="row3" title="3" data-value="3">
				{buttonsData.buttonsRow3.map((e) => (
					<ButtonsRow3
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="even-row-container" id="row2" title="2" data-value="2">
				{buttonsData.buttonsRow2.map((e) => (
					<ButtonsRow2
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
			</div>
			<div className="row1-container" id="row1" title="1" data-value="1">
				{buttonsData.buttonsRow1.map((e) => (
					<ButtonsRow1
						id={e.id}
						className={e.className}
						value={e.value}
						key={e.id}
					/>
				))}
				<button
					type="button"
					className={`btn11 btn-line1 arrow-button ${
						props.arrowBtnActive === true ? "animation" : null
					}`}
					id="11"
					title="outland"
					value="11"
					onClick={handleArrowButton}
				></button>
			</div>
		</Fragment>
	);
};

export default BoardButtons;
