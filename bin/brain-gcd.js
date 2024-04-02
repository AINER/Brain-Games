#!/usr/bin/env node
import { greeting, startGame } from '../src/index.js';
import { gameRules, prepareQuestionAndCorrectAnswer } from '../src/games/gcd-game.js';

const playerName = greeting();

startGame(playerName, gameRules, prepareQuestionAndCorrectAnswer);
