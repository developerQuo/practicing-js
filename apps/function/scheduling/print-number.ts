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
export function setTimerPrintNumbers(from: number, to: number) {}
