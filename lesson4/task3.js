// Оголосіть змінну dayNumber, яка містить випадкове значення від 1 до 7 (наприклад, 1 - понеділок, 2 - вівторок і т.д.).
// Використайте switch/case, щоб вивести відповідний день тижня в консоль.
// Якщо dayNumber не від 1 до 7, виведіть "Incorrect value".




const dayNumber = Math.floor(Math.random() * 7) + 1;


console.log(`Номер дня: ${dayNumber}`);

// Визначаємо день тижня за допомогою switch
switch (dayNumber) {
    case 1:
        console.log("Понеділок");
        break;
    case 2:
        console.log("Вівторок");
        break;
    case 3:
        console.log("Середа");
        break;
    case 4:
        console.log("Четвер");
        break;
    case 5:
        console.log("П'ятниця");
        break;
    case 6:
        console.log("Субота");
        break;
    case 7:
        console.log("Неділя");
        break;
    default:
        console.log("Incorrect value");
}
