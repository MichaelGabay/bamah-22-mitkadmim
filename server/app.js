import express from "express"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import "dotenv/config"
import "./config/connectDB.js"
import { errorHandler } from "./middleware/errorHandler.js"

const app = express()

app.use(express.json())

app.use(authRoutes) // POST /register, POST /login
app.use(userRoutes) // GET /me

// 404
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Not found" })
})

app.use(errorHandler)

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`),
)
