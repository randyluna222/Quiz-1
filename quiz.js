function numbMax(numbers) {
  return Math.max(...numbers);
}

function numMin(numbers) {
  return Math.min(...numbers);
}

function numSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function ordenNumbs(numbers) {
  return numbers.sort((a, b) => a - b);
}

module.exports = { numbMax, numMin, numSum, ordenNumbs };

