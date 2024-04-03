const numbers = [90, 500, 20, 195, 80, 25, 3];
let largest = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number in the array is:", largest);
