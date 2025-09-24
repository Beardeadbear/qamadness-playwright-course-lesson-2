// Створіть функцію handleNum, яка приймає три параметри:
// num (число)
// handleEven (функція, яка викликається, якщо число парне)
// handleOdd (функція, яка викликається, якщо число непарне)
// Створіть дві функції:
// handleEven → Виводить "Number is even" у консоль.
// handleOdd → Виводить "Number is odd" у консоль.
// Викличте handleNum з довільним числом та передайте дві створені функції.



function handleEven() {
    console.log("Number is even");
}

function handleOdd() {
    console.log("Number is odd");
}


function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}


// Тестуємо функцію з різними числами
handleNum(28, handleEven, handleOdd);  // виведе "Number is even"
handleNum(13, handleEven, handleOdd);  // виведе "Number is odd"