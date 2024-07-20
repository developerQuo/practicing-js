type Value = string | number | boolean;

class LinkedListNode {
	val: Value;
	next: LinkedListNode | null;

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

	pop() {
		// 빈 리스트면, undefined 리턴
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		// 반복문으로 n-1번 째 노드 찾기
		while (current.next) {
			newTail = current;
			current = current.next;
		}

		// 테일 변경
		this.tail = newTail;
		// 테일 노드 next 제거
		this.tail.next = null;
		// 길이 1 감소
		this.length--;

		// 길이가 0이면 헤드도 제거.
		if (!this.length) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift() {
		// 빈 리스트면, undefined 리턴
		if (!this.head) return undefined;

		const currentHead = this.head;
		// 헤드를 다음 노드로 변경
		this.head = this.head.next;
		// 길이 1 감소
		this.length--;

		if (!this.length) {
			this.tail = null;
		}

		// 이전 헤드 리턴
		currentHead.next = null;
		return currentHead;
	}

	unshift(value: Value) {
		// 새로운 노드 생성
		const newNode = new LinkedListNode(value);
		// 빈 리스트의 경우, 헤드와 테일 모두 새 노드로 설정
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// 아니라면,
			// 헤드는 새 노드,
			// 새 노드의 next는 현재 헤드다.
			newNode.next = this.head;
			this.head = newNode;
		}

		// 길이 1 증가
		this.length++;

		// 리스트 리턴
		return this;
	}

	get(index: number) {
		// 인덱스가 0보다 작거나, 범위를 넘어가면 null을 리턴
		if (index < 0 || index >= this.length) {
			return null;
		}

		let current = this.head;
		let currentIndex = 0;
		// 인덱스만큼 이동해서 그 노드를 반환한다.
		while (current) {
			if (currentIndex++ === index) {
				return current;
			}
			current = current.next;
		}
	}
}

export default SinglyLinkedList;
