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

	it('removes 1 set of anagram words', () => {
		const cleaned = aclean(['nap', 'PAN']);

		expect(cleaned.length).toBe(1);

		const hasWord = cleaned.some((word) => word === 'nap' || 'PAN');

		expect(hasWord).toBeTruthy();
	});

	it('removes 2 set of anagram words', () => {
		const cleaned = aclean(['teachers', 'cheaters', 'ear', 'era', 'hectares']);

		expect(cleaned.length).toBe(2);

		const hasTeachersWord = cleaned.some(
			(word) => word === 'teachers' || 'cheaters' || 'hectares'
		);
		const hasEarWord = cleaned.some((word) => word === 'ear' || 'era');

		expect(hasTeachersWord && hasEarWord).toBeTruthy();
	});
});

//NOTE: 테스트 코드를 답변만 가지고 결과로 짤 필요가 있음. 지금은 또다른 로직을 내가 짜서 테스트.
