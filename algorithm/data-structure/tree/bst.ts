import { queue } from '../queue';

export class TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree {
	root: TreeNode | null;
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new TreeNode(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current: TreeNode | null = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	find(value) {
		if (this.root === null) return false;
		let current: TreeNode | null = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
	contains(value) {
		if (this.root === null) return false;
		let current: TreeNode | null = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}

	bfs() {
		if (!this.root) return [];
		const { enqueue, dequeue, getLength } = queue();
		// 루트를 큐에 넣기.
		enqueue(this.root);

		const visited: number[] = [];

		while (getLength()) {
			// 큐에 노드가 있으면, 자식 노드를 큐에 추가하고 visited에 value를 저장하고 노드 제거.
			const current = dequeue();
			if (current.left) enqueue(current.left);
			if (current.right) enqueue(current.right);
			visited.push(current.value);
		}

		// 더 이상 큐에 노드가 없으면 종료하고 visited 리턴.
		return visited;
	}
}
