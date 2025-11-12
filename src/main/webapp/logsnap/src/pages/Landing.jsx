import React from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Avatar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const features = [
    {
        title: "Smart Attendance",
        description: "Automated check-in/out with leave integration.",
    },
    {
        title: "Payroll Generation",
        description: "Auto-generate salary slips with tax and deduction breakdowns.",
    },
    {
        title: "Leave Workflow",
        description: "Apply and approve leaves with real-time tracking.",
    },
];

const testimonials = [
    {
        name: "Ananya Rao",
        title: "HR Manager, TechNova",
        quote:
            "LogSnap transformed our HR process. Payroll and attendance management is now effortless!",
    },
    {
        name: "Ravi Kumar",
        title: "CEO, ByteCore",
        quote:
            "Clean UI and powerful features. Support is quick and responsive. Highly recommended.",
    },
];

const LandingPage = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                LogSnap HR
            </Typography>
            <List>
                {["Features", "Pricing", "Contact Us"].map((text) => (
                    <ListItem button key={text} onClick={() => scrollToSection(`${text.toLowerCase().replace(" ", "-")}-section`)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <ListItem button onClick={() => navigate("/login")}>
                    <ListItemText primary="Login" />
                </ListItem>
                <ListItem button onClick={() => navigate("/signup")}>
                    <ListItemText primary="Admin Signup" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            {/* Top Navbar */}
            <Box
                sx={{
                    px: 4,
                    py: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    boxShadow: 1,
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    LogSnap HR
                </Typography>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                    <Button onClick={() => scrollToSection("features-section")} color="inherit">
                        Features
                    </Button>
                    <Button onClick={() => scrollToSection("pricing-section")} color="inherit">
                        Pricing
                    </Button>
                    <Button onClick={() => scrollToSection("contact-section")} color="inherit">
                        Contact Us
                    </Button>
                    <Button onClick={() => navigate("/login")} color="inherit">
                        Login
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => navigate("/signup")}>
                        Admin Signup
                    </Button>
                </Box>

                {/* Mobile menu */}
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                {drawer}
            </Drawer>

            {/* Hero Section */}
            <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            Run Payroll & HR on Autopilot
                        </Typography>
                        <Typography variant="h6" color="text.secondary" paragraph>
                            Manage employees, attendance, leave, and salary — all from one secure dashboard.
                        </Typography>
                        <Box mt={4}>
                            <Button variant="contained" size="large" onClick={() => navigate("/signup")} sx={{ mr: 2 }}>
                                Get Started Free
                            </Button>
                            <Button variant="outlined" size="large" onClick={() => scrollToSection("features-section")}>
                                See Features
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="../logo1.jpeg"
                            alt="Dashboard"
                            sx={{
                                width: "100%",
                                maxWidth: "500px",
                                height: "110px",
                                borderRadius: 3,
                                boxShadow: 3,
                                display: "block",
                                margin: "0 auto"
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Features Section */}
            <Box id="features-section" sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                        Key Features
                    </Typography>
                    <Grid container spacing={4} mt={2}>
                        {features.map((f, i) => (
                            <Grid item xs={12} md={4} key={i}>
                                <Card elevation={3}>
                                    <CardContent>
                                        <Box display="flex" alignItems="center" mb={2}>
                                            <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
                                            <Typography variant="h6">{f.title}</Typography>
                                        </Box>
                                        <Typography color="text.secondary">{f.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Pricing Section */}
            <Box id="pricing-section" sx={{ py: 8, backgroundColor: "#fff" }}>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                        Simple Pricing
                    </Typography>
                    <Typography align="center" color="text.secondary" mb={4}>
                        Transparent pricing for businesses of all sizes.
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ p: 3 }} elevation={2}>
                                <Typography variant="h6" fontWeight="bold">
                                    Starter
                                </Typography>
                                <Typography variant="h4" color="primary" my={2}>
                                    ₹999/mo
                                </Typography>
                                <Typography color="text.secondary" mb={2}>
                                    Up to 20 employees
                                </Typography>
                                <Button fullWidth variant="outlined" onClick={() => navigate("/signup")}>
                                    Choose Starter
                                </Button>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ p: 3, backgroundColor: "#e3f2fd" }} elevation={4}>
                                <Typography variant="h6" fontWeight="bold">
                                    Growth
                                </Typography>
                                <Typography variant="h4" color="primary" my={2}>
                                    ₹2499/mo
                                </Typography>
                                <Typography color="text.secondary" mb={2}>
                                    Up to 100 employees
                                </Typography>
                                <Button fullWidth variant="contained" onClick={() => navigate("/signup")}>
                                    Choose Growth
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Contact Section */}
            <Box id="contact-section" sx={{ py: 8, backgroundColor: "#f4f6f8" }}>
                <Container maxWidth="sm">
                    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography align="center" color="text.secondary" mb={4}>
                        Have questions or need help?
                    </Typography>
                    <Typography align="center" fontWeight="medium">
                        📧 support@logsnap.in
                    </Typography>
                </Container>
            </Box>

            {/* Testimonials */}
            <Box sx={{ py: 8, backgroundColor: "#fff" }}>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                        What Customers Say
                    </Typography>
                    <Grid container spacing={4} mt={2}>
                        {testimonials.map((t, i) => (
                            <Grid item xs={12} md={6} key={i}>
                                <Card elevation={2} sx={{ p: 3 }}>
                                    <Typography fontStyle="italic" mb={2}>
                                        “{t.quote}”
                                    </Typography>
                                    <Box display="flex" alignItems="center">
                                        <Avatar sx={{ mr: 2 }} />
                                        <Box>
                                            <Typography fontWeight="bold">{t.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {t.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Call To Action */}
            <Box sx={{ py: 6, textAlign: "center", backgroundColor: "#f1f1f1" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Start Your Free Trial Today
                </Typography>
                <Button variant="contained" size="large" color="primary" onClick={() => navigate("/signup")}>
                    Get Started Now
                </Button>
            </Box>

            {/* Footer */}
            <Box sx={{ py: 3, textAlign: "center", borderTop: "1px solid #ddd", backgroundColor: "#fff" }}>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} LogSnap. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;
