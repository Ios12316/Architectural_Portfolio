
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api/axios.js";

export default function Signup () {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
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
            
            const response = await API.post("/user/signup", formData);
            console.log(response.data)
            toast.success("Account created successfully");
            navigate("/login");
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message || "Error creating account");
        } finally {
            setLoading(false);
        }
    }
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                <div>
                    <h1 className="text-5xl font-light">Create Account</h1>
                    <p className="text-gray-500 mt-3">Enter your details below</p>
                </div>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full border border-gray-300 p-4 outline-non" />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-4 outline-non" />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 p-4 outline-non" />
                <button type="submit" disabled={loading} className="w-full bg-black text-white p-4 hover:bg-blue-800 transition">
                    {loading ? "Creating account..." : "Signup"}

                    
                </button>
                <p>Already have an account? <Link to="/login" className="text-white hover:text-blue-800">Login</Link></p>
            </form>

        </main>
       
    )
}