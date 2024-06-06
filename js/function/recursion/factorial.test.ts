import { describe, expect, it } from '@jest/globals';
import { factorial } from './factorial';

describe('팩토리얼 계산하기', () => {
	it('calculates the product of all numbers from 1 to n', () => {
		expect(factorial(1)).toBe(1);
		expect(factorial(2)).toBe(2);
		expect(factorial(3)).toBe(6);
		expect(factorial(4)).toBe(24);
		expect(factorial(5)).toBe(120);
	});
});
