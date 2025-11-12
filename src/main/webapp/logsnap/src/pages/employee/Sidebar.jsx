import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  Typography,
  Box,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';

import {
  Home,
  CalendarMonth,
  Help,
  ExpandLess,
  ExpandMore,
  ChevronLeft
} from '@mui/icons-material';

import SettingsIcon from '@mui/icons-material/Settings';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openWorklife, setOpenWorklife] = useState(false);
  const [openToDo, setOpenToDo] = useState(false);
  const [openSalary, setOpenSalary] = useState(false);
  const [openLeave, setOpenLeave] = useState(false);
  const [openAttendence, setOpenAttendence] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const collapseHandlers = {
    worklife: () => {
      setOpenWorklife(!openWorklife);
      setOpenToDo(false); setOpenSalary(false); setOpenLeave(false); setOpenAttendence(false);
    },
    todo: () => {
      setOpenToDo(!openToDo);
      setOpenWorklife(false); setOpenSalary(false); setOpenLeave(false); setOpenAttendence(false);
    },
    salary: () => {
      setOpenSalary(!openSalary);
      setOpenWorklife(false); setOpenToDo(false); setOpenLeave(false); setOpenAttendence(false);
    },
    leave: () => {
      setOpenLeave(!openLeave);
      setOpenWorklife(false); setOpenToDo(false); setOpenSalary(false); setOpenAttendence(false);
    },
    attendence: () => {
      setOpenAttendence(!openAttendence);
      setOpenWorklife(false); setOpenToDo(false); setOpenSalary(false); setOpenLeave(false);
    },
  };

  const drawerContent = (
    <Box sx={{ width: 240, bgcolor: '#f9fafc', height: '100%' }}>
      {/* Left arrow to close drawer on mobile */}
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeft />
          </IconButton>
        </Box>
      )}

      {/* Title */}
      <Box sx={{ p: 2, fontWeight: 'bold' }}>COMPANY</Box>

      {/* Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Avatar sx={{ width: 40, height: 40, mr: 1 }} />
        <Box>
          <Typography variant="body1" fontWeight="bold">
            Hi {localStorage.getItem('fullName') || 'User'}
          </Typography>
          <Typography variant="body2" color="primary" sx={{ fontSize: '12px', cursor: 'pointer' }}>
            View My Info
          </Typography>
        </Box>
        <IconButton sx={{ ml: 1 }}>
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Box>

      <Divider />

      {/* Navigation Links */}
      <List >
        <ListItem button component={Link} to="/employee/home">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" sx={{ color: 'rgb(70,70,70)' }}/>
        </ListItem>

        <ListItem button component={Link} to="/employee/engage">
          <ListItemIcon><SensorsOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Engage" sx={{ color: 'rgb(70,70,70)' }}/>
        </ListItem>

        <ListItem button onClick={collapseHandlers.worklife}>
          <ListItemIcon><WidgetsIcon /></ListItemIcon>
          <ListItemText primary="My Worklife" />
          {openWorklife ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openWorklife} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/employee/kudos"><ListItemText primary="Kudos" sx={{ color: 'rgb(70,70,70)' }}/></ListItem>
            <ListItem button component={Link} to="/employee/feedback"><ListItemText primary="Feedback" sx={{ color: 'rgb(70,70,70)' }}/></ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={collapseHandlers.todo}>
          <ListItemIcon><ContentPasteIcon /></ListItemIcon>
          <ListItemText primary="To Do" sx={{ color: 'rgb(70,70,70)' }}/>
          {openToDo ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openToDo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button  component={Link} to="/employee/review"><ListItemText primary="Review" sx={{ color: 'rgb(70,70,70)' }}/></ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={collapseHandlers.salary}>
          <ListItemIcon><CurrencyRupeeIcon /></ListItemIcon>
          <ListItemText primary="Salary" />
          {openSalary ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSalary} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {[
  { text: 'Payslips', path: '/employee/payslip' },
  { text: 'YDT Reports', path: '/employee/ydtreport' },
  { text: 'IT Statement', path: '/employee/itstatement' },
  { text: 'IT Declaration', path: '/employee/itdeclaration' },
  { text: 'Reimbursement', path: '/employee/reimbursement' },
  { text: 'Proof Of Investment', path: '/employee/proofofinvestment' },
  { text: 'FBP Declaration', path: '/employee/fbpdeclaration' }
].map(({ text, path }) => (
  <ListItem button key={text} component={Link} to={path}>
    <ListItemText primary={text} sx={{ color: 'rgb(70,70,70)' }}/>
  </ListItem>
))}
          </List>
        </Collapse>

        <ListItem button onClick={collapseHandlers.leave}>
          <ListItemIcon><CalendarMonth /></ListItemIcon>
          <ListItemText primary="Leave" />
          {openLeave ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openLeave} timeout="auto" unmountOnExit>
           <List component="div" disablePadding sx={{ pl: 4 }}>
    {[
      { text: 'Leave Apply', path: '/employee/leaveapply' },
      { text: 'Leave Balances', path: '/employee/leavebalance' },
      { text: 'Leave Calendar', path: '/employee/leavecalendar' }
    ].map(({ text, path }) => (
      <ListItem button key={text} component={Link} to={path}>
        <ListItemText primary={text} sx={{ color: 'rgb(70,70,70)' }}/>
      </ListItem>
    ))}
  </List>
        </Collapse>

        <ListItem button onClick={collapseHandlers.attendence}>
          <ListItemIcon><EventAvailableOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Attendance" />
          {openAttendence ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openAttendence} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button  component={Link} to="/employee/attendenceinfo"><ListItemText primary="Attendance Info" sx={{ color: 'rgb(70,70,70)' }}/></ListItem>
          </List>
        </Collapse>

        <ListItem button component={Link} to="/employee/documentcenter"><ListItemIcon><DocumentScannerOutlinedIcon /></ListItemIcon><ListItemText primary="Document Center" sx={{ color: 'rgb(70,70,70)' }}/></ListItem>
        <ListItem button component={Link} to="/employee/helpdesk"><ListItemIcon><InfoOutlinedIcon /></ListItemIcon><ListItemText primary="Helpdesk" sx={{ color: 'rgb(70,70,70)' }}/></ListItem>
        <ListItem button component={Link} to="/employee/requesthub"><ListItemIcon><Help /></ListItemIcon><ListItemText primary="Request Hub" sx={{ color: 'rgb(70,70,70)' }}/></ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Show hamburger ONLY when drawer is closed in mobile */}
      {isMobile && !mobileOpen && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
