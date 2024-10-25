export interface AsyncRequest<T> {
  success: boolean;
  data?: T;
}

export async function asyncPoll<T>(
  fn: () => PromiseLike<AsyncRequest<T>>,
  pollInterval = 5000,
  pollTimeout = 30000,
  abortSignal?: AbortSignal
): Promise<T> {
  if (abortSignal?.aborted) {
    throw new Error("Polling aborted");
  }

  const endTime = new Date().getTime() + pollTimeout;

  const condition = (resolve: (value: T) => void, reject: (reason?: any) => void): void => {
    if (abortSignal?.aborted) {
      reject(new Error("Polling aborted"));
      return;
    }

    Promise.resolve(fn())
      .then((result) => {
        const now = new Date().getTime();
        if (result.success) {
          if (result.data === undefined) {
            reject(new Error("Successful response must include data"));
            return;
          }
          resolve(result.data);
        } else if (now < endTime) {
          setTimeout(condition, pollInterval, resolve, reject);
        } else {
          reject(new Error("Reached timeout. Exiting"));
        }
      })
      .catch(reject);
  };

  return new Promise(condition);
}

// Example usage:
const pollingFn: () => PromiseLike<AsyncRequest<number>> = async () => {
  const response = await fetch('some-api');
  const data = await response.json();
  return {
    success: response.ok,
    data: data.value
  };
};

// Using with abort controller
const abortController = new AbortController();
asyncPoll(
  pollingFn,
  1000,
  10000,
  abortController.signal
).catch(error => {
  if (error.message.includes("aborted")) {
    console.log("Polling was cancelled");
  }
});

// Cancel after 5 seconds
setTimeout(() => abortController.abort(), 5000);

import { Subject, Subscriber } from "../../chapter-5_Behavioral_Design_Patterns_Communication/src/observer"

class Producer extends Subject {
  private state: number[]

  constructor(state: number[]) {
    super()
    this.state = state
  }

  getState(): number[] {
    return this.state
  }

  setState(state: number[]) {
    this.state = state
    this.notify()
  }
}

class Consumer implements Subscriber {
  private state: number[] = [];

  constructor(private subject: Producer) {}

  public notify(): void {
    this.state = this.subject.getState()
    for (let item of this.state) {
      console.log("Processing data:", item)
    }
  }
}

const producer = new Producer([]);
const consumerA = new Consumer(producer);
const consumerB = new Consumer(producer);

producer.addSubscriber(consumerA);
producer.addSubscriber(consumerB);

producer.setState(producer.getState().concat(Math.floor(Math.random() * 100)));
producer.setState(producer.getState().concat(Math.floor(Math.random() * 100)));