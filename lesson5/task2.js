// Створіть функцію checkOrder, яка приймає два параметри:
// available (кількість товарів на складі)
// ordered (кількість товарів у замовленні)
// Функція повертає:
// "Your order is too large, we don’t have enough goods." — якщо ordered більше available
// "Your order is empty" — якщо ordered дорівнює 0
// "Your order is accepted" — якщо товару достатньо
// Викличте функцію з різними значеннями available та ordered, виведіть результат у консоль.



function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don't have enough goods.";
    } else {
        return "Your order is accepted";
    }
}

console.log("Test 1:", checkOrder(100, 50));  // Достатньо товару
console.log("Test 2:", checkOrder(100, 150)); // Замовлення завелике
console.log("Test 3:", checkOrder(100, 0));   // Пусте замовлення