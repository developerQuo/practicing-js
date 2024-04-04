import { describe, expect, it } from '@jest/globals';
import unique from './unique';

describe('배열에서 중복 요소 제거하기', () => {
	it('deletes duplicate values', () => {
		let values = [
			'Hare',
			'Krishna',
			'Hare',
			'Krishna',
			'Krishna',
			'Krishna',
			'Hare',
			'Hare',
			':-O',
		];

		expect(hasUnique(values)).toBeTruthy();
	});

	it("doesn't have data type constraints", () => {
		let values = [
			true,
			'robin',
			32,
			{ apple: 1 },
			undefined,
			NaN,
			true,
			'robin',
			32,
			{ apple: 1 },
			undefined,
			NaN,
			'mutation',
		];

		expect(hasUnique(values)).toBeTruthy();
	});
});

function hasUnique(values: Array<any>) {
	return unique(values).every((cur, i, array) => {
		const snapshot = array.slice();
		snapshot.splice(i, 1);
		return !snapshot.includes(cur);
	});
}
