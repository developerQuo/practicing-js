export default function sum(prevNum: number) {
	return function (nextNum: number) {
		if (isNumber(nextNum) && isNumber(prevNum)) {
			return prevNum + nextNum;
		}
		throw new Error("There isn't number");
	};
}

const isNumber = (num: number) =>
	typeof num == 'number' && !isNaN(num) && isFinite(num);
