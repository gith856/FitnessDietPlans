import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dumbbell, Menu, X } from 'lucide-react'
import { FaFacebookF,FaYoutube,FaTwitter,FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menu = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ]

  return (
    <>
      <nav className="bg-[#81b1ce] text-white sticky top-0 z-50 shadow-md">
        <div className="mx-auto px-6 py-4 flex justify-around items-center">

          {/* Logo */}
          <Link to="/" className="flex gap-3 items-center text-2xl font-semibold text-green-600">

            <Dumbbell size={26} />
            <span className='text-orange-500 font-bold'>
              Eat
              <span className='text-green-600'>
                Healthy
              </span>
            </span>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-white gap-8">
            {menu.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-xl hover:underline hover:decoration-orange-600 transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="justify-center gap-6 mt-4 hidden md:flex">
            <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaFacebookF /></a>
            <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaTwitter /></a>
            <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaInstagram /></a>
            <a className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-2xl hover:bg-orange-700 transition"><FaYoutube /></a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* -- */}

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-inner border-t border-gray-100">
            <div className="flex flex-col items-center py-4 space-y-3">
              {menu.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}> 
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* <header className="w-full bg-white shadow">
  
        <div className="w-full bg-[#FFF4EB] text-sm py-2 border-b border-orange-200">
          <div className="max-w-7xl mx-auto px-6 flex justify-between text-gray-700">
            <span>info@example.com</span>
            <span>🕒 Time 06:00 AM To 08:00 PM</span>
            <span>📞 +91 123 456 7890</span>
          </div>
        </div>


      
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


      
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
              alt="logo"
              className="w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">BodyShape</h1>
              <p className="text-xs text-gray-500 -mt-1 tracking-wide">Fitness & Workout</p>
            </div>
          </Link>


    
          <nav>
            <ul className="flex items-center gap-8 font-semibold text-gray-800 text-sm uppercase tracking-wide">
              <li className="hover:text-orange-500 cursor-pointer"><Link to="/">Home</Link></li>
              <li className="hover:text-orange-500 cursor-pointer"><Link to="/about">About</Link></li>
              <li className="hover:text-orange-500 cursor-pointer"><Link to="/service">Service</Link></li>
              <li className="hover:text-orange-500 cursor-pointer"><Link to="/pages">Pages</Link></li>
              <li className="hover:text-orange-500 cursor-pointer"><Link to="/blog">Blog</Link></li>
              <li className="hover:text-orange-500 cursor-pointer"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>


          
          <div className="flex items-center gap-4">
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border bg-gray-50 rounded-full py-2 px-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <span className="absolute left-4 top-2.5 text-gray-400">🔍</span>
            </div>


      
            <Link
              to="/appointment"
              className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-orange-600 transition-all"
            >
              Appointment
            </Link>
          </div>
        </div>
      </header> */}
    </>
  )
}

export default Navbar

