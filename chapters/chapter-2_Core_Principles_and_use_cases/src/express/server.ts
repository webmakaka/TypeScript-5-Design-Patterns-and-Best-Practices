import express from "express"
import { json } from "body-parser"

const app = express()
const port = process.env.PORT || 3000

app.use(json())

app.get("/health", (req, res) => {
  res.send("OK!")
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
