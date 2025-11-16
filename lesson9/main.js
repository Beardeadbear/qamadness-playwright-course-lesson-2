import Gadget from './classes/Gadget.js';
import Smartphone from './classes/Smartphone.js';

console.log("=== Завдання 1: Створення класів та об'єктів ===\n");

// Створюємо екземпляри класу Gadget
const laptop = new Gadget("Dell", "XPS 13", 2023);
const tablet = new Gadget("Apple", "iPad Pro", 2022);

// Створюємо екземпляри класу Smartphone
const phone1 = new Smartphone("Apple", "iPhone 15", 2023, "iOS");
const phone2 = new Smartphone("Samsung", "Galaxy S24", 2024, "Android");
const phone3 = new Smartphone("Huawei", "P60 Pro", 2023, "HarmonyOS");

// Викликаємо getInfo() для кожного об'єкта
console.log("Gadget об'єкти:");
console.log(laptop.getInfo());
console.log(tablet.getInfo());

console.log("\nSmartphone об'єкти:");
console.log(phone1.getInfo());
console.log(phone2.getInfo());
console.log(phone3.getInfo());

console.log("\n=== Завдання 2: Геттери та сеттери ===\n");

// Тестуємо геттер та сеттер для year у Gadget
console.log("Тестування year у Gadget:");
console.log("Поточний рік laptop:", laptop.year);
laptop.year = 2024; // Валідне значення
console.log("Після зміни на 2024:", laptop.year);
laptop.year = 1999; // Невалідне значення (менше 2000)
console.log("Після спроби встановити 1999:", laptop.year);
laptop.year = 2030; // Невалідне значення (більше поточного року)
console.log("Після спроби встановити 2030:", laptop.year);

// Тестуємо геттер та сеттер для operatingSystem у Smartphone
console.log("\nТестування operatingSystem у Smartphone:");
console.log("Поточна ОС phone1:", phone1.operatingSystem);
phone1.operatingSystem = "Android"; // Валідне значення
console.log("Після зміни на Android:", phone1.operatingSystem);
phone1.operatingSystem = "Windows"; // Невалідне значення
console.log("Після спроби встановити Windows:", phone1.operatingSystem);

console.log("\n=== Завдання 3: Статичний метод getOldestGadget ===\n");

// Створюємо масив гаджетів різних років
const gadgets = [
    new Gadget("Sony", "Walkman", 2005),
    new Smartphone("Nokia", "3310", 2000, "Android"),
    new Gadget("Apple", "iPod", 2001),
    new Smartphone("BlackBerry", "Bold", 2008, "Android"),
    new Gadget("Microsoft", "Zune", 2006)
];

console.log("Масив гаджетів:");
gadgets.forEach((gadget, index) => {
    console.log(`${index + 1}. ${gadget.getInfo()}`);
});

// Викликаємо статичний метод для знаходження найстарішого гаджета
const oldestGadget = Gadget.getOldestGadget(gadgets);
console.log("\nНайстаріший гаджет:");
console.log(oldestGadget.getInfo());
