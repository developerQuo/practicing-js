import { beforeEach, describe, expect, it } from '@jest/globals';
import aclean, { ascNomarlize } from './anagram';

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

	it('removes anagram words', () => {
		const isRemoved = !aclean(arr).some((cur, i, array) => {
			const snapshot = array.slice();
			snapshot.splice(i, 1);
			for (let word of snapshot) {
				if (
					cur.length === word.length &&
					ascNomarlize(cur) === ascNomarlize(word)
				) {
					return true;
				}
			}
		});

		expect(isRemoved).toBeTruthy();
	});
});
