function filterRangeInPlace(arr: Array<number>, a: number, b: number){
    const removeList: Array<number> = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < a || arr[i] > b) {
            removeList.push(i)
        }
    }
    
    for (let i = arr.length - 1; i >= 0; i--){
        if (removeList.includes(i)){
            arr.splice(i, 1)
        }
    }
}

export default filterRangeInPlace;