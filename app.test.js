const { test } = require('node:test');
const assert = require('node:assert');
const { add, greet } = require('./app');

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('greet returns default greeting', () => {
  assert.strictEqual(greet(), 'Hello, World!');
});

test('greet returns personalised greeting', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});
