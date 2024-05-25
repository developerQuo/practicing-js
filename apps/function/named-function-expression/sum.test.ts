import { describe, expect, test } from '@jest/globals';
import { sum } from './sum';

describe('임의의 수만큼 있는 괄호를 이용해 합계 구하기', () => {
	describe('sums all of numbers that chained parameter', () => {
		test('positive', () => {
			expect(String(sum(1))).toBe('1');
			expect(String(sum(1)(2))).toBe('3');
			expect(String(sum(1)(2)(3))).toBe('6');
		});

		test('negative', () => {});

		test('zero', () => {});
	});
});
