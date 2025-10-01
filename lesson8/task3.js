// Створіть об'єкт person з такими властивостями:
// firstName
// lastName
// age
// Додайте до об'єкта властивість email.
// Видаліть властивість age.
// Виведіть оновлений об'єкт у консоль.


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

console.log(person);

person.email = 'john.doe@example.com';
delete person.age;

console.log(person);
