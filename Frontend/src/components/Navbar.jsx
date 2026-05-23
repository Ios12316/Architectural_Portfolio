import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"


export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#f5f3ef] ${scrolled ? "border-b border-black/5 shadow-sm" : "border-b border-transparent"}`}>
            
            
            <nav className="flex items-center justify-between px-6 md:px-16 py-6">

                <Link to="/" className="text-xl md:text-2xl tracking-wide font-light">
                IDOWU OLAKUNLE SAMUEL(IOS)
                </Link>

                <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
                    <a href="/" className="hover:bg-blue-800 transition">Home</a>
                    <Link to="/login" className="hover:bg-blue-800 transition"> Login </Link>
                    <Link to="/signup" className="hover:bg-blue-800 transition"> Signup </Link>
                
                </div>

            </nav>

        </header>
    )
}