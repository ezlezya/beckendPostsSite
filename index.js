import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'


const app = express()
const PORT = 5002
const db = 'mongodb+srv://oleggolowatiy:user@clusterpostsproject.u3liutj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPostsProject'

app.use(cors({
    origin: "http://localhost:5173",
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.json())
app.use("/api", router)

async function setApp() {
    try {
        mongoose.connect(db)
        app.listen(PORT, () => {console.log("server is working on port: " + PORT)})
    }
    catch(e) {
        console.log(e)
    }
}

setApp()