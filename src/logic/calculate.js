import operate from './operate';

const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) next = `${next * -1}`;
      else if (total) total = `${total * -1}`;

      break;
    case '+':
    case '-':
    case '×':
    case '÷':
    case '%':
      if (!total) break;
      if (next && operation) {
        total = operate(total, next, operation);
        next = null;
      }
      operation = btnName;
      break;
    case '.':
      if (total && !total.split('').includes('.') && !operation) total = `${total}.`;
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
      if (operation) {
        next = next === null ? btnName : next + btnName;
      } else {
        total = total === null ? btnName : total + btnName;
      }
  }

  return { total, next, operation };
};

export default calculate;
