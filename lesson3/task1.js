// Створіть програму, яка:
// Оголосить три змінні a, b, c та присвоїть їм будь-які числові значення.
// Використає арифметичні оператори (+, -, *, /, %, **) для виконання наступних операцій:
// Обчисліть суму a + b
// Обчисліть різницю b - c
// Обчисліть добуток a * c
// Обчисліть ділення b / a
// Отримайте залишок від ділення c % b
// Піднесіть a до степеня b


const a = 5;
const b = 3;
const c = 7;

const sum = a + b;
const difference = b - c;
const product = a * c;
const division = b / a;
const remainder = c % b;
const power = a ** b;


console.log(`Сума a + b = ${sum}`);
console.log(`Різниця b - c = ${difference}`);
console.log(`Добуток a * c = ${product}`);
console.log(`Ділення b / a = ${division}`);
console.log(`Залишок від ділення c % b = ${remainder}`);
console.log(`a в степені b (a ** b) = ${power}`);