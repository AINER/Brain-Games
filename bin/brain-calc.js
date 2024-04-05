#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { gameRules, prepareQuestionAndCorrectAnswer } from '../src/games/calc-game.js';

startGame(gameRules, prepareQuestionAndCorrectAnswer);
