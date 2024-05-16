import { describe, expect, it } from '@jest/globals';
import getWeekDay from './week-days';

describe('요일 보여주기', () => {
	it('return week day from date', () => {
		let May16_2024 = new Date(2024, 5, 16);
		expect(getWeekDay(May16_2024)).toBe('TH');

		let May1_2024 = new Date(2024, 5, 11);
		expect(getWeekDay(May1_2024)).toBe('SA');
	});
});
