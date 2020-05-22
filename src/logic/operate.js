import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  let total;

  if (operation === '+') {
    total = numOne.plus(numTwo).toString();
  } else if (operation === '-') {
    total = numOne.minus(numTwo).toString();
  } else if (operation === '×') {
    total = numOne.times(numTwo).toString();
  } else if (operation === '÷') {
    if (numTwo.eq(0)) {
      total = 'Division by zero is undefined';
    } else {
      total = numOne.div(numTwo).toString();
    }
  }

  return total;
}

export default operate;