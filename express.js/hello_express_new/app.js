const express = require("express")

const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.status(400)
    // res.send("Hello World!")
    res.json({
        message: "Hello World!"
    })
})

//start server
app.listen(port, () => {
    console.log(`Server started successfully at http://localhost:${port}`)
})