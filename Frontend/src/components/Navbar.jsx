import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"


export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 w-full z-50 ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-white/30 backdrop-blur-0"}`}>
            
            <nav className="flex items-center justify-between px-6 md:px-16 py-6">

                <Link to="/" className="text-xl md:text-2xl tracking-wide font-light">
                ARCHIVE
                </Link>

                <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
                    <Link to="/" className="hover:opacity-60 duration-300"> Home </Link>
                    <Link to="/login" className="hover:opacity-60 duration-300"> Login </Link>
                    <Link to="/signup" className="hover:opacity-60 duration-300"> Signup </Link>
                
                    <Link to="/dashboard" className="hover:opacity-60 duration-300"> Dashboard </Link>
                </div>

            </nav>

        </header>
    )
}