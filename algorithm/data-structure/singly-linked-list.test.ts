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

		list.pop();

		expect(list.length).toBe(2);
		expect(list.tail?.val).toEqual('Goodbye');
	});
});
