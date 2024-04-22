const stdin = process.stdin,
  stdout = process.stdout

stdin.resume()
stdin.setEncoding("utf8")
const input: string[] = []
stdin.on("data", (data) => {
  input.push(data.toString())
})

stdin.on("end", () => {
  stdout.write(input.join(""))
})

stdin.on("close", function () {
  process.exit(0)
})
