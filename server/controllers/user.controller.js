import { User } from "../models/User.js"

export const getMe = async (req, res, next) => {
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(401).json({ success: false, message: "User not found" })
  }
  res.json({ user: user.toJSON() })
}
