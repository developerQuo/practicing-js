import { describe, expect, it, test } from '@jest/globals';
import { makeNameList } from './prop-mapping';

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

describe('이름 매핑하기', () => {
	it('returns name property list', () => {
		expect(makeNameList(users)).toEqual(['John', 'Pete', 'Mary']);
	});
});
