import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import {
	List,
	forLoopReverseOrder,
	printListForLoop,
	printListRecursion,
	recursionReverseOrder,
} from './single-linked-list';

describe('단일 연결 리스트 출력하기', () => {
	let list: List;

	beforeEach(() => {
		list = {
			value: 1,
			next: {
				value: 2,
				next: {
					value: 3,
					next: {
						value: 4,
						next: null,
					},
				},
			},
		};

		console.log = jest.fn();
	});

	it('prints values one by one in order (for loop)', () => {
		printListForLoop(list);

		for (let value = 1; value < 5; value++) {
			expect(console.log).toHaveBeenCalledWith(value);
		}
		expect(console.log).toHaveBeenCalledTimes(4);
	});

	it('prints values one by one in order (recursion)', () => {
		printListRecursion(list);

		for (let value = 1; value < 5; value++) {
			expect(console.log).toHaveBeenCalledWith(value);
		}
		expect(console.log).toHaveBeenCalledTimes(4);
	});

	it('prints values one by one in reverse order (for loop)', () => {
		forLoopReverseOrder(list);

		for (let value = 1; value < 5; value++) {
			expect(console.log).toHaveBeenCalledWith(5 - value);
		}
		expect(console.log).toHaveBeenCalledTimes(4);
	});

	it('prints values one by one in reverse order (recursion)', () => {
		recursionReverseOrder(list);

		for (let value = 1; value < 5; value++) {
			expect(console.log).toHaveBeenCalledWith(5 - value);
		}
		expect(console.log).toHaveBeenCalledTimes(4);
	});
});
