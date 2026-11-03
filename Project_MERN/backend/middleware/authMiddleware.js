const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = async (req, res, next) => {
  const authorization = req.headers.authorization

  if (!authorization?.startsWith('Bearer ')) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  try {
    const token = authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id).select('-password')

    if (!user) {
      res.status(401)
      throw new Error('Not authorized')
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401)
    throw new Error('Not authorized')
  }
}

module.exports = {
  protect,
}
