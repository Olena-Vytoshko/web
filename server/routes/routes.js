import data from '../resources/default_costs.js'
import User from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const router = (app) => {
    app.get("/", (request, response) => {
        response.send({
            message: "Hello, It is my API server",
        })
    })
    app.get("/costs", (request, response) => {
        response.send({
            message: data
        })
    })
    app.post("/register", async (req, res) => {
        try {
            const { login, password } = req.body

            if (!(login && password)) {
                console.log(req.body)
                console.log("Input = " + login + "  " + password)
                return res.status(400).send("All input is required")
            }

            const oldUser = await User.findOne({ login })

            if (oldUser) {
                return res.status(409).send("User Already Exist. Please Login")
            }

            const encryptedUserPassword = await bcrypt.hash(password, 10)

            const user = await User.create({
                login: login,
                password: encryptedUserPassword,
            })

            const token = jwt.sign(
                { user_id: user._id, login },
                process.env.TOKEN,
                {
                    expiresIn: "5h",
                }
            );
            user.token = token;

            res.status(201).json(user)
        } catch (err) {
            console.log(err)
        }
    })
    app.post("/login", async (req, res) => {
        try {
            // Get user input
            const { login, password } = req.body;

            // Validate user input
            if (!(login && password)) {
                return res.status(400).send("All input is required");
            }
            // Validate if user exist in our database
            const user = await User.findOne({ login })

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign(
                    { user_id: user._id, login },
                    process.env.TOKEN,
                    {
                        expiresIn: "5h",
                    }
                )

                user.token = token

                return res.status(200).json(user)
            }
            return res.status(400).send("Invalid Credentials")
        } catch (err) {
            console.log(err)
        }
    })
}

export default router