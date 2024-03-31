#!/usr/bin/env node
import { greating, startGame } from '../src/index.js';
import { gameRules, prepareQuestion, giveCorrectAnswer } from '../src/games/even-game.js';

const playerName = greating();

startGame(playerName, gameRules, prepareQuestion, giveCorrectAnswer);
