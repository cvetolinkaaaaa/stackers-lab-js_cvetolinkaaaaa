function increaseByIndex(arr) {
    return arr.map((num, index) => {
        let sum = num + index + 1;
        return sum % 10; 
    });
}

console.log(increaseByIndex([1, 2, 4])); 
console.log(increaseByIndex([4, 6, 9, 1, 3])); 