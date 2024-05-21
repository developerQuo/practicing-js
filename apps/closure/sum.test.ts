import { describe, expect, it } from '@jest/globals';
import sum from './sum';

describe('클로저를 이용하여 합 구하기', () => {
	it('sums two numbers', () => {
		expect(sum(1)(2)).toBe(3);
		expect(sum(5)(-1)).toBe(4);
	});

	it('rejects non numbers', () => {});

	it('uses a closure to remember state', () => {});
});
