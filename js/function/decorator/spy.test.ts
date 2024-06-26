import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { Spy, spy } from './spy';

// 프로퍼티로 호출 횟수 저장.
// 저장 형태는 [arg1, arg2][]
describe('Spy decorator', () => {
	let work: Spy;

	beforeEach(() => {
		work = function (a: number, b: number) {
			console.log(a + b);
			return a + b;
		};
	});

	it('counts the number of function call', () => {
		work = spy(work);

		work(1, 2); // 3
		work(4, 5); // 9

		expect(work.calls).toEqual([
			[1, 2],
			[4, 5],
		]);
	});

	it('saves every call as an array of arguments', () => {
		work = spy(work);

		work(1, 2); // 3
		work(4, 5); // 9

		expect(Array.isArray(work.calls)).toBeTruthy();
		expect(Array.isArray(work.calls![0])).toBeTruthy();
	});
});
