const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//saca al número mas alto
function getMaxNumber(numbers) {
  return Math.max(...numbers);
}
//Saca al numero mas bajo
function getMinNumber(numbers) {
  return Math.min(...numbers);
}
//hace la suma de todos los numeros
function getSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
//ordena los numeros
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}



module.exports = { getMaxNumber, getMinNumber, getSum, sortNumbers };
