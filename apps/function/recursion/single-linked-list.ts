export type List = {
	value: number;
	next: List | null;
};

// for loop
export function printListForLoop(list: List) {
	let tmp: List | null = list;

	while (tmp) {
		console.log(tmp.value);
		tmp = tmp.next;
	}
}

// recursion
export function printListRecursion(list: List) {
	console.log(list.value);
	if (list.next) {
		printListRecursion(list.next);
	}
}

// for loop(reverse)
export function forLoopReverseOrder(list: List) {}

// recursion(reverse)
export function recursionReverseOrder(list: List) {}
