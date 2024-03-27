import readlineSync from 'readline-sync';

const nameRequest = () => readlineSync.question('May I have your name? ');

export default nameRequest;
