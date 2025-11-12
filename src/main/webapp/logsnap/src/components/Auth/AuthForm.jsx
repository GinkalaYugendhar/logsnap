import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AuthForm = ({ isLogin, onSubmit }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Confirm password validation
    if (!isLogin && form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    const { confirmPassword, ...payload } = form;
    onSubmit(payload);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      {!isLogin && (
        <TextField
          label="Full Name"
          name="fullName"
          fullWidth
          margin="normal"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      )}
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        value={form.email}
        onChange={handleChange}
        required
      />
      {!isLogin && (
        <TextField
          label="Mobile"
          name="mobile"
          type="tel"
          fullWidth
          margin="normal"
          value={form.mobile}
          onChange={handleChange}
          required
        />
      )}
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={form.password}
        onChange={handleChange}
        required
      />
      {!isLogin && (
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
      )}

      {error && <Typography color="error" mt={1}>{error}</Typography>}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        {isLogin ? 'Login' : 'Signup'}
      </Button>
    </Box>
  );
};

export default AuthForm;
