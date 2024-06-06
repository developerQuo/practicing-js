import { describe, expect, it } from '@jest/globals';
import getShortestDistance, { getAxisDistance } from './escape-rectangular';

/**
 * 직사각형에서 탈출[https://www.acmicpc.net/problem/1085]
 *
 * 한수는 지금 (x, y)에 있다.
 * 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다.
 * 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.
 */
describe('직사각형에서 탈출', () => {
	it('returns 2 distance', () => {
		expect(getAxisDistance(6, 10)).toContain(6);
		expect(getAxisDistance(6, 10)).toContain(4);

		expect(getAxisDistance(375, 1000)).toContain(375);
		expect(getAxisDistance(375, 1000)).toContain(625);
	});

	it('최소 거리 구하기', () => {
		expect(getShortestDistance(6, 2, 10, 3)).toBe(1);

		expect(getShortestDistance(1, 1, 5, 5)).toBe(1);

		expect(getShortestDistance(653, 375, 1000, 1000)).toBe(347);

		expect(getShortestDistance(161, 181, 762, 375)).toBe(161);
	});
});
