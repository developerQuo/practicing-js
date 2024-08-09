export function queue() {
	const q: any[] = [];

	const enqueue = (value: any) => q.unshift(value);

	const dequeue = () => q.pop();

	const getLength = () => q.length;
	return { enqueue, dequeue, getLength };
}
