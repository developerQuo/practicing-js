export default class Calculator {
	constructor() {}

	calculate(stringFormula: string): number {
		const formulaElements = stringFormula.split(' ');

		if (formulaElements.some((el) => el !== '0' && !Boolean(el))) {
			throw Error('There were empty string or undefined or null');
		}

		return formulaElements.reduce((total, stringValue, index, formulaArray) => {
			// console.log(formulaArray);
			if (index === 0) return +stringValue;

			let result = total;

			if (isNaN(+stringValue)) {
				switch (stringValue) {
					case '+':
						result = this.add(total, +formulaArray[index + 1]);
						break;
					case '-':
						result = this.substract(total, +formulaArray[index + 1]);
						break;
				}
			}
			// console.log(result);
			return result;
		}, 0);
	}

	add(firstNumber, secondNumber) {
		return firstNumber + secondNumber;
	}

	substract(firstNumber, secondNumber) {
		return firstNumber - secondNumber;
	}

	addMethod(name: string, func: (a: number, b: number) => number): void {}
}
