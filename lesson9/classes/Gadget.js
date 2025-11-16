// Клас Gadget з базовими властивостями та методами
class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this._year = year; // Використовуємо _year для геттера/сеттера
    }

    // Метод для отримання повної інформації про гаджет
    getInfo() {
        return `${this.brand} ${this.model} (${this._year})`;
    }

    // Геттер для year
    get year() {
        return this._year;
    }

    // Сеттер для year з валідацією
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value === 'number' && value >= 2000 && value <= currentYear) {
            this._year = value;
        } else {
            console.log("Помилка: некоректний рік");
        }
    }

    // Статичний метод для знаходження найстарішого гаджета
    static getOldestGadget(gadgetsArray) {
        if (!gadgetsArray || gadgetsArray.length === 0) {
            return null;
        }
        
        return gadgetsArray.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

export default Gadget;
