// import { helloSUm } from "./jest";

// helloSUm

const helloSUm = require('./jest');


test('adds 9 + 9 to equal 18', () => {
  expect(helloSUm(9, 9)).toBe(18);
});