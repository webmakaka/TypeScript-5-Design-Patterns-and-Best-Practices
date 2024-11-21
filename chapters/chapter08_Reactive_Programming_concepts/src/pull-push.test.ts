import { Producer, Consumer, Storage, Collector } from './pull-push';
import { test, expect, describe, beforeEach, vi } from "vitest"

console.log = vi.fn();

describe('Pull-Push Pattern', () => {
  let storage: Storage;
  let producer: Producer;
  let collector: Collector;
  let consumer: Consumer;

  beforeEach(() => {
    storage = new Storage();
    producer = new Producer(storage);
    collector = new Collector(storage);
    consumer = new Consumer(collector);
  });

  describe('Storage', () => {
    test('should save and retrieve data', async () => {
      const testData = { id: 1, value: 'Test Data' };
      await storage.save(testData);
      const retrievedData = await storage.getData();
      expect(retrievedData).toContainEqual(testData);
    });
  });

  describe('Producer', () => {
    test('should update data and notify consumers', async () => {
      const spy = vi.spyOn(console, 'log');
      const testData = { id: 2, value: 'New Data' };
      await producer.updateData(testData);
      expect(spy).toHaveBeenCalledWith('Data updated. Consumers can pull from /data-endpoint');
      const storedData = await storage.getData();
      expect(storedData).toContainEqual(testData);
    });
  });

  describe('Collector', () => {
    test('should pull data from storage', async () => {
      const testData = { id: 3, value: 'Collected Data' };
      await storage.save(testData);
      const pulledData = await collector.pullData();
      expect(pulledData).toContainEqual(testData);
    });
  });

  describe('Consumer', () => {
    test('should pull and log data', async () => {
      const spy = vi.spyOn(console, 'log');
      const testData = { id: 4, value: 'Consumed Data' };
      await storage.save(testData);
      await consumer.pullData();
      expect(spy).toHaveBeenCalledWith('Data received:', [testData]);
    });
  });

  describe('Integration', () => {
    test('should work end-to-end', async () => {
      const spy = vi.spyOn(console, 'log');
      const testData = { id: 5, value: 'End-to-End Data' };
      await producer.updateData(testData);
      await consumer.pullData();
      expect(spy).toHaveBeenCalledWith('Data updated. Consumers can pull from /data-endpoint');
      expect(spy).toHaveBeenCalledWith('Data received:', [testData]);
    });
  });
});