import {beforeEach, describe, expect, it, test} from '@jest/globals';
import filterRangeInPlace from './filter-range-in-place';

describe('특정 범위에 속하는 요소 찾기(배열 변경하기)', () => {
    let arr: Array<number>;

    beforeEach(() => {
        arr = [2, 4, 8, 13, 5, 9]
    })

    it('deletes elements that they are out of range', () => {
        filterRangeInPlace(arr, 4, 11)
        expect(arr).not.toContain(2)
        expect(arr).not.toContain(13)
    })

    test('elements are between number a and number b', () => {
        filterRangeInPlace(arr, 4, 11)
        arr.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(4)
            expect(num).toBeLessThanOrEqual(11)
        })
    })

    it("doesn't return anything else", () => {
        filterRangeInPlace(arr, 4, 11) 
        expect(arr).toBeUndefined; 
    })
})  