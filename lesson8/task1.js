// Створіть об'єкт calculator, який містить:
// Властивості:
// lastResult – останній обчислений результат (початкове значення null).
// operationsCount – лічильник виконаних операцій (початкове значення 0).
// Методи:
// add(a, b): повертає суму a + b та оновлює lastResult і operationsCount.
// subtract(a, b): повертає різницю a - b та оновлює lastResult і operationsCount.
// multiply(a, b): повертає добуток a * b та оновлює lastResult і operationsCount.
// divide(a, b): повертає результат a / b, якщо b !== 0, інакше "Помилка: ділення на нуль!". Також оновлює lastResult і operationsCount.
// reset(): скидає lastResult до null і operationsCount до 0.
// Використовуйте ці методи для виконання арифметичних операцій, виведіть результати у консоль та перевірте значення lastResult і operationsCount.




const calculator = {
    lastResult: null,
    operationsCount: 0,

    add: function(a, b) {
        this.lastResult = a + b;
        this.operationsCount++;
        return this.lastResult;
    },

    subtract: function(a, b) {
        this.lastResult = a - b;
        this.operationsCount++;
        return this.lastResult;
    },

    multiply: function(a, b) {
        this.lastResult = a * b;
        this.operationsCount++;
        return this.lastResult;
    },

    divide: function(a, b) {
        if (b !== 0) {
            this.lastResult = a / b;
            this.operationsCount++;
            return this.lastResult;
        } else {
            return "Помилка: ділення на нуль!";
        }
    },

    reset: function() {
        this.lastResult = null;
        this.operationsCount = 0;
    }
};


console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4)); 
console.log(calculator.multiply(2, 3));
console.log(calculator.divide(9, 3)); 
console.log(calculator.divide(9, 0)); // "Помилка: ділення на нуль!"

console.log(calculator.lastResult); 
console.log(calculator.operationsCount);
calculator.reset();
