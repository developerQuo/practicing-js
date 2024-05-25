import { beforeEach, describe, expect, it, test } from '@jest/globals';
import { makeClosureCounter, makeNFECounter } from './counter';

describe('숫자 설정과 감소가 가능한 counter 만들기', () => {
	describe('named-function-expression', () => {
		it('returns number if counter function called', () => {
			let counter = makeNFECounter();

			expect(counter()).toBe(0);
			expect(counter()).toBe(1);
		});

		it('sets value by calling set property', () => {
			let counter = makeNFECounter();

			expect(counter.set(10)).toBe(10);
		});

		it('decrease counter 1 by calling decrease property', () => {
			let counter = makeNFECounter();

			expect(counter.decrease()).toBe(0);
			expect(counter.decrease()).toBe(-1);
		});
	});

	describe('closure', () => {
		it('returns number if counter function called', () => {
			let counter = makeClosureCounter();

			expect(counter()).toBe(0);
			expect(counter()).toBe(1);
		});

		it('sets value by calling set property', () => {});

		it('decrease counter 1 by calling decrease property', () => {});
	});
});
