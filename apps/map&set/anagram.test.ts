import { beforeEach, describe, expect, it } from '@jest/globals';
import aclean from './anagram';

describe('애너그램 걸러내기', () => {
	let arr: Array<string>;

	beforeEach(() => {
		arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
	});

	it('is pure function', () => {
		const snapshot = arr.slice();
		aclean(arr);
		expect(arr).toStrictEqual(snapshot);
	});

	it('removes anagram words', () => {});
});
