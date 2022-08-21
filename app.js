const express = require("express")
const app = express()

const port = 3000

app.get("/", (req, res) => [
  res.send("this is my restaurant-list Web app")
])

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})