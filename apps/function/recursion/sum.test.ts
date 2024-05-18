import { describe, expect, test } from '@jest/globals';
import { sumAP, sumForLoop, sumRecursion } from './sum';

describe('주어진 숫자까지의 모든 숫자 더하기', () => {
	describe('it sums numbers', () => {
		test('for loop', () => {
			testSumTo(sumForLoop);
		});
		test('recursion', () => {
			testSumTo(sumRecursion);
		});
		test('등차수열 공식', () => {
			testSumTo(sumAP);
		});
	});
});

function testSumTo(calculator: (num: number) => number) {
	expect(calculator(5)).toBe(15);
	expect(calculator(1)).toBe(1);
	expect(calculator(10_000)).toBe(50005000);
}
