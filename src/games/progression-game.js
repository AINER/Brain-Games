import { getRandomNumberWithMaxCap, getRandomNumberWithGivenRange } from './general-in-game-logic.js';

const gameRules = 'What number is missing in the progression?';

const prepareQuestionAndCorrectAnswer = () => {
  const progressionOfNumbers = [];
  const firstNumber = getRandomNumberWithMaxCap();
  progressionOfNumbers.push(firstNumber);

  const minLength = 5;
  const maxLength = 10;
  const lengthOfProgression = getRandomNumberWithGivenRange(minLength, maxLength);
  const maxStepOfProgression = 150;
  const stepOfProgression = getRandomNumberWithMaxCap(maxStepOfProgression);

  let i = 1;
  while (i <= lengthOfProgression) {
    const nextNumberOfProgression = progressionOfNumbers[i - 1] + stepOfProgression;
    progressionOfNumbers.push(nextNumberOfProgression);
    i += 1;
  }

  const replacement = '..';
  const positionOfReplacement = getRandomNumberWithMaxCap(progressionOfNumbers.length);
  const correctAnswer = progressionOfNumbers[positionOfReplacement];
  progressionOfNumbers[positionOfReplacement] = replacement;

  const question = progressionOfNumbers.join(' ');

  return [question, correctAnswer];
};

export { gameRules, prepareQuestionAndCorrectAnswer };
