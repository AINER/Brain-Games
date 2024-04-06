import { getRandomNumberWithMaxCap } from './general-in-game-logic.js';

const gameRules = 'What is the result of the expression?';

const prepareQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomNumberWithMaxCap();
  const secondNumber = getRandomNumberWithMaxCap();

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
