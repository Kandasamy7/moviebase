import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', values); // ✅ Change to /signup endpoint
      alert(response.data.message);
      navigate('/login'); // ✅ Redirect to login after signup
    } catch (error) {
      alert('Error signing up');
      console.error(error);
    }
  };
  

  return (
    <div className="flex w-full h-screen bg-blue-500 justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block font-semibold">Name</label>
            <input type="text" placeholder="Enter Name" name="name"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input type="email" placeholder="Enter Email" name="email"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="block font-semibold">Password</label>
            <input type="password" placeholder="Enter Password" name="password"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange} />
          </div>

          <button type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Sign Up
          </button>

          <p className="text-sm text-center mt-2">You agree to our policies</p>

          <button type="button" 
            className="w-full border bg-gray-200 text-black py-2 rounded-none hover:bg-gray-300"
            onClick={() => navigate('/login')}>  
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
