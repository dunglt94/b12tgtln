let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let index = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
alert(`Max: ${max} at position ${index}`);