/** 세 가지 답안 */

// 1. for loop
function sumForLoop(num: number) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}

// 2. recursion
function sumRecursion(num: number) {
	if (num === 1) {
		return 1;
	}
	return num + sumRecursion(num - 1);
}

// 3. 등차수열
// 공식: n * (2*a + (n - 1) * d) / 2
function sumAP(num: number) {
	return (num * (2 * (2 * 1 - 1) + (num - 1) * 1)) / 2;
}

export { sumForLoop, sumRecursion, sumAP };
