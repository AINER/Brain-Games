const gameRules = 'Find the greatest common divisor of given numbers.';

const prepareQuestion = () => {
  const maxNumber = 100;
  const firstNumber = Math.floor(Math.random() * maxNumber);
  const secondNumber = Math.floor(Math.random() * maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return question;
};

const greatCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatCommonDivisor(b, a % b);
};

const giveCorrectAnswer = (question) => {
  const dividedElements = question.split(' ');
  let a;
  let b;
  if (parseInt(dividedElements[0], 10) > parseInt(dividedElements[1], 10)) {
    a = parseInt(dividedElements[0], 10);
    b = parseInt(dividedElements[1], 10);
  } else {
    a = parseInt(dividedElements[1], 10);
    b = parseInt(dividedElements[0], 10);
  }

  const correctAnswer = greatCommonDivisor(a, b);

  return correctAnswer;
};

export { gameRules, prepareQuestion, giveCorrectAnswer };
