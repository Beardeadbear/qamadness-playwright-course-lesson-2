import Gadget from './Gadget.js';

// Клас Smartphone, який успадковує Gadget
class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this._operatingSystem = operatingSystem; // Використовуємо _operatingSystem для геттера/сеттера
    }

    // Перевизначений метод getInfo() з урахуванням операційної системи
    getInfo() {
        return `${this.brand} ${this.model} (${this._year}) - ${this._operatingSystem}`;
    }

    // Геттер для operatingSystem
    get operatingSystem() {
        return this._operatingSystem;
    }

    // Сеттер для operatingSystem з валідацією
    set operatingSystem(value) {
        const allowedOS = ["iOS", "Android", "HarmonyOS"];
        if (allowedOS.includes(value)) {
            this._operatingSystem = value;
        } else {
            console.log("Помилка: недоступна операційна система");
        }
    }
}

export default Smartphone;
