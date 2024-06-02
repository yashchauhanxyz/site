import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

const Navbar = () => {
  return (
    <nav>
      <div className="bg-[rgb(218,28,44)] container mx-auto px-4 py-2 flex  items-center h-20">
        <div className="flex items-center">
          <img src={logo} alt="Wells Fargo Logo" className="h-7 mr-4" />
        </div>
        <div className="w-1 bg-[#FCCC44] h-10 m-10 text-white"></div>
        <div className='font-serif text-3xl text-white'>Entilement Management</div>
        <div className="space-x-4 absolute right-5">
          <Link to="/LoginPage" className="bg-white rounded-full px-3 font-semibold py-2 hover:decoration-solid hover:underline">Log in</Link>
          <Link to="/SignupPage" className="bg-white rounded-full px-3 font-semibold py-2 hover:decoration-solid hover:underline">Sign up</Link>
        </div>
      </div>
      <div className='bg-[#FCCC44] h-1.5'></div>
    </nav>
  )
}

export default Navbar
