const isOdd = num => {
  return num % 2 !== 0;
};

console.log(isOdd(11));

function howManyHundreds(num) {
  return Math.trunc(num % 100);
}

console.log(howManyHundreds(100));
