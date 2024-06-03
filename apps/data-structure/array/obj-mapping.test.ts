import { describe, expect, it } from '@jest/globals';
import { userMapper } from './obj-mapping';

let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

describe('객체 매핑하기', () => {
	it('returns objects that have fullName property', () => {
		expect(userMapper(users)).toEqual([
			{ fullName: 'John Smith', id: 1 },
			{ fullName: 'Pete Hunt', id: 2 },
			{ fullName: 'Mary Key', id: 3 },
		]);
	});
});
