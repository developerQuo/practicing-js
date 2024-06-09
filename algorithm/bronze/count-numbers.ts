export default function countNumbers(numX: number, numY: number, numZ: number) {
	const countArray: number[] = [];

	for (let digit = 0; digit < 10; digit++) {
		countArray.push(countDigit(numX * numY * numZ, digit));
	}
	return countArray;
}

export function countDigit(number: number, digit: number) {
	const digitArray = [...number.toString()].filter(
		(strNum) => +strNum === digit
	);
	return digitArray.length;
}
