import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Fab } from "@mui/material";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ServiceDetail from './components/ServicesCardForAll';
import { useState, useEffect } from 'react';

// MUI Theme
const theme = createTheme({
  palette: {
    text: { primary: "#333333" },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
  },
});

const colors = {
  primary: "#F43838",
  secondary: "#FF7F50",
};

// WhatsApp Component
const WhatsAppButton = () => {
  const mobileNumber = "917350000000"; 
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${mobileNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
   <Fab
  onClick={handleWhatsAppClick}
  sx={{
    position: "fixed",
    bottom: { xs: 130, sm: 470, md: 370, lg: 270 },   
    right:  { xs: 4, sm: 20, md: 25 },             
    backgroundColor: "#25D366",
    color: "#fff",

    width:  { xs: 50, sm: 55, md: 55, lg: 60 },      
    height: { xs: 50, sm: 55, md: 55, lg: 60 },      

    zIndex: 9999,
    "&:hover": {
      backgroundColor: "#1ebe5d",
      transform: "scale(1.1)",
    },
    transition: "all 0.3s ease",
  }}
  aria-label="Contact via WhatsApp"
>
  <WhatsAppIcon sx={{ fontSize: { xs: 24, sm: 26, md: 30, lg: 32 } }} />
</Fab>

  );
};

// Smart Scroll Component (Up/Down)
const SmartScrollButton = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

 useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const isAtTop = scrollY <= 50;
    const isAtBottom = scrollY + windowHeight >= fullHeight - 50;

    if (isAtBottom) setScrollDirection("up");     
    else if (isAtTop) setScrollDirection("down");
    else setScrollDirection("up");                
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const handleScrollClick = () => {
    if (scrollDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <Fab
      onClick={handleScrollClick}
      size="medium"
      aria-label="Scroll button"
      sx={{
        position: "fixed",
        bottom: { xs: 60, sm: 60, md: 25 },
        right: { xs: 15, sm: 20, md: 25 },
        background: `#ff0062`,
        color: "#fff",
        boxShadow: `0 4px 25px ${colors.primary}55`,
        "&:hover": {
          transform: "translateY(-4px)",
          background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
        },
        transition: "all 0.3s ease",
        zIndex: 9999,
        width: { xs: 54, sm: 58, md: 52 },
        height: { xs: 54, sm: 58, md: 52 },
      }}
    >
      {scrollDirection === "up" ? (
        <KeyboardDoubleArrowUpIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />
      ) : (
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />
      )}
    </Fab>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        
        {/* Floating Buttons */}
        <WhatsAppButton />
        <SmartScrollButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;