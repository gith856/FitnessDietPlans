import React from 'react'
import { Dumbbell,User } from 'lucide-react'
import { FaFacebookF,FaYoutube,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#377093] text-white  py-8 text-center">

            <div className="flex flex-col items-center mb-5">
                <Dumbbell size={26} className='text-green-500' />
                <h2 className="text-xl font-bold text-green-600"><span className='text-yellow-600'>Eat</span>Healthy</h2>
                <p className="text-sm text-indigo-300 mt-1 italic">
                    PERSONAL FITNESS TRAINER
                </p>
            </div>


            {/* Navigation */}
            <nav className="flex justify-center gap-10 text-lg mb-4">
                <a href="/" className="hover:underline hover:decoration-orange-400 transition">Home</a>
                <a href="/about" className="hover:underline hover:decoration-orange-400 transition">About</a>
                <a href="/contact" className="hover:underline hover:decoration-orange-400 transition">Contact</a>
                <a href="/login" className="hover:underline hover:decoration-orange-400 transition">Login</a>
            </nav>


            {/* Social Icons */}
            <div className="flex justify-center text-white gap-6 mt-4">
                <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaFacebookF /></a>
                <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaTwitter /></a>
                <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaInstagram /></a>
                <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaYoutube /></a>
            </div>


            {/* Bottom Line */}
            <div className="mt-4 w-full border-t border-indigo-600/40">
                <div className="flex justify-center items-center gap-2 mt-2">
                    <User className="w-4 h-4" />
                    <span>Powered by SmartFit AI — Made with ❤ for every fitness enthusiast.</span>
                </div>
                © {new Date().getFullYear()} EatHealthy. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer