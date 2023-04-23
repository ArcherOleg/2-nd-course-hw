//Задание 1

const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
    if (number[i] == 0)break;
    console.log(number[i]);
}

// Задание 2
//1
const array = [1, 5, 4, 10, 0, 3];

const position = array.indexOf(4);

console.log(position);

//2

const arr = [1, 5, 4, 10, 0, 3]; 

    for (let elem of arr) { 
    if (arr[elem] === 5){ 
    console.log(elem);
    }
}

//Задание 3

let numbs = [1, 3, 5, 10, 20];

numbs = numbs.join(' ');

console.log(numbs);

//Задание 4

let arr = [];

for (let i = 0; i < 3; i++) { 
let subArr = [];

for (let j = 0; j < 3; j++) {
    subArr.push(1);
}
arr.push(subArr); 
}

console.log(arr);

//Задание 5

let num = [1, 1, 1];

num.push(2,2,2);

console.log(num);

//Задание 6

let arrNumber = [9, 8, 7, 'a', 6, 5];

arrNumber = arrNumber.sort();
console.log(arrNumber.pop()); 
console.log(arrNumber);

//Задание 7

const arr = [9, 8, 7, 6, 5];

let userNumber = Number(prompt('Введите число 1 от 10'));

if(arr.includes(userNumber)){
    alert('Данное число входит в массив');
} else if(isNaN(userNumber)){
    alert('Вы ввели не число');
} else {
    alert('Данное число не входит в массив');
}

//Задание 8

let word = 'abcdef';

console.log([...word].reverse().join(''));

//Задание 9

let array = [[1, 2, 3,],[4, 5, 6]];

console.log(array.flat());

//Задание 10

const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length - 1; i++){
    console.log(arr[i] + arr[i + 1]);
}

//Задание 11

const array = [2, 5, 3, 4, 7];

const square = elem.map(el => el ** 2);

console.log(square);

