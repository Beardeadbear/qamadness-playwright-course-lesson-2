// Напишіть функцію delayedLog, яка приймає:
// message (рядок) — текст, який потрібно вивести.
// delay (число) — кількість мілісекунд, через які виводиться текст.
// Функція повинна повертати Promise, який:
// Використовує setTimeout для затримки.
// Розрішується після закінчення delay, виводячи message у консоль.
// Викличте delayedLog("Привіт, світ!", 2000) із then, щоб перевірити, що повідомлення з’явиться через 2 секунди.


// Функція delayedLog, яка приймає message та delay
function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Викликаємо delayedLog з then для перевірки
console.log("Початок очікування...");
delayedLog("Привіт, світ!", 2000)
    .then(() => {
        console.log("Повідомлення виведено через 2 секунди!");
    });

