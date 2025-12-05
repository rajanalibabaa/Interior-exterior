import React, { useState } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import DesignServices from "@mui/icons-material/DesignServices";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";
import ContactPhone from "@mui/icons-material/ContactPhone";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import StartIcon from "@mui/icons-material/Start";
import Close from "@mui/icons-material/Close";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";

import { motion } from "framer-motion";
import logo from "../assets/Interiorexterior_logo.png";
import { href, useNavigate } from "react-router-dom";

const servicesItems = [
  "Interior Painting",
  "Exterior Painting",
  "Water proofing",
  "Wood Polishing",
  "Commercial Painting",
];
const googleMapsReviewsUrl = "https://www.google.com/maps/place/Interior+and+Exterior+Painters/@13.0365646,80.2177705,17z/data=!4m16!1m9!3m8!1s0x639b585e7802da2f:0xf91e8aa9132741a6!2sInterior+and+Exterior+Painters!8m2!3d13.0365646!4d80.2177705!9m1!1b1!16s%2Fg%2F11yrwtmq03!3m5!1s0x639b585e7802da2f:0xf91e8aa9132741a6!8m2!3d13.0365646!4d80.2177705!16s%2Fg%2F11yrwtmq03?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";


const navigationItems = [
  { label: "Home", icon: <Home />, href: "/" },
  { label: "About us", icon: <Info />, href: "/about" },
  { label: "Services", icon: <DesignServices />, href: "/services" },
  { label: "Gallery", icon: <PhotoLibrary />, href: "/gallery" },
  { label: "Contact", icon: <ContactPhone />, href: "/contact" },
  {label:"Rate Us",icon:<StartIcon/>,href:googleMapsReviewsUrl},
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

    const selectedItem = navigationItems[newValue];

    if (selectedItem.label === "Services") {
      setServicesDrawerOpen(true);
      return;
    }

    navigate(selectedItem.href,window.scrollTo(0, 0)); // FIXED
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
              <Phone sx={{ color: "#0097b1" }} />
              <Typography variant="body2">+91 8248638595</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Email sx={{ color: "#0097b1" }} />
              <Typography variant="body2">info@interiorandexteriorpainters.com</Typography>
            </Box>
          </Box>
        )}

        {/* Logo */}
        <img
          src={logo}
          alt="Brand"
          style={{ height: isMobile ? 50 : 70, cursor: "pointer" }}
          onClick={() => navigate("/",window.scrollTo(0, 0))}
        />

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/contact",window.scrollTo(0, 0))}
          sx={{
            background: "#0097b1",
            color: "white ",
            borderRadius: 30,
            padding: "8px 20px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              background: "#0097b1",
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
            background: "#0097b1",
            maxWidth: "1250px",
            margin: "0 auto",
            color: "white",
            fontWeight: 600,  
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
                  color:'white    ',
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 0",
                  "&:hover": { color: "#000000ff" },
                }}
              >
                {item.label}
                <KeyboardArrowDown
                  sx={{
                    transform: servicesMenuOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.3s",
                    ml: 0.5,
                  }}
                />
              </Box>
            ) : (
              <Typography
                key={item.label}
                onClick={() => navigate(item.href,window.scrollTo(0, 0))}
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
                background: "#0097b1",
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
                  const path = service.toLowerCase().replace(/\s+/g, "");
                  navigate(`/services/${path} `,window.scrollTo(0, 0));
                }}
                sx={{
                  "&:hover": { background: "#63cbe0" },
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
              background: "#63cbe0",
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
            height: 370,
            background: "#0097b1",
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
                  const path = service.toLowerCase().replace(/\s+/g, "");
                  navigate(`/services/${path} `,window.scrollTo(0, 0));
                  setServicesDrawerOpen(false);
                }}
              >
                <ListItemText primary={service} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
