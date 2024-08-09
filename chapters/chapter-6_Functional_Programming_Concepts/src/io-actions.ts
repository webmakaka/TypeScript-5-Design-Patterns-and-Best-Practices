export interface IO<A> {
    (): A;
}

const getCurrentTime: IO<string> = () => new Date().toISOString();
const logMessage = (message: string): IO<void> => () => console.log(message);

const time = getCurrentTime();
console.log(time);

logMessage("Hello, World!")(); 