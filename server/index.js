// Build a server with Node's HTTP module
import express from "express";
import router from "./routes/routes.js";
import cors from "cors"
import connect from "./config/database.js"
import dotenv from "dotenv"

dotenv.config()

const port = 3001;
const app = express();

connect()
app.use(cors())
app.use(express.json())

router(app)

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`)
    console.log(`Server listening on port ${server.address().port}`)
});

