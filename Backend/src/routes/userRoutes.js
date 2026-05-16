import express from "express";
import { signupUser, loginUser, getUserProfile, logoutUser } from "../controllers/userController.js";
import authenticationMiddleware from "../middleware/authenticationmiddleware.js";

const router = express.Router();

router.post("/signup", signupUser).post("/login", loginUser).post("/logout", logoutUser).get("/profile", authenticationMiddleware, getUserProfile);

export default router;
