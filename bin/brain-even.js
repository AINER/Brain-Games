#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameRequest from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = nameRequest();
console.log(`👋  Hello, ${name}`);

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < 3) {
    const maxNumber = 100;
    const number = Math.floor(Math.random() * maxNumber);
    console.log(`Question: ${number}`);

    const answerRequest = () => readlineSync.question('Your answer: ');
    const answer = answerRequest();

    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('👌  Correct!');
      numberOfCorrectAnswers += 1;
    } else {
      const correctAnswer = (answer === 'yes') ? 'no' : 'yes';
      console.log(`😢  '${answer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`🎉  Congratulations, ${name}!`);
};

game();
