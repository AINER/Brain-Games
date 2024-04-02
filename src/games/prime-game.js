const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const prepareQuestionAndCorrectAnswer = () => {
  const maxNumber = 100;
  const question = Math.floor(Math.random() * maxNumber);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { gameRules, prepareQuestionAndCorrectAnswer };
