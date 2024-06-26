import { describe, expect, it } from '@jest/globals';
import Calculator from './calculator';

describe('확장 가능한 계산기', () => {
	it('calculates string numbers', () => {
		let calc = new Calculator();

		expect(calc.calculate('3 + 7')).toBe(10);
		expect(calc.calculate('3 - 7')).toBe(-4);
		expect(calc.calculate('31 + 71')).toBe(102);
		expect(calc.calculate('3 - 7 - 1 + 4')).toBe(-1);
		expect(calc.calculate('3')).toBe(3);

		// must failing test
		// expect(calc.calculate('3  +  7')).toBe(10);
		// expect(calc.calculate('3 + ')).toBe(3);
		// expect(calc.calculate('33 32')).toBe(3332);
	});

	it('extends function', () => {
		let powerCalc = new Calculator();

		powerCalc.addMethod('*', (a, b) => a * b);
		powerCalc.addMethod('/', (a, b) => a / b);
		powerCalc.addMethod('**', (a, b) => a ** b);

		expect(powerCalc.calculate('2 ** 3')).toBe(8);
		expect(powerCalc.calculate('6 / 3')).toBe(2);

		// must failing test
		// powerCalc.addMethod('', (a, b) => a + b);
		// powerCalc.addMethod('*', (a, b) => a + b);
	});
});
