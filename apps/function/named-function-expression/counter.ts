export function makeNFECounter() {
	let count = 0;

	function counter() {
		return counter.count++;
	}

	// TODO: 왜 counter 함수 내부에서는 초기화 할 수 없지?
	counter.count = count;
	counter.set = (num: number) => (counter.count = num);
	counter.decrease = () => counter.count--;

	return counter;
}

export function makeClosureCounter() {
	let count = 0;

	function counter() {
		return count++;
	}

	counter.set = (num: number) => (count = num);
	counter.decrease = () => count--;

	return counter;
}
