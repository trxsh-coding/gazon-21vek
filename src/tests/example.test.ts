import { expect, test } from 'vitest';

function sum(a: number, b: number): number {
  return a + b;
}

test('adds numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});
