import { describe, expect, it } from '@jest/globals';
import { sortByAge } from './sort-obj-array';

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [pete, john, mary];

describe('나이를 기준으로 객체 정렬하기', () => {
	it('sorts array by age property', () => {
		expect(sortByAge(arr)).toEqual([john, mary, pete]);
	});
});
