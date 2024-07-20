import { describe, expect, test } from '@jest/globals';
import SinglyLinkedList from './singly-linked-list';

describe('singly linked list', () => {
	test('push', () => {
		let list = new SinglyLinkedList();
		list.push('Hello');
		list.push('Goodbye');

		expect(list.length).toBe(2);
		expect(list.head?.val).toEqual('Hello');
		expect(list.tail?.val).toEqual('Goodbye');
	});

	test('pop', () => {
		let list = new SinglyLinkedList();
		list.push('Hello');
		list.push('Goodbye');
		list.push('!');

		const removedNode = list.pop();

		expect(list.length).toBe(2);
		expect(list.tail?.val).toEqual('Goodbye');
		expect(removedNode?.val).toBe('!');

		list.pop();
		list.pop();

		expect(list.length).toBe(0);
		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
	});

	test('shift', () => {
		let list = new SinglyLinkedList();
		list.push('Hello');
		list.push('Goodbye');
		list.push('!');

		const shiftedNode = list.shift();

		expect(list.length).toBe(2);
		expect(list.head?.val).toEqual('Goodbye');
		expect(shiftedNode?.val).toBe('Hello');
	});
});
