// Створіть функцію generatePassword, яка:
// Приймає один параметр length (довжина пароля).
// Генерує випадковий пароль, що складається з:
// Великих та малих літер (A-Z, a-z)
// Цифр (0-9)
// Повертає цей пароль у вигляді рядка.
// Викличте функцію з аргументом 8, виведіть згенерований пароль у консоль.



function generatePassword(length) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const allChars = upperChars + lowerChars + numbers;
    
    let password = '';
    
    // Додаємо мінімум по одному символу кожного типу для гарантії складності
    password += upperChars[Math.floor(Math.random() * upperChars.length)];
    password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    
    // Додаємо решту символів
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Перемішуємо символи у паролі
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    return password;
}

// Тестуємо функцію з довжиною 8 символів
console.log("Згенерований пароль:", generatePassword(8));