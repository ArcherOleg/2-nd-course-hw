// //Задание 1

// function getSmallerNumber(a, b){
//     if(a === b) {
//         return a;
//     }

//     if(a < b){
//         return a;
//     }else{
//         return b;
//     }
// }

// console.log(getSmallerNumber(8, 4));
// console.log(getSmallerNumber(6, 6));

// //Задание 2

// function evenOrOdd(number) {
//     return number % 2 == 0 ? `Odd` : `Even`
// }

// console.log(evenOrOdd(5));
// console.log(evenOrOdd(4));

// //Задание 3

// //3.1

// function square(num){
//     console.log(num ** 2);
//   }

//   console.log(square(3));
//   console.log(square(5));

// // //3.2

// function square(num){
//     return num * num;
// }

// console.log(square(5));
// console.log(square(3));

// //Задание 4

// function userAge() {
//     let age=prompt(`Сколько Вам лет?`);

//     if(age < 0){
//         return `Вы ввели неправильное значение`;
//     }else if(age <= 12){
//         return `Привет,друг!`;
//     }else{
//         return `Добро пожаловать!`;
//     }
// }

// alert(userAge());

// //Задание 5

// function multyply(a, b){
//     if(isNaN(a) || isNaN(b)){
//         return `Одно или оба значения не являются числом`;
//     }else{
//         return a * b;
//     }
// }

// console.log(multyply(5, 4));
// console.log(multyply('h', 4));
// console.log(multyply('y', 'e'));

// //Задание 6

// function cubeNumber() {
//     const number = prompt('Введите число:', '');

//     if (isNaN(number)) {
//       return 'Переданный параметр не является числом';
//     } else {
//       const result = number ** 3;
//       return `${number} в кубе равняется ${result}`;
//     }
// }

// alert(cubeNumber());

// //Задание 7

// const circle1 = {
//   radius: 5,
//   getArea: function() {
//     return Math.PI * this.radius ** 2;
//   },
//   getPerimetr: function() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// const circle2 = {
//   radius: 10,
//   getArea: function() {
//     return Math.PI * this.radius ** 2;
//   },
//   getPerimetr: function() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// console.log(circle1.getArea()); //78.53981633974483
// console.log(circle1.getPerimetr());//31.41592653589793
// console.log(circle2.getArea());//314.1592653589793
// console.log(circle2.getPerimetr());//62.83185307179586

//Задание 8

let a = prompt('Введите число');

function findSeason(a) {
  if (isNaN(a) || a <= 0 || a >= 13) {
    do { alert ('Такого месяца не существует, попробуйте ещё раз');
  } while (isNaN(a) || a <= 0 || a >= 13);
  }

  if (a === 1 || a === 2 || a ===12) {
    return `Зима`;
  } else if (a >= 3 || a <= 5) {
    return `Весна`;
  } else if (a >= 6 || a <= 8) {
    return `Лето`;
  } else {
    return `Осень`;
  }
}



