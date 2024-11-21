import { describe, it, expect, vi } from 'vitest';
import { Future } from './futures';

describe('Future', () => {
  vi.useFakeTimers();

  describe('success', () => {
    it('should resolve with the provided value', async () => {
      const future = Future.success('test');
      await expect(new Promise((resolve, reject) => {
        future.fork(reject, resolve);
      })).resolves.toBe('test');
    });
  });

  describe('fail', () => {
    it('should reject with the provided error', async () => {
      const error = new Error('Test error');
      const future = Future.fail(error);
      await expect(new Promise((resolve, reject) => {
        future.fork(reject, resolve);
      })).rejects.toBe(error);
    });
  });

  describe('then', () => {
    it('should chain operations', async () => {
      const future = Future.success('hello')
        .then((value) => Future.success(value.toUpperCase()));
      
      await expect(new Promise((resolve, reject) => {
        future.fork(reject, resolve);
      })).resolves.toBe('HELLO');
    });

    it('should propagate errors', async () => {
      const error = new Error('Test error');
      const future = Future.fail(error)
        .then(() => Future.success('This should not be reached'));
      
      await expect(new Promise((resolve, reject) => {
        future.fork(reject, resolve);
      })).rejects.toBe(error);
    });
  });

  describe('fork', () => {
    it('should execute the future and handle success', async () => {
      const future = new Future<Error, string>((resolve) => {
        setTimeout(() => resolve('Hello, Future!'), 1000);
        return () => {};
      });

      const promise = new Promise((resolve, reject) => {
        future.fork(reject, resolve);
      });

      vi.runAllTimers();

      await expect(promise).resolves.toBe('Hello, Future!');
    });

    it('should execute the future and handle failure', async () => {
      const error = new Error('Test error');
      const future = new Future<Error, string>((_, reject) => {
        setTimeout(() => reject(error), 1000);
        return () => {};
      });

      const promise = new Promise((resolve, reject) => {
        future.fork(reject, resolve);
      });

      vi.runAllTimers();

      await expect(promise).rejects.toBe(error);
    });

    it('should return a cancellation function', () => {
      const mockClear = vi.fn();
      const future = new Future<Error, string>((resolve) => {
        const timerId = setTimeout(() => resolve('Hello, Future!'), 1000);
        return () => {
          clearTimeout(timerId);
          mockClear();
        };
      });

      const cancel = future.fork(
        () => {},
        () => {}
      );

      cancel();
      expect(mockClear).toHaveBeenCalled();
    });
  });
});