import { describe, expect, it, jest } from '@jest/globals';
import {
	List,
	printListForLoop,
	printListRecursion,
} from './single-linked-list';

jest.mock('console');

let list: List = {
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

describe('단일 연결 리스트 출력하기', () => {
	it('prints values one by one in order (for loop)', () => {
		printListForLoop(list);

		expect(console.log).toHaveBeenCalledTimes(4);
		expect(console.log).toHaveBeenCalledWith(1);
		expect(console.log).toHaveBeenCalledWith(2);
		expect(console.log).toHaveBeenCalledWith(3);
		expect(console.log).toHaveBeenCalledWith(4);
	});

	it('prints values one by one in order (recursion)', () => {
		printListRecursion(list);

		expect(console.log).toHaveBeenCalledTimes(4);
		expect(console.log).toHaveBeenCalledWith(1);
		expect(console.log).toHaveBeenCalledWith(2);
		expect(console.log).toHaveBeenCalledWith(3);
		expect(console.log).toHaveBeenCalledWith(4);
	});
});
