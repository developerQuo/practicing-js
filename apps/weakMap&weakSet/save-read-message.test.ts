import { describe, expect, it, test } from '@jest/globals';
import saveReadStatus from './save-read-message';

let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' },
];

describe("'읽음'상태인 메시지 저장하기", () => {
	it('can save read status', () => {
		let readSet = saveReadStatus();

		readSet.add(messages[0]);

		expect(readSet.has(messages[0])).toBeTruthy();
		expect(readSet.has(messages[1])).toBeFalsy();
	});

	it('is deleted along with message', () => {});

	test('messages array have not property', () => {});
});
