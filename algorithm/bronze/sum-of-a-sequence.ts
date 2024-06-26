export default function calcRange(rangeX: number, rangeY: number) {
	return sumSequence(rangeY) - sumSequence(rangeX - 1);
}

export function sumSequence(num: number) {
	const sequence: number[] = [];
	for (let i = 0; i < num; i++) {
		const lastIndex = sequence.length - 1;
		const lastIndexCount = sequence[lastIndex];
		if (lastIndexCount < lastIndex + 1) {
			sequence.splice(lastIndex, 1, lastIndexCount + 1);
		} else {
			sequence.push(1);
		}
	}

	return sequence.reduce((sum, count, index) => {
		const value = index + 1;
		sum += value * count;
		return sum;
	}, 0);
}
