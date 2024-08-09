import { expect, test } from '@jest/globals';
import { BinarySearchTree } from './bst';

test('bfs', () => {
	//      10
	//   5      21
	// 1     13    100
	const bst = new BinarySearchTree();
	bst.insert(10);
	bst.insert(5);
	bst.insert(21);
	bst.insert(13);
	bst.insert(1);
	bst.insert(100);

	expect(bst.bfs()).toEqual([10, 5, 21, 1, 13, 100]);
});
