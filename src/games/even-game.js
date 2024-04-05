import { getRandomNumber } from './general-in-game-logic.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const prepareQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber();

  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { gameRules, prepareQuestionAndCorrectAnswer };
