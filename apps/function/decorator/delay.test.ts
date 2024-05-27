import { beforeEach, describe, expect, it, jest } from '@jest/globals';

/**
 * f 함수 실행을 ms만큼 딜레이시킨다.
 * f 함수는 n개의 인수를 받을 수 있어야 하고, this 컨텍스트를 전달받아야 한다.
 */
describe('Delaying decorator', () => {
	let f;

	beforeEach(() => {
		f = function (x) {
			console.log(x);
		};
	});

	it('executes function after for ms', () => {});
});
