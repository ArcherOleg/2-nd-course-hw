//Задание 1

const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
    if (number[i] == 10) break;
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

let Numbers = [9, 8, 7, 6, 5];

let userNumber = prompt('Введите число 1 от 10');



//Задание 8

let word = 'abcdef';

console.log([...word].reverse().join(''));