export type List = {
	value: number;
	next: List | null;
};

// for loop
export function printListForLoop(list: List) {
	while (true) {
		console.log(list.value);
		if (list.next) {
			list = list.next;
		} else {
			break;
		}
	}
}

// recursion
export function printListRecursion(list: List) {}
