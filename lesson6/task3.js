// Створіть функцію createCounter(), яка повертає іншу функцію.
// Внутрішня функція:
// Має доступ до змінної count, яка починається з 0.
// При кожному виклику збільшує count на 1 та повертає його.
// Створіть змінну counter та присвойте їй виклик createCounter().
// Викличте counter() кілька разів і виведіть результат.



function createCounter() {
    let count = 0;
    return function() {
        return ++count;  
    };
}

let counter = createCounter();

console.log(counter());  
console.log(counter());  
console.log(counter());  
