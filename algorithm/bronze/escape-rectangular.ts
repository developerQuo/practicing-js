export default function getShortestDistance(
	x: number,
	y: number,
	w: number,
	h: number
) {
	const xAixsDistances = getAxisDistance(x, w);
	const yAixsDistances = getAxisDistance(y, h);
	return Math.min(...xAixsDistances, ...yAixsDistances);
}

export function getAxisDistance(
	userLocation: number,
	axisMaxLength: number
): [number, number] {
	return [userLocation, axisMaxLength - userLocation];
}
