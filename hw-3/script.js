// Задание 1

let password = 1234;

let user = prompt(`Введите пароль`);

if (password == user) {
    message = (`Пароль введен верно`);
} else {
    message = (`Пароль введен неправильно`);  
}

alert (message);

// Задание 2

let c = -3

if (c >= 0 && c <= 10) {
    alert (`Верно`);

} else {
    alert (`Не верно`);  
}

// Задание 3

let d = 111;
let e = 11;
(d>100 || e>100)? alert(`Верно`) : alert(`Не верно`);


// Задание 4

let a = 2;

let b = 3;

alert(a + b);

// Задание 5

let monthNumber = Number (prompt(`Введите номер месяца, чтоб узнать время года`))

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert(`Зима`);
        break;
    case 3:
    case 4:
    case 5:
        alert(`Весна`);
        break;
    case 6:
    case 7:
    case 8:
        alert(`Лето`);
        break;
    case 9:
    case 10:
    case 11:
        alert(`Осень`);
        break;
    default:
        alert(`Введенно не верное значение`)
        break;
}

// Задание 7

let number = Number (prompt(`Пожалуйста, введите любое число`));
if (Number.isNaN(+number)) {
    alert(`Вы ввели не число`);
} else {
    if (number % 2 === 0) {
        alert (`число чётное`);
    } else {
        alert (`число нечётное`);
    }
}

// Задание 8

let clientOS = Number (prompt(`Введите 0 если у вас iOS или 1 если у вас Android`));
if (clientOS === 0) {
    console.log (`Установите версию приложения для iOS по ссылке`);
} else if (clientOS === 1) {
    console.log (`Установите версию приложения для Android по ссылке`);
} else {
    console.log (`Неверное значение переменной clientOS`);
}

// Задание 9

let clientDeviceYear = Number (prompt(`Введите год выпуска телефона`));
if (clientOS === 0) {
    if (clientDeviceYear >= 2015) {
        console.log (`Установите версию приложения для iOS по ссылке`);
    } else {
        console.log (`Установите облегчённую версию приложения для iOS по ссылке`);
    }
} else if (clientOS === 1) {
    if (clientDeviceYear >= 2015) {
        console.log (`Установите версию приложения для Android по ссылке`);
    } else {
        console.log (`Установите облегчённую версию приложения для Androide по ссылке`);
    }
} else {
    console.log (`Неверное значение переменной clientOS`);
}