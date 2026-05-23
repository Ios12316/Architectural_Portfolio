import userRoutes from "./routes/userRoutes.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin: ["https://idowuolakunleproject.vercel.app", "http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));

app.use("/api/user", userRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("My Project is Live now");
})

const PORT = process.env.PORT || 3000;
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
}

export default app;