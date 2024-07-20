type Value = string | number | boolean;

class LinkedListNode {
	val: Value;
	next: unknown;

	constructor(val: Value) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	head: LinkedListNode | null;
	tail: LinkedListNode | null;
	length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value: Value) {
		const newNode = new LinkedListNode(value);
		// 첫 노드인 경우, 새 노드를 헤드로 설정
		if (!this.head) {
			this.head = newNode;
		}
		// 기존 테일의 다음 노드를 새 노드로 설정
		if (this.tail) {
			this.tail.next = newNode;
		}

		// 새 노드를 테일로 설정
		this.tail = newNode;

		// 길이 1 추가
		this.length++;

		return this;
	}
}

export default SinglyLinkedList;
