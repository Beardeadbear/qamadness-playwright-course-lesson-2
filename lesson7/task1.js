
// Створіть масив чисел:
// Використовуючи цикл for, підрахуйте кількість:
// Позитивних чисел
// Негативних чисел
// Нулів
// Виведіть результат у консоль у такому форматі:

// Positive Numbers: X
// Negative Numbers: Y
// 0 Numbers: Z

const numbers = [3, -1, 0, 4, -5, 0, 0, 0, 0, 7, -2, 0, -9, 0,10]; 

let positiveCount = [];
let negativeCount = [];
let zeroCount = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

// Виводимо результат у консоль у такому форматі:
console.log(`Позитивних чисел: ${positiveCount}`);
console.log(`Негативних чисел: ${negativeCount}`);
console.log(`Нулів: ${zeroCount}`);
