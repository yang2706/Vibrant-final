import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <span className="font-semibold cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Signup */}
        <button className="w-full border border-gray-300 py-2 rounded-lg mb-3 hover:bg-gray-100 transition">
          Sign up with Google
        </button>

        <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
          Sign up with Facebook
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;