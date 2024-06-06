import { describe, expect, it } from '@jest/globals';
import getLocalDay from './europe-calendar';

describe('유럽 기준 달력', () => {
	it('return week day index from date', () => {
		let May16_2024 = new Date(2024, 5 - 1, 16);
		expect(getLocalDay(May16_2024)).toBe(4);

		let May1_2024 = new Date(2024, 5 - 1, 11);
		expect(getLocalDay(May1_2024)).toBe(6);
	});
});
