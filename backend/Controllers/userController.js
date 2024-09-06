const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Model/userModel')

const registerUser = async (req, res) => {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User Exists')
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, email, password: hashedPassword });
    if (user) {
        res.status(200).json({ user })
    }
    else {
        res.status(400)
        throw new Error('invalid user data')
    }

}

const loginUser = async (req, res) => {
    res.status(200).json({ message: 'new user logged in' })
}

const getCurrentUser = async (req, res) => {
    res.status(200).json({ message: 'all user data fetched' })
}

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
}