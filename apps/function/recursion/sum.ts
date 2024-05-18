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
function sumAP(num: number) {
	return 0;
}

export { sumForLoop, sumRecursion, sumAP };