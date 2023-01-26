export const cantMoveAnimation = (char, setChar, textValue) => {
	console.log(textValue);
	setChar({
		...char,
		cantMoveAnimation: true,
	});
};
