const quiz = require ('./quiz');


const maxNumber = getMaxNumber(numbers);
console.log(quiz.getMaxNumber('Número mayor:'), maxNumber);

const minNumber = getMinNumber(numbers);
console.log(quiz.getMinNumber('Número menor:'), minNumber);

const sum = getSum(numbers);
console.log(quiz.getSum('Sumatoria:'), sum);

const sortedNumbers = sortNumbers(numbers);
console.log(quiz.sortNumbers('Números ordenados:'), sortedNumbers);

