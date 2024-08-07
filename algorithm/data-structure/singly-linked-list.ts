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

	set(index: number, value: Value) {
		const currentNode = this.get(index);

		if (currentNode) {
			currentNode.val = value;
			return true;
		}
		return false;
	}

	insert(index: number, value: Value) {
		if (index < 0 || index > this.length) {
			return false;
		}
		if (index === this.length) {
			return !!this.push(value);
		}
		if (index === 0) {
			return !!this.unshift(value);
		}

		// 인덱스 앞 위치, 없으면 헤드의 노드를 가져온다.
		const previousNode = this.get(index - 1);
		if (previousNode?.next) {
			// 인덱스 위치의 노드를 새 노드의 next로 설정
			const newNode = new LinkedListNode(value);
			newNode.next = previousNode.next;

			// 인덱스 앞 위치의 next를 새 노드로 설정
			previousNode.next = newNode;
			this.length++;
			return true;
		}
	}

	remove(index: number) {
		if (index < 0 || index >= this.length) return undefined;

		// 마지막 요소 -> pop
		if (index === this.length - 1) return this.pop();

		// 첫 요소 -> shift
		if (index === 0) return this.shift();

		// 앞 요소를 가져와서 next를 다음, 다음으로 설정
		const previousNode = this.get(index - 1);
		const removedNode = previousNode?.next;
		if (previousNode) {
			previousNode.next = removedNode?.next ?? null;
		}
		// 길이 1 감소
		this.length--;

		// 제거된 노드 리턴
		return removedNode;
	}

	reverse() {
		// head, tail 위치 변경
		[this.head, this.tail] = [this.tail, this.head];

		let newNext;
		let currentNode = this.tail;
		// 리스트 길이만큼 반복. tail부터 next 순서대로
		while (currentNode) {
			console.log(currentNode);
			// 다음 차례 저장
			const nextLoop = currentNode.next;
			// 현재 노드의 next 설정
			currentNode.next = newNext;
			// 새로운 next는 현재 노드로 변수 저장
			newNext = currentNode;

			currentNode = nextLoop;
		}

		return this;
	}
}

export default SinglyLinkedList;
