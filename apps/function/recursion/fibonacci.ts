export function fib(num: number) {
	let first;
	if (!store[num - 1]) {
		first = fib(num - 1);
		store[num - 1] = first;
	}
	let second;
	if (!store[num - 2]) {
		second = fib(num - 2);
		store[num - 2] = second;
	}
	return first + second;
}

const store = { 1: 1, 2: 2 };
