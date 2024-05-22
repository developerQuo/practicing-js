import { beforeEach, describe, expect, it } from '@jest/globals';
import { Users, byField } from './sort';

describe('필드를 기준으로 정렬하기', () => {
	let users: Users;

	beforeEach(() => {
		users = [
			{ name: 'John', age: 20, surname: 'Johnson' },
			{ name: 'Pete', age: 18, surname: 'Peterson' },
			{ name: 'Ann', age: 19, surname: 'Hathaway' },
		];
	});

	it('sorts array by name field', () => {
		const sorted = users.sort(byField('name'));

		expect(sorted).toEqual([
			{ name: 'Ann', age: 19, surname: 'Hathaway' },
			{ name: 'John', age: 20, surname: 'Johnson' },
			{ name: 'Pete', age: 18, surname: 'Peterson' },
		]);
	});

	it('sorts array by name field', () => {
		const sorted = users.sort(byField('age'));

		expect(sorted).toEqual([
			{ name: 'Pete', age: 18, surname: 'Peterson' },
			{ name: 'Ann', age: 19, surname: 'Hathaway' },
			{ name: 'John', age: 20, surname: 'Johnson' },
		]);
	});
});
