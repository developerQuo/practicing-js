export function isBetween(start: number, end: number) {
	return function (element: number) {
		return element >= start && element <= end ? true : false;
	};
}

export function inArray(arr: number[]) {
	return function (element: number) {
		return arr.includes(element);
	};
}
