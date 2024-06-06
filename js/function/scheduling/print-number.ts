// setInterval
export function setIntervalPrintNumbers(from: number, to: number) {
	let current = from;

	let timerId = setInterval(() => {
		console.log(current);

		if (current === to) clearInterval(timerId);
		current++;
	}, 1000);
}

// setTimer
export function setTimerPrintNumbers(from: number, to: number) {
	let current = from;

	const timerId = setTimeout(function timer() {
		console.log(current);

		if (current !== to) {
			current++;
			setTimeout(timer, 1000);
		}
	}, 1000);

	return () => {
		if (timerId) {
			clearTimeout(timerId);
		}
	};
}
