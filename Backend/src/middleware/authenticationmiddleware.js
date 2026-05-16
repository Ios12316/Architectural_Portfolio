import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authenticationMiddleware = async (req, res, next) => {
    try {
        const secretKey = process.env.JWT_SECRET;
        const token = req.cookies.token
        if(!token) return res.status(404).json({message: 'Not found'}) 
        const decodedToken = jwt.verify(token, secretKey)
        if(!decodedToken) return res.status(401).json({message: 'Unauthorized'})
        req.user = await User.findById(decodedToken.id).select("-password")
        if(!req.user) return res.status(404).json({message: 'User not found'})
        next();    
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

export default authenticationMiddleware;
