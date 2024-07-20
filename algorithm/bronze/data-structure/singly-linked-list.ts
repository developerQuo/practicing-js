class LinkedListNode {
	val: unknown;
	next: unknown;

	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	head: unknown;
	tail: unknown;
	length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}
