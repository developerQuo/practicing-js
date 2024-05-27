import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { delay } from './delay';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
/**
 * f 함수 실행을 ms만큼 딜레이시킨다.
 * f 함수는 n개의 인수를 받을 수 있어야 하고, this 컨텍스트를 전달받아야 한다.
 */
describe('Delaying decorator', () => {
	let f;

	beforeEach(() => {
		f = function (x) {
			console.log(x);
		};
	});

	it('executes function after for ms', () => {
		console.log = jest.fn();

		let f1000 = delay(f, 1000);
		f1000('f1000');
		let f1500 = delay(f, 1500);
		f1500('f1500');

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
		expect(console.log).toHaveBeenCalledTimes(1);
		expect(console.log).toHaveBeenCalledWith('f1000');

		jest.runOnlyPendingTimers();

		expect(setTimeout).toHaveBeenCalledTimes(2);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);
		expect(console.log).toHaveBeenCalledTimes(2);
		expect(console.log).toHaveBeenCalledWith('f1500');
	});
});
