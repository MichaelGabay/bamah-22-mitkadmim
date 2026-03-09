import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Missing or invalid authorization header",
    })
  }
  const token = authHeader.slice(7)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { _id: decoded._id, role: decoded.role }
    next()
  } catch {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" })
  }
}

export const adminAuth = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Admin access required" })
  }
  next()
}
