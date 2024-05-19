import { describe, expect, it } from '@jest/globals';
import { fib } from './fibonacci';

describe('피보나치 수 계산하기', () => {
	it('returns the correct fibonacci number for a given input', () => {
		expect(fib(3)).toBe(2);
		expect(fib(7)).toBe(13);
		expect(fib(77)).toBe(5527939700884757);
	});

	it('completes within 1 second', () => {});
});