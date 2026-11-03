const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(409)
    throw new Error('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
  })
}

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
}

// @desc    Get current user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
  res.status(200).json({ message: 'Get me' })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
