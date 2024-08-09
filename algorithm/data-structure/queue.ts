export function queue() {
	const q: number[] = [];

	const enqueue = (value: number) => q.unshift(value);

	const dequeue = () => q.pop();
	return { enqueue, dequeue };
}
