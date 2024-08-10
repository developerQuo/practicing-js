import { beforeEach, describe, expect, test } from '@jest/globals';
import { HashTable } from './hash';

describe('hash table', () => {
	let hashMap;

	beforeEach(() => {
		hashMap = new HashTable();
	});

	test('get', () => {
		expect(hashMap.get('hi')).toBeUndefined();
	});

	test('set & get', () => {
		hashMap.set('hi', '#000ffb');

		expect(hashMap.get('hi')).toEqual('#000ffb');

		hashMap.set('quq', '#fbbe00');

		expect(hashMap.get('quq')).toEqual('#fbbe00');
	});

	test('keys & values', () => {
		hashMap.set('hi', '#000ffb');
		hashMap.set('quq', '#fbbe00');
		hashMap.set('hello', '#333221');
		hashMap.set('nihao', '#333221');

		expect(hashMap.keys()).toEqual(['nihao', 'hello', 'hi', 'quq']);
		expect(hashMap.values()).toEqual(['#333221', '#000ffb', '#fbbe00']);
	});
});
