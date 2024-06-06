export type Spy = {
	(a: number, b: number): number;
	calls?: [number, number][];
};

export const spy = function (func: Function) {
	function wrapper() {
		// 실행 횟수 넣기
		wrapper.calls.push([...arguments]);
		// 함수 실행
		return func.apply(this, arguments);
	}

	wrapper.calls = [];

	return wrapper;
};
