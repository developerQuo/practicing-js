export default class Calculator {
	private METHOD_PREFIX = 'func';

	constructor() {
		this.addMethod('+', (a, b) => a + b);
		this.addMethod('-', (a, b) => a - b);
	}

	calculate(stringFormula: string): number {
		const formulaElements = stringFormula.split(' ');

		if (formulaElements.some((el) => el !== '0' && !Boolean(el))) {
			throw Error('There are empty string or undefined or null');
		}
		if (formulaElements.some((el, index) => index % 2 && +el)) {
			throw Error('Only mathmatical operators are allowed between numbers');
		}

		return formulaElements.reduce((total, stringValue, index, formulaArray) => {
			if (index === 0) return +stringValue;

			let result = total;

			if (isNaN(+stringValue)) {
				result = this[`${this.METHOD_PREFIX}${stringValue}`](
					total,
					+formulaArray[index + 1]
				);
			}
			return result;
		}, 0);
	}

	addMethod(name: string, func: (a: number, b: number) => number): void {
		const methodName = `${this.METHOD_PREFIX}${name}`;
		if (name === '') {
			throw Error('There is empty string');
		}
		if (this[methodName] !== undefined) {
			throw Error('Already exists same name');
		}

		this[methodName] = func;
	}
}
// TODO: refactoring
