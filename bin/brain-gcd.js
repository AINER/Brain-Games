#!/usr/bin/env node
import { greeting, startGame } from '../src/index.js';
import { gameRules, prepareQuestion, giveCorrectAnswer } from '../src/games/gcd-game.js';

const playerName = greeting();

startGame(playerName, gameRules, prepareQuestion, giveCorrectAnswer);
