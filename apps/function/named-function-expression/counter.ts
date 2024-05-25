export function makeNFECounter() {
	let count = 0;

	function counter() {
		return counter.count++;
	}

	counter.count = count;

	return counter;
}

export function makeClosureCounter() {}
