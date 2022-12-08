import React from "react";
import BoardFields from "./BoardFields";
import buttonsData from "./buttonsData/buttonsData";

const BoardRows = (props) => {
	return (
		<div className={props.className} id={`row${props.id}`}>
			{buttonsData[`buttonsRow${props.id}`].map((e) => (
				<BoardFields
					id={e.id}
					className={e.className}
					value={e.value}
					key={e.id}
					row={e.row}
					column={e.column}
					dataArrowBtnHandler={props.dataArrowBtnHandler}
				/>
			))}
		</div>
	);
};

export default BoardRows;
