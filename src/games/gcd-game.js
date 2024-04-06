import { getRandomNumberWithMaxCap } from './general-in-game-logic.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const greatCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatCommonDivisor(b, a % b);
};

const prepareQuestionAndCorrectAnswer = () => {
  const maxValueOfRandomNumber = 150;
  const firstNumber = getRandomNumberWithMaxCap(maxValueOfRandomNumber);
  const secondNumber = getRandomNumberWithMaxCap(maxValueOfRandomNumber);
  const question = `${firstNumber} ${secondNumber}`;

  let correctAnswer;
  if (firstNumber > secondNumber) {
    correctAnswer = greatCommonDivisor(firstNumber, secondNumber);
  } else {
    correctAnswer = greatCommonDivisor(secondNumber, firstNumber);
  }

  return [question, correctAnswer];
};

export { gameRules, prepareQuestionAndCorrectAnswer };
