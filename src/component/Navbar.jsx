import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar({ wishlistCount }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      
      <div className="flex justify-between items-center h-16 px-8">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide cursor-pointer">
          Vibrant
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/home">
            <li className="hover:text-gray-500 transition">Home</li>
          </Link>
          <Link to="/shop">
            <li className="hover:text-gray-500 transition">Shop</li>
          </Link>
          <Link to="/trending">
            <li className="hover:text-gray-500 transition">Trending</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-gray-500 transition">Contact</li>
          </Link>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl">

          <FiSearch className="cursor-pointer hover:scale-110 transition"/>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative">
            <FaRegHeart className="cursor-pointer hover:scale-110 transition" />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <FiShoppingCart className="cursor-pointer hover:scale-110 transition" />

          {/* User */}
          <Link to="/login">
            <LuUser className="cursor-pointer hover:scale-110 transition" />
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;