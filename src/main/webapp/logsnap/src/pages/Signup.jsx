import React, { useState } from 'react';
import AuthForm from '../components/Auth/AuthForm';
import { Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSignup = async ({ fullName, email, password, mobile }) => {
    try {
      const payload = {
        fullName,
        email,
        password,
        mobile,
        role: 'admin', // or whatever default role applies now
      };

      const response = await axios.post(`${API_URL}/api/auth/signup`, payload);

      if (response.status === 200 || response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setError('Signup failed. Try again.');
    }
  };

  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" mb={2}>Signup</Typography>
      {error && <Box color="red">{error}</Box>}
      <AuthForm isLogin={false} onSubmit={handleSignup} />
    </Box>
  );
};

export default SignupPage;
