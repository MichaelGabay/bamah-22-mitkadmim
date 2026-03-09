import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

export const register = async (req, res) => {
  const existing = await User.findOne({ email: req.body.email.toLowerCase() })
  if (existing) {
    return res
      .status(409)
      .json({ success: false, message: "Email already registered" })
  }
  req.body.password = await bcrypt.hash(req.body.password, 10)
  const user = await User.create(req.body)
  res.status(201).json({ user, token })
}

export const login = async (req, res, next) => {
  const user = await User.findOne({ email: req.email.toLowerCase() })
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" })
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" })
  }

  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  )
  user.password = undefined
  res.json({ user: user.toJSON(), token })
}
