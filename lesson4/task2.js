// Створіть змінну hour, яка містить випадкове значення від 0 до 23 (можете задати вручну або використати Math.floor(Math.random() * 24)).
// Використайте if...else if...else, щоб визначити та вивести у консоль повідомлення:
// Якщо година від 0 до 5 (включно) → "Good nigth!"
// Якщо година від 6 до 11 (включно) → "Good morning!"
// Якщо година від 12 до 17 (включно) → "Good day!"
// Якщо година від 18 до 23 (включно) → "Good evening!"



const hour = Math.floor(Math.random() * 24);


console.log(`Поточна година: ${hour}`);

// Перевіряємо час доби та виводимо відповідне привітання
if (hour >= 0 && hour <= 5) {
    console.log("Good night!");
} else if (hour >= 6 && hour <= 11) {
    console.log("Good morning!");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good day!");
} else {
    console.log("Good evening!");
}
