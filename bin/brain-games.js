#!/usr/bin/env node
import nameRequest from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = nameRequest();
console.log(`Hello, ${name}`);
