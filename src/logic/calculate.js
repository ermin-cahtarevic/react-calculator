import operate from './operate';

const calculate = (calculator, btnName) => {
  const { total, next, operation } = calculator;
  
  switch(btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total *= -1;
      if (next) next *= -1;
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
    case '%':
      if (next && operation) total = operate(total, next, operation);

      next = null;
      operation = btnName;
      break;
    case '.':
      if (total && !total.split('').includes('.')) total = `${total}.`;
      else if (next && !next.split('').includes('.')) next = `${next}.`;
      else next = '0.';
      break;
    case '=':
      if (total && next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;

    default:
      if (operation) total += btnName;
      else next += btnName;
  }

  return { total, next, operation }
}

export default calculate;