// src/components/Auth/RoleToggle.jsx
import React from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
} from '@mui/material';

const RoleToggle = ({ role, setRole }) => {
  return (
    <Box mb={2}>
      <Typography variant="subtitle1" mb={1}>Select Role</Typography>
      <ToggleButtonGroup
        value={role}
        exclusive
        onChange={(e, newRole) => newRole && setRole(newRole)}
        color="primary"
      >
        <ToggleButton value="admin">Admin</ToggleButton>
        <ToggleButton value="employee">Employee</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default RoleToggle;
