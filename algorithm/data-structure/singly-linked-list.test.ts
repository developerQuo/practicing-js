import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import SinglyLinkedList from './singly-linked-list';

describe('singly linked list', () => {
	let list: SinglyLinkedList;

	beforeEach(() => {
		list = new SinglyLinkedList();
		list.push('Hello');
		list.push('Goodbye');
		list.push('!');
	});

	test('push', () => {
		expect(list.length).toBe(3);
		expect(list.head?.val).toEqual('Hello');
		expect(list.tail?.val).toEqual('!');
	});

	test('pop', () => {
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
		const shiftedNode = list.shift();

		expect(list.length).toBe(2);
		expect(list.head?.val).toEqual('Goodbye');
		expect(shiftedNode?.val).toBe('Hello');
	});

	test('unshift', () => {
		list.unshift('wassup');

		expect(list.length).toBe(4);
		expect(list.head?.val).toEqual('wassup');
	});

	test('get', () => {
		expect(list.get(0)?.val).toBe('Hello');
		expect(list.get(1)?.val).toBe('Goodbye');

		expect(list.get(5)).toBeNull();
	});

	test('set', () => {
		const result = list.set(1, 'doctor');

		expect(result).toBeTruthy();
		expect(list.get(1)?.val).toBe('doctor');
	});

	test('insert', () => {
		expect(list.insert(0, 'wassup')).toBeTruthy();
		expect(list.get(0)?.val).toBe('wassup');
		expect(list.get(0)?.next?.val).toBe('Hello');

		expect(list.insert(1, 'doctor')).toBeTruthy();
		expect(list.get(1)?.val).toBe('doctor');
		expect(list.get(1)?.next?.val).toBe('Hello');

		expect(list.insert(5, 'end')).toBeTruthy();
	});

	test('remove', () => {
		list.remove(1);

		expect(list.get(1)?.val).toBe('!');
		expect(list.length).toBe(2);
	});

	test('reverse', () => {
		list.reverse();

		expect(list.head?.val).toBe('!');
		expect(list.head?.next?.val).toBe('Goodbye');
		expect(list.head?.next?.next?.val).toBe('Hello');
		// Hello -> Goodbye -> !
		//  head             tail

		// Hello <- Goodbye <- !
		//  tail             head
	});
});
