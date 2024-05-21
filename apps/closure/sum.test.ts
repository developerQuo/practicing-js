import { describe, expect, it } from '@jest/globals';
import sum from './sum';

describe('클로저를 이용하여 합 구하기', () => {
	it('sums two numbers', () => {
		expect(sum(1)(2)).toBe(3);
		expect(sum(5)(-1)).toBe(4);
	});

	it('rejects non numbers', () => {
		expect(() => sum(NaN)(2)).toThrow(new Error("There isn't number"));
		expect(() => sum(5)(1 / 0)).toThrowError("There isn't number");
	});

	it('uses a closure to remember state', () => {});
});

// NOTE: jest가 error를 탐지하기 위해서 익명함수가 실행할 함수를 감싸는 형태(() => f(n))로 인자를 넣어야 한다.
// 익명 함수로 감싸지 않으면, 에러 발생 시점에서 jest도 에러로 종료 될 수 있기 때문.
// 익명 함수로 감싸면, jest가 에러 발생 여부를 확인해서 안전하게 처리 가능.
