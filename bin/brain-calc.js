#!/usr/bin/env node
import { greeting, startGame } from '../src/index.js';
import { gameRules, prepareQuestion, giveCorrectAnswer } from '../src/games/calc-game.js';

const playerName = greeting();

startGame(playerName, gameRules, prepareQuestion, giveCorrectAnswer);
