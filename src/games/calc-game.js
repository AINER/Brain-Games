const gameRules = 'What is the result of the expression?';

const prepareQuestionAndCorrectAnswer = () => {
  const maxNumber = 100;
  const firstNumber = Math.floor(Math.random() * maxNumber);
  const secondNumber = Math.floor(Math.random() * maxNumber);

  const mathOperators = ['+', '-', '*'];
  const maxIndexOfArray = 2;
  const randomIndexOfArray = Math.floor(Math.random() * maxIndexOfArray);
  const mathOperator = mathOperators[randomIndexOfArray];

  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;

  let correctAnswer;
  switch (mathOperator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  return [question, correctAnswer];
};

export { gameRules, prepareQuestionAndCorrectAnswer };
