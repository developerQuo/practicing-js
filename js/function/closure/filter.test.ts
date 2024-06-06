import { describe, expect, it } from '@jest/globals';
import { inArray, isBetween } from './filter';

describe('함수를 이용해 원하는 값만 걸러내기', () => {
	describe('in between function', () => {
		it('returns numbers between a and b', () => {
			let arr = [1, 2, 3, 4, 5, 6, 7];

			let between3to6 = arr.filter(isBetween(3, 6));

			expect(between3to6).toEqual([3, 4, 5, 6]);

			let between1to3 = arr.filter(isBetween(1, 3));

			expect(between1to3).toEqual([1, 2, 3]);
		});
	});

	describe('in array function', () => {
		it('returns numbers matching in array', () => {
			let arr = [1, 2, 3, 4, 5, 6, 7];

			let numbers1_2_10 = arr.filter(inArray([1, 2, 10]));

			expect(numbers1_2_10).toEqual([1, 2]);

			let emptyList = arr.filter(inArray([]));

			expect(emptyList).toEqual([]);
		});
	});
});
