//Задание 1

for (let a = 0; a < 2; a++) {
  console.log("привет");
  }

//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

//Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4

let obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
  }
  
  for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
  }

  //Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}
console.log(n);
console.log(num);

//Задание 6

let friday = 6;

for(let friday = 6; friday <=31; friday = friday + 7) {
  console.log(`Сегодня пятница, ${friday} - е число. Необходимо подготовить отчет`);
}