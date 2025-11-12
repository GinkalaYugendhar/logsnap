// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import AuthForm from '../components/Auth/AuthForm';
import RoleToggle from '../components/Auth/RoleToggle';
import { Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [role, setRole] = useState('admin'); // Default role selection (for UI toggle)
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;


  const handleLogin = async ({ email, password }) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      const { accessToken, refreshToken, role, fullName } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('role', role);
      localStorage.setItem('fullName', fullName);

      if (role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else if (role === 'EMPLOYEE') {
        navigate('/employee/home');
      } else {
        navigate('/unauthorized');
      }

    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      setError('Invalid credentials or server error.');
    }
  };

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center" maxWidth="400px" margin="auto">
      <Typography variant="h4" mb={2}>Login</Typography>

      <RoleToggle role={role} setRole={setRole} />

      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}

      <AuthForm isLogin={true} role={role} onSubmit={handleLogin} />
    </Box>
  );
};

export default LoginPage;
