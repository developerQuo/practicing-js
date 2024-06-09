export default function countNumbers(numX: number, numY: number, numZ: number) {
	return console.log();
}

export function countDigit(number: number, digit: number) {
	const digitArray = [...number.toString()].filter(
		(strNum) => +strNum === digit
	);
	return digitArray.length;
}
