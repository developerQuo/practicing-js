import { describe, expect, it, jest } from '@jest/globals';

function work(a, b) {
	alert(a + b); // work is an arbitrary function or method
}

// 프로퍼티로 호출 횟수 저장.
// 저장 형태는 [arg1, arg2][]
describe('Spy decorator', () => {
	it('counts the number of function call', () => {});

	it('saves every call as an array of arguments', () => {});
});
