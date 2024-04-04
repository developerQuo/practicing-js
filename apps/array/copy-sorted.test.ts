import { describe, expect, it } from "@jest/globals";
import copySorted from "./copy-sorted";

describe('배열 복사본을 정렬하기', () => {
    it('sorts array in ascending order', () => {
        let arr = ["React", "Java", "Dart", "Python"];
        let sorted = copySorted(arr);
        sorted.forEach((cur, i, array) => {
            if (i) {
                let result = cur >= array[i - 1]
                expect(result).toBeTruthy()
            }
        })
    })

    it('must not be changed', () => {
        
    })
})