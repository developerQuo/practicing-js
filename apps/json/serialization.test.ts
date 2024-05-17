import { describe, expect, it } from '@jest/globals';
import { deserialize, serialize } from './serialization';

let user = {
	name: 'John Smith',
	age: 35,
};

describe('객체를 JSON으로 바꾼 후 다시 객체로 바꾸기', () => {
	it('serializes an object to JSON', () => {
		expect(serialize(user)).toMatch(/\"name\":\"John Smith\"/g);
		expect(serialize(user)).toMatch(/\"age\":35/g);
	});

	it('deserializes a JSON to object', () => {
		expect(deserialize(serialize(user))).toStrictEqual({
			name: 'John Smith',
			age: 35,
		});
	});
});
