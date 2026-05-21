import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/Store.js";
import toast from "react-hot-toast";
import API from "../api/axios.js";


export default function Login () {

    const setUser = useAuthStore((state) => state.setUser)
    

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true);
            const response = await API.post("/user/login", formData);
            console.log(response.data)
           setUser(response.data.user);
           localStorage.setItem("user", JSON.stringify(response.data.user));
            toast.success("Logged in successfully");
            navigate("/dashboard");
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message || "Invalid email or password");
        } finally {
            setLoading(false);
        }
    }
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                <div>
                    <h1 className="text-4xl font-light tracking-tight">Welcome Back</h1>
                    <p className="text-black mt-3 leading-relaxed">Login to continue</p>
                </div>
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-4 outline-non" />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 p-4 outline-non" />
                <button type="submit" disabled={loading} className="w-full bg-black text-white p-4 hover:bg-blue-800 transition">
                    {loading ? "Logging in..." : "Login"}
                </button>
                <p>Don't have an account? <Link to="/signup" className="text-black">Signup</Link></p>
            </form>

        </main>
    )
}