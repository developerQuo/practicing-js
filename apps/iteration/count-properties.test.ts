import { describe, expect, it } from '@jest/globals';
import count from './count-properties';

describe('프로퍼티 값 더하기', () => {
	it('count properties in object', () => {
		expect(
			count({
				John: 100,
				Pete: 400,
				Mary: 250,
				Alice: 150,
				Bob: 200,
			})
		).toBe(5);

		expect(
			count({
				a: 1,
				b: 2,
				c: -4,
			})
		).toBe(3);
	});

	it('returns 0 for empty object', () => {});
});
