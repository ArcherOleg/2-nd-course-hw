// //Задание 1

// let line = "js";

// let newLine = line.toUpperCase();

// console.log(newLine);

// //Задание 2

// const productsFruits = ['яблоко', 'банан', 'груша', 'киви', 'виноград', 'вишня'];
// const search = 'ви';

// productsFruits.forEach((fruits) => {
//     if (fruits.toLowerCase().startsWith(search.toLowerCase())) {
//         console.log(fruits);
// }
// });

// //Задание 3

// let num = 32.58884;
// //1
// let roundedDown = Math.floor(num);
// console.log(roundedDown); 
// //2
// let roundedUp = Math.ceil(num);
// console.log(roundedUp); 
// //3
// let roundedNearest = Math.round(num);
// console.log(roundedNearest); 

// //Задание 4

// const num = [52, 53, 49, 77, 21, 32];

// const min = Math.min(...num);
// const max = Math.max(...num);

// console.log(`Smallest Value:, ${min}`);
// console.log(`Largest Value:, ${max}`); 

// //Задание 5

// function randomIntFromInterval(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const rndInt = randomIntFromInterval(1, 10);

// console.log(rndInt);

// //Задание 6

// function getRandomArrNumbers(n){
//     const length = n / 2; 
//     const arr = [];

//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * n))
//     }
//     return arr
// }

// console.log(getRandomArrNumbers(7));
// console.log(getRandomArrNumbers(12));

// //Задание 7

// function randomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// const rndInt = randomNumberInRange(12, 15);

// console.log(rndInt);

// //Задание 8

// let currentDate = new Date();
// console.log(currentDate);

// //Задание 9

