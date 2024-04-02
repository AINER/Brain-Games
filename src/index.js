import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('🧠  Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`👋  Hello, ${playerName}`);
  return playerName;
};

const startGame = (playerName, gameRules, prepareQuestion, giveCorrectAnswer) => {
  console.log(`${gameRules}`);

  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < 3) {
    const question = prepareQuestion();
    const correctAnswer = giveCorrectAnswer(question);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer.toString() === answer) {
      console.log('👌  Correct!');
      numberOfCorrectAnswers += 1;
    } else {
      console.log(`😢  '${answer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${playerName}!`);
    }
  }

  return console.log(`🎉  Congratulations, ${playerName}!`);
};

export { startGame, greeting };
