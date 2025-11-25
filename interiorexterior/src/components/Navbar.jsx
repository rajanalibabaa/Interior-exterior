import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Home,
  Info,
  DesignServices,
  PhotoLibrary,
  ContactPhone,
  Close,
  Phone,
  Email,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import logo from "../assets/Interiorexterior_logo.png";
import { useNavigate } from 'react-router-dom'


  const servicesItems = [
    "Interior Design",
    "Exterior Design",
    "Waterproofing",
    "Wood Polishing",
    "Commercial Painting",  
  ];

const navigationItems = [
  { label: "Home", icon: <Home />, path: "/" },
  { label: "About us", icon: <Info />, path: "/about" },
  { label: "Services", icon: <DesignServices />, path: "/services" },
  { label: "Gallery", icon: <PhotoLibrary />, path: "/gallery" },
  { label: "Contact us", icon: <ContactPhone />, path: "/contact" },
];

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // Mobile states
  const [servicesDrawerOpen, setServicesDrawerOpen] = useState(false);
  const [bottomNavValue, setBottomNavValue] = useState(0);

  // Desktop dropdown state
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const servicesMenuOpen = Boolean(servicesAnchorEl);

  // Desktop menu handlers
  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  // Mobile bottom navigation handler
  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);

    // Special handling for Services - open drawer instead of navigating
    if (navigationItems[newValue].label === "Services") {
      setServicesDrawerOpen(true);
      return;
    }

    // Handle navigation for other items
    console.log("Navigating to:", navigationItems[newValue].label);
    // Add your routing logic here (React Router, etc.)
  };

  // Handle Services click on desktop
  const handleServicesClick = (event) => {
    handleServicesMenuOpen(event);
  };

  return (
    <Box sx={{ width: "100%", position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Top Bar - Same for all devices */}
      <Box
        sx={{
          display: "flex",
          padding: 2,
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "#fff",
        }}
      >
        {/* Contact Info - Desktop only */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Phone sx={{ color: "#E74646" }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Email sx={{ color: "#E74646" }} />
              <Typography variant="body2">info@interiorexterior.com</Typography>
            </Box>
          </Box>
        )}

        {/* Logo */}
        <img 
          src={logo}
          alt="Brand"
          style={{
            height: isMobile ? 50 : 70,
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => console.log("Navigate to home")} // Add navigation
        />
          

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={()=>navigate('/contact')}
          sx={{
            
            background: "#FF0060",
            borderRadius: 30,
            padding: "8px 20px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              background: "#ff0062b5",
            },
          }}
          startIcon={<Phone />}
        >
          Get Enquiry
        </Button>
      </Box>

      {/* Desktop Navigation */}
      {!isMobile && (
        <Box
          sx={{
            background: "#FF0060",
            maxWidth: '1250px',
            margin: "0 auto",
            color: "white",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-evenly",
            gap: 4,
          }}
        >
          {navigationItems.map((item) =>
            item.label === "Services" ? (
              <Box
                key={item.label}
                onClick={handleServicesClick}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 0",
                  "&:hover": { color: "#000000ff" },
                }}
              >
                {item.label}
                <KeyboardArrowDown
                  sx={{
                    transform: servicesMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                    ml: 0.5,
                  }}
                />
              </Box>
            ) : (
              <Typography
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  cursor: "pointer",
                  padding: "16px 0",
                  "&:hover": { color: "#000000ff" },
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Typography>
            )
          )}

          {/* Services Dropdown Menu */}
          <Menu
            anchorEl={servicesAnchorEl}
            open={servicesMenuOpen}
            onClose={handleServicesMenuClose}
            sx={{
              "& .MuiPaper-root": {
                background: "#4A102A",
                color: "white",
                marginTop: 1,
                minWidth: 200,
              },
            }}
          >

            {servicesItems.map((service) => (
              <MenuItem
                key={service}
                onClick={() => {
                  handleServicesMenuClose();
                  const path = service.toLowerCase().replace(/\s+/g, '');
                  navigate(`/services/${path}`);
                }}
                sx={{
                  "&:hover": { background: "#E83C91" },
                }}
              >
                {service}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: "#000000ff",
          }}
          elevation={3}
        >
          <BottomNavigation
            value={bottomNavValue}
            onChange={handleBottomNavChange}
            showLabels
            sx={{
              background: "#E74646",
              "& .MuiBottomNavigationAction-root": {
                color: "black",
                minWidth: "auto",
                padding: "6px 8px",
                "&.Mui-selected": {
                  color: "#ffffffff",
                },
              },
            }}
          >
            {navigationItems.map((item, index) => (
              <BottomNavigationAction
                key={item.label}
                label={item.label}
                icon={item.icon}
                sx={{
                  "& .MuiBottomNavigationAction-label": {
                    fontSize: "0.7rem",
                    marginTop: 0.5,
                    "&.Mui-selected": {
                      fontSize: "0.7rem",
                    },
                  },
                }}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}

      {/* Mobile Services Drawer */}
      <Drawer
        anchor="right"
        open={servicesDrawerOpen}
        onClose={() => setServicesDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "#f21313ff",
            color: "white",
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              pb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Our Services
            </Typography>
            <IconButton
              onClick={() => setServicesDrawerOpen(false)}
              sx={{ color: "white" }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* Services List */}
          <List sx={{ padding: 0 }}>
            {servicesItems.map((service) => (
              <ListItemButton
                onClick={() => {
                  const path = service.toLowerCase().replace(/\s+/g, '');
                  navigate(`/services/${path}`);
                  setServicesDrawerOpen(false);
                }}
              >
                <ListItemText primary={service} />
              </ListItemButton>
            ))}
          </List>

          {/* Contact Info in Drawer */}
          <Box sx={{ mt: 4, p: 2, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Phone sx={{ fontSize: 18, color: "#E83C91" }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email sx={{ fontSize: 18, color: "#E83C91" }} />
              <Typography variant="body2">info@interiorexterior.com</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}