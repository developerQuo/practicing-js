import { describe, expect, it } from '@jest/globals';
import topSalary from './compare-salaries';

describe('최대 급여 계산하기', () => {
	it('returns the top earner', () => {
		let salaries = {
			John: 100,
			Pete: 300,
			Mary: 250,
		};

		expect(topSalary(salaries)).toBe('Pete');
	});

	it('returns null for empty salaries', () => {
		let salaries = {};

		expect(topSalary(salaries)).toBe(null);
	});
});
