// Створіть масив чисел
// Використовуючи reduce, обчисліть суму всіх елементів масиву.
// Виведіть отриману суму у консоль.


const numbers = [3, -1, 0, 4, -5, 0, 0, 0, 0, 7, -2, 0, -9, 0,10]; 

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Виводимо результат у консоль
console.log(`Сума всіх елементів масиву: ${sum}`);
