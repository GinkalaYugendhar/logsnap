import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Tooltip, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation } from 'react-router-dom';

export default function Topbar({ isMobile, onMenuClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Map pathnames to titles
  const pageTitleMap = {
    '/employee/home': 'Home',
    '/employee/engage': 'Engage',
    '/employee/kudos': 'Kudos',
    '/employee/feedback': 'Feedback',
    '/employee/review': 'Review',
    '/employee/payslip': 'Payslip',
    '/employee/ydtreport': 'YDT Report',
    '/employee/itstatement': 'IT Statement',
    '/employee/itdeclaration': 'IT Declaration',
    '/employee/reimbursement': 'Reimbursement',
    '/employee/proofofinvestment': 'Proof Of Investment',
    '/employee/fbpdeclaration': 'FBP Declaration',
    '/employee/leaveapply': 'Leave Apply',
    '/employee/leavebalance': 'Leave Balance',
    '/employee/leavecalendar': 'Leave Calendar',
    '/employee/attendenceinfo': 'Attendance Info',
    '/employee/documentcenter': 'Document Center',
    '/employee/helpdesk': 'Helpdesk',
    '/employee/requesthub': 'Request Hub',
  };

  // Get dynamic title from path
  const path = location.pathname;
  const title = pageTitleMap[path] || 'Dashboard';

  return (
    <AppBar position="static" elevation={0} sx={{ background: '#f9fafc', color: 'black', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side (Dynamic Page title) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
              mr: 1,
            }}
          />
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        {/* Right side */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Quick Links */}
          <Box sx={{ mr: 2 }}>
            <Tooltip title="Quick Links">
              <Typography
                onClick={handleMenuClick}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '14px' }}
              >
                Quick Links <ArrowDropDownIcon fontSize="small" />
              </Typography>
            </Tooltip>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Support</MenuItem>
            </Menu>
          </Box>

          {/* Notifications */}
          <IconButton sx={{ mr: 2 }}>
            <Badge color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Logout */}
          <IconButton color="inherit">
            <PowerSettingsNewIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
