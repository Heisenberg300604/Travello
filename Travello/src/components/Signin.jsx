import React, { useState } from 'react';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMockGoogleSignIn = () => {
    console.log('Mock Google Sign-In Success:', {
      email: formData.email,
    });
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-200">
      <div className="flex flex-col justify-center items-center p-10 w-full max-w-md bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-1 text-emerald-800">Login</h1>
        <p className="text-lg text-gray-600 mb-4">Welcome back!</p>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <HiMail className="text-gray-400 w-5 h-5 mx-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-black pb-2 mb-4">
            <HiLockClosed className="text-gray-400 w-5 h-5 mx-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => console.log('Forgot Password Clicked')}
            className="text-emerald-800 text-sm hover:underline mb-4 mx-auto"
          >
            Forgot Password?
          </button>
          <button
            type="submit"
            className="w-full p-3 bg-emerald-800 text-white rounded hover:bg-emerald-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-gray-600">or continue with</p>
          <button
            onClick={handleMockGoogleSignIn}
            className="ml-4 flex items-center p-3 bg-white border border-emerald-800 text-emerald-800 rounded hover:bg-emerald-100 transition duration-200"
          >
            <FcGoogle className="mr-2 w-5 h-5" />
            Google
          </button>
        </div>
        <p className="mt-4 text-gray-600">
          Don't have an account? 
          <a href="/signup" className="text-emerald-800 hover:underline"> Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
