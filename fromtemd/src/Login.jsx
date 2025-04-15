import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
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
      const response = await await axios.post('http://localhost:3000/login', values);
      // ✅ Use IP
      alert(response.data.message);
      window.location.href = 'http://localhost:9001/movies/popular';
      // ✅ Use IP
      // console.log('Redirecting to:', 'http://192.168.205.9:8080/movies/popular');
    } catch (error) {
      alert('Error logging in');
      console.error(error);
    }
  };
  

  return (
    <div className="flex w-full h-screen bg-blue-500 justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
