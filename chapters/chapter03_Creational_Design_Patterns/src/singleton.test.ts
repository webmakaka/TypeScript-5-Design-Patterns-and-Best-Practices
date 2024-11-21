import { Singleton } from './singleton.js';
import { test, expect, describe } from 'vitest'

describe('Singleton', () => {
  test('getInstance returns the same instance', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    expect(instance1).toBe(instance2);
  });
});