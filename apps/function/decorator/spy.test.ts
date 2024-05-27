import { describe, expect, it, jest } from '@jest/globals';
import { spy } from './spy';

// 프로퍼티로 호출 횟수 저장.
// 저장 형태는 [arg1, arg2][]
describe('Spy decorator', () => {
	it('counts the number of function call', () => {
		let work = function (a: number, b: number) {
			alert(a + b); // work is an arbitrary function or method
		};

		work = spy(work);

		work(1, 2); // 3
		work(4, 5); // 9

		expect(work.calls).toEqual([
			[1, 2],
			[4, 5],
		]);
	});

	it('saves every call as an array of arguments', () => {});
});
