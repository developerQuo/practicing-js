import { describe, expect, it } from '@jest/globals';
import Calculator from './calculator';

describe('확장 가능한 계산기', () => {
	it('calculates string numbers', () => {
		let calc = new Calculator();

		expect(calc.calculate('3 + 7')).toBe(10);
		expect(calc.calculate('3 - 7')).toBe(-4);
		expect(calc.calculate('31 + 71')).toBe(102);
		expect(calc.calculate('3 - 7 - 1 + 4')).toBe(-1);

		//TODO: test failures - 방어 코드 짜기
		// expect(calc.calculate('3  +  7')).toBe(10);
		// expect(calc.calculate('3 + ')).toBe(3);
		// expect(calc.calculate('33 32')).toBe(3332);
		// expect(calc.calculate('3')).toBe(3);
	});

	it('extends function', () => {
		let powerCalc = new Calculator();
		//TODO: git stash pop
	});
});
