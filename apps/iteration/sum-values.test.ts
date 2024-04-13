import { beforeEach, describe, expect, it, test } from '@jest/globals';
import sumSalaries from './sum-values';

describe('프로퍼티 값 더하기', () => {
	it('return sum of values in object', () => {
		expect(
			sumSalaries({
				John: 100,
				Pete: 400,
				Mary: 250,
				Alice: 150,
				Bob: 200,
			})
		).toBe(1100);

		expect(
			sumSalaries({
				a: 1,
				b: 2,
				c: -4,
			})
		).toBe(-1);
	});

	it('returns 0 for empty object', () => {
		expect(sumSalaries({})).toBe(0);
	});
});
