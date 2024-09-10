export interface AsyncRequest<T> {
  success: boolean
  data?: T
}
export async function asyncPoll<T>(
  fn: () => PromiseLike<AsyncRequest<T>>,
  pollInterval = 5 * 1000,
  pollTimeout = 30 * 1000,
): Promise<T> {
  const endTime = new Date().getTime() + pollTimeout
  const condition = (resolve: Function, reject: Function): void => {
    Promise.resolve(fn())
      .then((result) => {
        const now = new Date().getTime()
        if (result.success) {
          resolve(result.data)
        } else if (now < endTime) {
          setTimeout(condition, pollInterval, resolve, reject)
        } else {
          reject(new Error("Reached timeout. Exiting"))
        }
      })
      .catch((err) => {
        reject(err)
      })
  }
  return new Promise(condition)
}

const result = asyncPoll(async () => {
  try {
    const result = await Promise.resolve({ data: "Value" })
    if (result.data) {
      return Promise.resolve({
        success: true,
        data: result,
      })
    } else {
      return Promise.resolve({
        success: false,
      })
    }
  } catch (err) {
    return Promise.reject(err)
  }
})

result.then((d) => {
  console.log(d.data) // Value
})

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