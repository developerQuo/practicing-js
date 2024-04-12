import { beforeEach, describe, expect, it, test } from '@jest/globals';
import saveReadStatus, { Message } from './save-read-message';

describe("'읽음'상태인 메시지 저장하기", () => {
	let messages: Array<Message>;

	beforeEach(() => {
		messages = [
			{ text: 'Hello', from: 'John' },
			{ text: 'How goes?', from: 'John' },
			{ text: 'See you soon', from: 'Alice' },
		];
	});

	it('can save read status', () => {
		let readSet = saveReadStatus();

		readSet.add(messages[0]);

		expect(readSet.has(messages[0])).toBeTruthy();
		expect(readSet.has(messages[1])).toBeFalsy();
	});

	it.skip('is deleted along with message', () => {
		// 가비지 컬렉션에 의해 제거가 되었는지는 브라우저 개발자 도구나 node.js 환경이 아니면 불가능.
	});

	test('messages array have not property', () => {
		let propCheck: Array<boolean> = [];

		for (let key in messages) {
			propCheck.push(isNaN(+key));
		}

		expect(propCheck.some((check) => check)).toBeFalsy();

		propCheck = [];

		Object.assign(messages, { testProperty: 3 });
		for (let key in messages) {
			propCheck.push(isNaN(+key));
		}
		console.log(propCheck);
		expect(propCheck.some((check) => check)).toBeTruthy();
	});
});
