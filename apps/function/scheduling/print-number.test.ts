import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { setIntervalPrintNumbers } from './print-number';

jest.useFakeTimers();
jest.spyOn(global, 'setInterval');
jest.spyOn(global, 'setTimeout');

describe('일 초 간격으로 숫자 출력하기', () => {
	beforeEach(() => {
		console.log = jest.fn();
	});

	it('prints numbers at one-second intervals (setInterval)', () => {
		setIntervalPrintNumbers(2, 4);

		jest.advanceTimersByTime(4000);

		expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);
		expect(setInterval).toHaveBeenCalledTimes(1);

		expect(console.log).toHaveBeenCalledWith(2);
		expect(console.log).toHaveBeenCalledWith(3);
		expect(console.log).toHaveBeenCalledWith(4);
	});

	it('prints numbers at one-second intervals (setTimer)', () => {});
});
