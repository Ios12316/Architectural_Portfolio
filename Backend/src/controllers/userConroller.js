import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


export const signupUser = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({message: "User created successfully", user: {
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email
        }});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}