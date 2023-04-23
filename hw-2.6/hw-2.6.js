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

// const arr = [1, 5, 4, 10, 0, 3]; 

//     for (let elem of arr) { 
//     if (arr[elem] === 4){  // ищет все индексы кроме 2го
//     console.log(elem);
//     }
// }

//Задание 3

const numbs = [1, 3, 5, 10, 20];

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

const num = [1, 1, 1];

num.push(2,2,2);

console.log(num);

//Задание 6

const arrNumber = [9, 8, 7, 'a', 6, 5];

arrNumber = arrNumber.sort();
console.log(arrNumber.pop()); 
console.log(arrNumber);

//Задание 7

const arrSearch = [9, 8, 7, 6, 5];

let userNumber = +prompt('Введите число 1 от 10');

if(arrSearch.includes(userNumber)){
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

const array = [[1, 2, 3,],[4, 5, 6]];

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

//Задание 12

function getLengthWords(words) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    arr.push(wordLength);
    }
    return arr;
    }
let words = (['слово', '', 'слог', 'длинное предложение', 'буква']);
let wordsLength = getLengthWords(words)
console.log (wordsLength)

//Задание 13

function getNegativeValues(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
    result.push(numbers[i]);
    }
    }
    return result;
    }

    let numbers = [2, -5, 8, -10, 6, -3];

    let negativeNumbers = getNegativeValues(numbers);

    console.log(negativeNumbers)

