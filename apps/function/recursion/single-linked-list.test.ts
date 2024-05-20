import { describe, expect, it } from '@jest/globals';
import { List } from './single-linked-list';

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
	it('prints values one by one in order', () => {});
});
