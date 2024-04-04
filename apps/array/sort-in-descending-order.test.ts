import { describe, expect, it } from '@jest/globals';
import sortDescendingOrder from './sort-in-descending-order';

describe('내림차순으로 정렬하기', () => {
    it('is greater than(or equal) left element', ()=> {
        let arr = [1, 2, 0, -10, 8, -2];
        let sortedArr = sortDescendingOrder(arr);
        sortedArr.forEach((cur, i, array) => {
            if (i){
            expect(cur).toBeGreaterThanOrEqual(array[i])
            }
        })
    })
})