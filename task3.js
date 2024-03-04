function basicMathOperation(operation, val1, val2) {
    switch (operation) {
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val2 !== 0 ? val1 / val2 : 'Division by zero!';
        default:
            return 'Invalid operation!';
    }
}

console.log(basicMathOperation('+', 4, 7)); 
console.log(basicMathOperation('-', 15, 18)); 
console.log(basicMathOperation('*', 5, 5)); 
console.log(basicMathOperation('/', 49, 7));