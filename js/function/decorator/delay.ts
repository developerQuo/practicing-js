export const delay = function (f: Function, ms: number) {
	return function (_) {
		const timerId = setTimeout(() => {
			// arrow function을 써서 this와 arguments는 wrapper에서 온다.
			f.apply(this, arguments);
		}, ms);

		return () => {
			clearTimeout(timerId);
		};
	};
};
