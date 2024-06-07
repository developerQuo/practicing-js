import { describe, expect, it, test } from '@jest/globals';
import calcRange, { sumSequence } from './sum-of-a-sequence';

/**
 * 쉽게 푸는 문제[https://www.acmicpc.net/problem/1292]
 * 동호는 내년에 초등학교를 입학한다. 그래서 동호 어머니는 수학 선행 학습을 위해 쉽게 푸는 문제를 동호에게 주었다.
 * 이 문제는 다음과 같다. 1을 한 번, 2를 두 번, 3을 세 번, 이런 식으로 1 2 2 3 3 3 4 4 4 4 5 ..
 * 이러한 수열을 만들고 어느 일정한 구간을 주면 그 구간의 합을 구하는 것이다.
 */
describe('쉽게 푸는 문제', () => {
	test('The number returns sum of a sequence', () => {
		expect(sumSequence(3)).toBe(5);

		expect(sumSequence(7)).toBe(18);
	});

	it('returns sums from x to y', () => {
		expect(calcRange(3, 7)).toBe(15);
	});
});
