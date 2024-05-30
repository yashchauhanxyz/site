import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

const Navbar = () => {
  return (
    <nav>
      <div className="bg-[rgb(218,28,44)] container mx-auto px-4 py-2 flex justify-between items-center h-20">
        <div className="flex items-center">
          <img src={logo} alt="Wells Fargo Logo" className="h-7 mr-4" />
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
        <div className="space-x-4">
          <Link to="/LoginPage" className="text-white">LogIn</Link>
          <Link to="/SignupPage" className="text-white">SignUp</Link>
        </div>
      </div>
      <div className='bg-[#FCCC44] h-1.5'></div>
    </nav>
  )
}

export default Navbar
