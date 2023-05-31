export const arrayShuffle = (event, setEvent) => {
	// let i;
	// let eventArrayCount;
	// for (eventArrayCount = [], i = 0; i < 20; ++i) {
	// 	eventArrayCount[i] = i;
	// }
	// shuffle(eventArrayCount);
	// function shuffle(array) {
	// 	let tmp,
	// 		current,
	// 		top = array.length;
	// 	if (top)
	// 		while (--top) {
	// 			current = Math.floor(Math.random() * (top + 1));
	// 			tmp = array[current];
	// 			array[current] = array[top];
	// 			array[top] = tmp;
	// 		}
	// 	setEvent({
	// 		...event,
	// 		eventsArray: array,
	// 	});
	// }
	setEvent({
		...event,
		eventsArray: [3, 5, 5, 3, 4],
	});
};
