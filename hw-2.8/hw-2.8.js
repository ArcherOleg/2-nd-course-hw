//Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
  ];
  
  console.log(people.sort((person1, person2) => person1.age - person2.age));

//Задание 2

function isPositive(a) {
  return a >= 0;
  }

function isMale(people) {
    return people.gender === 'male';
  }

function filter(arr, myFunction) {
    const resultArr = [];
    
    for (let i = 0; i < arr.length; i++){
    if (myFunction(arr[i])) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
  }
  
console.log(filter([3, -4, 1, 9], isPositive));
  
const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people, isMale));

//Задание 3

let counter = 0
const intervalID = setInterval(function() {
    console.log(new Date());
    counter += 3;
    if(counter >= 30) {
        clearInterval(intervalID);
        console.log('30 секунд прошло');
    }
}, 3000);

//Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000); 
  }
  
  delayForSecond(function() {
    console.log('Привет, Глеб!');
  });

//Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
      console.log('Прошла одна секунда');
      if (cb) {
        cb();
      }
    }, 1000);
  }
  
  function sayHi(name) {
    console.log(`Привет, ${name}!`);
  }
  
  delayForSecond(() => {sayHi('Глеб')});
  