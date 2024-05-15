import * as http from "http"
const shutdownHandler = () => {
  console.log("Received shutdown signal, gracefully exiting...")

  // Perform additional cleaning work here

  process.exit(0) // Indicate successful termination
}

//create a server object:
http
  .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write("Hello World!") //write a response to the client
    res.end() //end the response
  })
  .listen(8080) //the server object listens on port 8080

// Register shutdown signal listeners (SIGINT, SIGTERM)
process.on("SIGINT", shutdownHandler)
process.on("SIGTERM", shutdownHandler)
