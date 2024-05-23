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
export function forLoopReverseOrder(list: List) {
	let copiedList: List | null = list;
	let values: number[] = [];

	while (copiedList) {
		values.push(copiedList.value);
		copiedList = copiedList.next;
	}

	values.reverse().forEach((value) => console.log(value));
}

// recursion(reverse)
export function recursionReverseOrder(list: List) {
	if (list.next) {
		printListRecursion(list.next);
	}
	console.log(list.value);
}
