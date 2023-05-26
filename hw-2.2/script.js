//Задание 1//
let a = 10; 
alert(a); 
a = 20
alert(a); 

//Задание 2//
let year = 2007;
alert (`год выпуска первого iPhone - ${year}`);

//Задание 3//
let nameJS = ('Брендан Айком');
alert (`создатель языка JavaScript - ${nameJS}`);

//Задание 4//
let b = 10;
let c = 2;
alert (` сложение ${b + c}\n вычитание ${b - c}\n умножение ${b * c}\n частное ${b / c}`);

//Задание 5//

let d = 2;
alert (d ** 5 );

//Задание 6//
let f = 9;
let g = 2;
let result = f / g;
alert (result);

//Задание 7//
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

//Задание 8//
let age = Number (prompt ("Сколько вам лет?"));
alert (age);


// задание 9 //
const user = {name: `Oleg`, age: 37, isAdmin: true,};
//задание 9.1//
user [`city of residence`] = `Tver`;
//задание 9.2//
user.age = 38;
//задание 9.3//
delete user [`city of residence`];
//задание 9.4//
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert (user[info]);

//задание 10//
let userName = prompt (`Как тебя зовут?`);
alert (`Привет, ${userName}!`);
