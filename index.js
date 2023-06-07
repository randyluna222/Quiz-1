const {  numbMax, numMin, numSum, ordenNumbs } = require('./quiz');



const numbers = [19, 4, 83, 57, 66, 32, 10, 92, 15, 78, 42, 61, 7, 54, 28, 95, 12, 36, 70, 89];

const maxNumber = numbMax(numbers);
console.log('Número mayor:', maxNumber);

const minNumber = numMin(numbers);
console.log('Número menor:', minNumber);

const sum = numSum(numbers);
console.log('Sumatoria:', sum);

const sortedNumbers = ordenNumbs(numbers);
console.log('Números ordenados:', sortedNumbers);