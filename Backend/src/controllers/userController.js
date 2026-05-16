import User from "../models/userModel.js";
import { userValidator, loginValidator } from "../validation/userValidation.js"
import bcrypt from "bcryptjs";
import generateToken from "../Utis/generateToken.js"

export const signupUser = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;
        const {error} = userValidator.validate({fullName, email, password});
        if(error) return res.status(400).json({message: error.details[0].message});
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        });
        const token = generateToken(newUser._id)
        res.cookie('token', token, {maxAge: 24 * 60 * 60 * 1000, httpOnly:true, secure:process.env.NODE_ENV === 'production', sameSite:'lax'});
        res.status(201).json({message: "User created successfully", data: newUser})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const {error} = loginValidator.validate({email, password});
        if(error) return res.status(400).json({message: error.details[0].message});
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: "Invalid Email or Password"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({message: "Incorrect password"});
        }
        const token = generateToken(user._id);
        res.cookie('token', token, {maxAge: 24 * 60 * 60 * 1000, httpOnly:true, secure:process.env.NODE_ENV === 'production', sameSite:'lax'});
        return res.status(200).json({message: "User logged in successfully", data: user});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getUserProfile = async (req, res) => {
    res.status(200).json({message: "Welcome", fullName: req.user.fullName})
}

export const logoutUser = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message: "Logged out successfully"});
}