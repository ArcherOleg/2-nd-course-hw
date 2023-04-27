//Задание 1

let line = "js";

let newLine = line.toUpperCase();

console.log(newLine);

//Задание 2

const productsFruits = ['яблоко', 'банан', 'груша', 'киви', 'виноград', 'вишня'];
const search = 'ви';

productsFruits.forEach((fruits) => {
    if (fruits.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(fruits);
}
});

//Задание 3

let num = 32.58884;
//1
let roundedDown = Math.floor(num);
console.log(roundedDown); 
//2
let roundedUp = Math.ceil(num);
console.log(roundedUp); 
//3
let roundedNearest = Math.round(num);
console.log(roundedNearest); 

//Задание 4

const num = [52, 53, 49, 77, 21, 32];

const min = Math.min(...num);
const max = Math.max(...num);

console.log(`Smallest Value:, ${min}`);
console.log(`Largest Value:, ${max}`); 

//Задание 5

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rndInt = randomIntFromInterval(1, 10);

console.log(rndInt);

//Задание 6

function getRandomArrNumbers(n){
    let length = n / 2; 
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * n));
    }
    return arr
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const rndInt = randomNumberInRange(12, 15);

console.log(rndInt);

//Задание 8

let currentDate = new Date();
console.log(currentDate);

//Задание 9

let currentDate = new Date();

let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 73);

console.log(`${futureDate.toLocaleDateString()}`);

//Задание 10

function formatDate(date) {
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `Дата: ${day} ${month} ${year}: ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
    }

    const currentDate = new Date();
    console.log(formatDate(currentDate));