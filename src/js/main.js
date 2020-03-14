'use strict';

//Получить кнопку "Начать расчет" через id
let btnStart = document.getElementById('start');
console.log(btnStart);


//Получить все блоки в правой части программы c классом название-value
let value = document.querySelector('.result-table'),
    valueCollection = value.querySelectorAll(`[class*="value"]`); // получил коллекцию
console.log(valueCollection);

//Получить поля(input) c обязательными расходами через класс
let inputCollection = document.querySelectorAll('.expenses-item'); // получил коллекцию
console.log(inputCollection);

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, в отдельные переменные
let btnExpenses = document.querySelector('.expenses-item-btn'),
    btnOptional = document.querySelector('.optionalexpenses-btn');

console.log(btnExpenses);
console.log(btnOptional);

//Получить поля для ввода необязательных расходов (optionalexpenses-item)
let inputOptionalCollection = document.querySelectorAll('.optionalexpenses-item'); // получил коллекцию
console.log(inputOptionalCollection);

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let inputIncome = document.querySelector('.choose-income');
console.log(inputIncome);

let inputID = document.querySelector('.checksavings #savings');
console.log(inputID);

let inputSum = document.querySelector('#sum');
console.log(inputSum);

let inputPersent = document.querySelector('#percent');
console.log(inputPersent);

let inputYear = document.querySelector('.year-value');
console.log(inputYear);

let inputMonth = document.querySelector('.month-value');
console.log(inputMonth);

let inputDay = document.querySelector('.day-value');
console.log(inputDay);



