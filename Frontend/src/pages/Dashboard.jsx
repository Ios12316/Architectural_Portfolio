import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/Store.js";





export default function Dashboard() {


    const navigate = useNavigate();

    const setUserStore = useAuthStore((state) => state.setUser);
    const [user, setUser] = useState(null)
    
    

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login");
        }
        if(storedUser) {
            const parsedUser = JSON.parse(storedUser)
            setUser(parsedUser)
            setUserStore(parsedUser)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

  return (
    <main className="min-h-screen px-6 md:px-16 py-32">
        <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-light mt-6">Welcome,
                <br />
                {user?.fullName}</h1>

            <button onClick={handleLogout} className="mt-12 bg-black text-white px-8 py-4 hover:bg-gray-800 transition">Logout</button>

        </div>

    </main>
   
  );
}