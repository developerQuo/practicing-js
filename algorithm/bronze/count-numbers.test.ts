import { describe, expect, it, jest, test } from '@jest/globals';
import countNumbers, { countDigit } from './count-numbers';

/**
 * 숫자의 개수 [https://www.acmicpc.net/problem/2577]
 * 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에
 * 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
 *
 * 예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고,
 * 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
 *
 * 첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.
 */
describe('숫자의 개수', () => {
	it('counts digit within number', () => {
		expect(countDigit(111332, 1)).toBe(3);

		expect(countDigit(148032, 0)).toBe(1);
	});

	it('returns the count array of numbers from 0 to 9', () => {
		console.log = jest.fn();

		expect(countNumbers(150, 266, 427)).toEqual([3, 1, 0, 2, 0, 0, 0, 2, 0, 0]);
	});
});
