const express = require("express")
require("dotenv").config()
require("./database/connectDB")
const authRouter = require("./routes/authRoute")
const app = express()
app.use(express.json())
app.use("/api/v1", authRouter)

const PORT = process.env.PORT || 5000
app.listen(5000,()=> console.log(`http://localhost:${PORT}`))