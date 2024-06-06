import { describe, expect, it } from '@jest/globals';
import saveReadLog, { Message } from './read-log';

let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' },
];

describe('읽은 날짜 저장하기', () => {
	it('has read date logs', () => {
		let readDate: WeakMap<Message, Date> = saveReadLog(messages[0]);

		expect(readDate.has(messages[0])).toBeTruthy();

		expect(toString(readDate.get(messages[0]))).toBe(toString(new Date()));
	});
});

function toString(date: Date | undefined) {
	if (!date) throw Error('no date');
	return date.toLocaleDateString();
}
