export function sum(initNum: number) {
	let result = initNum ?? 0;

	function calculate(nextNum: number) {
		result += nextNum;
		return calculate;
	}

	calculate.toString = function () {
		return result;
	};

	return calculate;
}
