const gameRules = 'What is the result of the expression?';

const prepareQuestion = () => {
  const maxNumber = 100;
  const firstNumber = Math.floor(Math.random() * maxNumber);
  const secondNumber = Math.floor(Math.random() * maxNumber);

  const mathOperators = ['+', '-', '*'];
  const maxIndexOfArray = 2;
  const randoxIndexOfArray = Math.floor(Math.random() * maxIndexOfArray);
  const mathOperator = mathOperators[randoxIndexOfArray];

  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;
  return question;
};

const giveCorrectAnswer = (question) => {
  const dividedElements = question.split(' ');
  const firstNumber = parseInt(dividedElements[0], 10);
  const mathOperator = dividedElements[1];
  const secondNumber = parseInt(dividedElements[2], 10);
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
  return correctAnswer;
};

export { gameRules, prepareQuestion, giveCorrectAnswer };
