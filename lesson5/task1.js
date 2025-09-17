// Створіть функцію, яка приймає два параметри: width і height та повертає площу прямокутника.
// Реалізуйте функцію трьома способами:
// Function Declaration
// Function Expression
// Arrow Function
// Викличте кожну функцію та виведіть результат у консоль.



// Function Declaration
function calculateAreaDeclaration(width, height) {
    return width * height;
}

// Function Expression
const calculateAreaExpression = function(width, height) {
    return width * height;
};

// Arrow Function
const calculateAreaArrow = (width, height) => width * height;


const width = 3;
const height = 7;

console.log(`Площа прямокутника (Function Declaration): ${calculateAreaDeclaration(width, height)}`);
console.log(`Площа прямокутника (Function Expression): ${calculateAreaExpression(width, height)}`);
console.log(`Площа прямокутника (Arrow Function): ${calculateAreaArrow(width, height)}`);