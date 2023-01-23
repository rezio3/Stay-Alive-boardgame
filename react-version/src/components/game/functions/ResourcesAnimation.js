export const resourcesAnimation = ({ setter, resourceType, anim }) => {
	// params
	setter({
		...anim,
		[resourceType]: true,
	});
	setTimeout(() => {
		setter({
			...anim,
			[resourceType]: false,
		});
	}, 900);
};
