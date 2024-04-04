import { beforeEach, describe, expect, it, test } from "@jest/globals";
import copySorted from "./copy-sorted";

describe('배열 복사본을 정렬하기', () => {
    let arr: Array<string>;

    beforeEach(() => {
        arr = ["React", "Java", "Dart", "Python"];
    })

    it('sorts array in ascending order', () => {
        let sorted = copySorted(arr);
        sorted.forEach((cur, i, array) => {
            if (i) {
                let result = cur >= array[i - 1]
                expect(result).toBeTruthy()
            }
        })
    })

    test('original array must not be changed', () => {
        const snapshot = arr.slice()
        copySorted(arr)
        const isMatched = snapshot.every((cur, i) => cur === arr[i])
        expect(isMatched).toBeTruthy()
        expect(snapshot.length === arr.length).toBeTruthy()
    })
})