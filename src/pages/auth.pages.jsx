import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  let navigate = useNavigate();
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [description, setDescription] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      Name,
      email,
      password,
      description,
    };

    try {
      if (isSignUp) {
        // Sign Up
        const response = await axios.post('api/auth/signup', userData);
        console.log('Sign Up Response:', response.data);
        navigate('/auth');
        window.location.reload();
      } else {
        // Login
        const response = await axios.post('api/auth/signin', userData);
        console.log('Login Response:', response.data);
        localStorage.setItem('id', response.data.user._id);
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-sm w-full p-8 bg-white rounded-lg shadow-md mt-8 mb-8">
        <h2 className="text-center mb-6">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field mb-4 w-full border border-gray-300 rounded-md px-4 py-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="input-field mb-4 w-full border border-gray-300 rounded-md px-4 py-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isSignUp && (
            <input
              className="input-field mb-4 w-full border border-gray-300 rounded-md px-4 py-2"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          {isSignUp && (
            <>
              <input
                className="input-field mb-4 w-full border border-gray-300 rounded-md px-4 py-2"
                type="text"
                maxLength="20"
                placeholder="Enter your Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <textarea
                className="input-field mb-4 w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="Description about yourself"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn-primary mt-4 w-full px-4 py-2 bg-indigo-500 text-white rounded-md"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-6">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
