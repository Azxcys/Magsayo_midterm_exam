function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 3, 6, 7, 8])); // Output: 15
