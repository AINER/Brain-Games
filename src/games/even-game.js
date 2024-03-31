const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const prepareQuestion = () => {
  const maxNumber = 100;
  const question = Math.floor(Math.random() * maxNumber);
  return question;
};

const giveCorrectAnswer = (question) => {
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return correctAnswer;
};

export { gameRules, prepareQuestion, giveCorrectAnswer };
