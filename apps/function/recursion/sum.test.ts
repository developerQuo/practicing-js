import { describe, expect, test } from '@jest/globals';
import { sumForLoop } from './sum';

describe('주어진 숫자까지의 모든 숫자 더하기', () => {
	describe('it sums numbers', () => {
		test('for loop', () => {
			expect(sumForLoop(5)).toBe(15);
			expect(sumForLoop(1)).toBe(1);
			expect(sumForLoop(10_000)).toBe(50005000);
		});
		test('recursion', () => {});
		test('등차수열 공식', () => {});
	});
});
