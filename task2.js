function sumOfTwoLowest(arr) {
    const sortedArr = arr.filter(num => num > 0).sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
}

console.log(sumOfTwoLowest([19, 5, 42, 2, 77]));