
import Navbar from "../components/Navbar.jsx"
import "../styles/home.css"
import {FaInstagram, FaLinkedin, FaEnvelope} from "react-icons/fa"
import Animation from "../components/animination.jsx"



export default function Home () {
  return (
    <main className="bg-[#f5f3ef] text-black pt-24">

        <Navbar />

        <Animation>
        <section className="relative h-screen overflow-hidden">

            <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop"
            alt="Architecture"
            className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-24">

                <div className="max-w-5xl">

                    <p className="uppercase tracking-[0.4em] text-white/70 text-sm mb-6">
                        Architectural Portfolio
                    </p>

                    <h1 className="editorial-heading text-white text-5xl md:text-8xl font-light leading-[0.95] max-w-5xl">
                        Designing spaces
                        that shape
                        the future.
                    </h1>

                    <p className="mt-8 text-lg text-white/80 max-w-xl leading-relaxed">
                        An architectural portfolio exploring modern urban design,
                        sustainability, and human-centered experiences.
                    </p>

                </div>

            </div>

        </section>
        </Animation>

        
        <Animation>
        <section className="px-6 md:px-16 py-24">
            <div className="mb-20">
                <h2 className="editorial-heading text-4xl md:text-7xl font-light"> Selected Works</h2>
                <p className="mt-6 text-gray-600 max-w-2xl text-lg"> Showcasing projects that blend aesthetic innovation with functional clarity, these works reflect a commitment to contextual design and sustainable practices. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7">
                    <div className="image-hover">
                        <img 
                        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop" alt="Architecture" 
                        className="w-full h-[700px] object-cover"/>
                    </div>
                    
                    <div className="mt-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                            Residential
                        </p>
                        <h3 className="text-3xl md:text-5xl font-light mt-2"> 
                        Urban Dwelling
                        </h3>
                    </div>

                </div>

                <div className="md:col-span-5 flex flex-col gap-16 md:pt-32">
                    <div>
                        <div className="image-hover">
                            <img 
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" 
                            alt="Interior" 
                            className="w-full h-[420px] object-cover"/>

                        </div>
                        <div className="mt-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                                Interior

                            </p>
                            <h3 className="text-2xl md:text-4xl font-light mt-2">
                                Concrete Serenity

                            </h3>

                        </div>
                    </div>
                    <div>
                        <div className="image-hover">
                            <img 
                            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop" 
                            alt="Modern Building"
                            className="w-full h-[320px] object-cover"/>

                        </div>
                        <div className="mt-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                                Commercial
                                
                            </p>
                            <h3 className="text-2xl md:text-4xl font-light mt-2">
                                Vertical Oasis

                            </h3>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        </Animation>

        <Animation>
        <section className="px-6 md:px-16 py-32 border-t border-gray-200">

            <div className="max-w-5xl">

                <p className="fade-text text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
                Philosophy
                </p>

                <h2 className="editorial-heading text-4xl md:text-7xl font-light leading-tight">
                Architecture is not merely the creation of buildings —
                it is the shaping of experience, memory, and human connection.
                </h2>

            </div>

        </section>
        </Animation>

        <Animation>
        <footer className="px-6 md:px-16 py-20 border-t border-gray-200">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">

                <div>
                   <h3 className="text-2xl font-light tracking-wide">
                            ARCHIVE
                   </h3>
                      <p className="text-gray-500 mt-2">
                        Architecture & Design Portfolio
                      </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 text-sm uppercase tracking-widest text-gray-600">
                    <a href="#" className="hover:text-black transition"> <FaInstagram size={28}/></a>
                    <a href="#" className="hover:text-black transition"> <FaLinkedin size={28} /></a>
                    <a href="#" className="hover:text-black transition"> <FaEnvelope size={28} /></a>
                </div>

            </div>

            <p className="text-center text-gray-400 text-xs mt-16">
                 {new Date().getFullYear()} ARCHIVE. All rights reserved.
            </p>

        </footer>
        </Animation>

    </main>
  )
}
