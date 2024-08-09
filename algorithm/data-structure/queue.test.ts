import { expect, test } from '@jest/globals';
import { queue } from './queue';

test('queue', () => {
	const { enqueue, dequeue } = queue();

	enqueue(1);
	enqueue(2);
	enqueue(3);

	expect(dequeue()).toBe(1);
	expect(dequeue()).toBe(2);
	expect(dequeue()).toBe(3);
});
