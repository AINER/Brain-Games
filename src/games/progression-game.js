import { getRandomNumber } from './general-in-game-logic.js';

const gameRules = 'What number is missing in the progression?';

const prepareQuestionAndCorrectAnswer = () => {
  const progressionOfNumbers = [];
  const firstNumber = getRandomNumber();
  progressionOfNumbers.push(firstNumber);

  const minLength = 5;
  const maxLength = 10;
  const lengthOfProgression = Math.floor(Math.random() * (maxLength - minLength) + minLength);
  const maxStepOfProgression = 150;
  const stepOfProgression = Math.floor(Math.random() * maxStepOfProgression);

  let i = 1;
  while (i <= lengthOfProgression) {
    const nextNumberOfProgression = progressionOfNumbers[i - 1] + stepOfProgression;
    progressionOfNumbers.push(nextNumberOfProgression);
    i += 1;
  }

  const replacement = '..';
  const positionOfReplacement = Math.floor(Math.random() * progressionOfNumbers.length);
  const correctAnswer = progressionOfNumbers[positionOfReplacement];
  progressionOfNumbers[positionOfReplacement] = replacement;

  const question = progressionOfNumbers.join(' ');

  return [question, correctAnswer];
};

export { gameRules, prepareQuestionAndCorrectAnswer };
