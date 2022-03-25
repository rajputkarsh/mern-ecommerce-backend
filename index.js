const express  = require("express")
const mongoose = require("mongoose")
const dotenv   = require("dotenv")

const userRoutes = require("./routes/user")
const authRoutes = require("./routes/authentication")

dotenv.config()
const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((error)=>{
        console.log("ERROR while connecting database", error)
    })

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("BACKEND SERVER")
})