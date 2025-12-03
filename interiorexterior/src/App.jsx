import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate,useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Fab } from "@mui/material";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageChannel from "@mui/icons-material/Message";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ServiceDetail from './components/ServicesCardForAll';
import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import PhoneIcon from "@mui/icons-material/Phone";

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
  primary: "#63cbe0",
  secondary: "#0097b1",
};



const PhoneCallButton = () => {
  const phoneNumber = "+918248638595";   // your number here

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Fab
      onClick={handleCallClick}
      sx={{
        position: "fixed",
        bottom: { xs: 80, sm: 200, md: 280, lg: 120 },   
        right:  { xs: 295, sm: 10, md: 25 },             

        backgroundColor: "#28a745",
        color: "#fff",

        width:  { xs: 58, sm: 55, md: 55, lg: 60 },      
        height: { xs: 58, sm: 55, md: 55, lg: 60 },      

        zIndex: 9999,
        "&:hover": {
          backgroundColor: "#218838",
          transform: "scale(1.1)",
        },
        transition: "all 0.3s ease",
      }}
      aria-label="Call Now"
    >
      <PhoneIcon sx={{ fontSize: { xs: 28, sm: 26, md: 30, lg: 32 } }} />
    </Fab>
  );
};



// WhatsApp Component
const WhatsAppButton = () => {
  const mobileNumber = "+918248638595"; 
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${mobileNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
   <Fab
  onClick={handleWhatsAppClick}
  sx={{
    position: "fixed",
    bottom: { xs: 170, sm: 470, md: 370, lg: 200 },   
    right:  { xs: 4, sm: 20, md: 25 },             
    backgroundColor: "#25D366",
    color: "#fff",

    width:  { xs: 58, sm: 55, md: 55, lg: 60 },      
    height: { xs: 58, sm: 55, md: 55, lg: 60 },      

    zIndex: 9999,
    "&:hover": {
      backgroundColor: "#1ebe5d",
      transform: "scale(1.1)",
    },
    transition: "all 0.3s ease",
  }}
  aria-label="Contact via WhatsApp"
>
  <WhatsAppIcon sx={{ fontSize: { xs: 28, sm: 26, md: 30, lg: 32 } }} />
</Fab>

  );
};
const WhatsAppButton2 = () => {
  // const mobileNumber = "+918248638595"; 
  const Navigate = useNavigate();
  // const handleWhatsAppClick = () => {
  //   const whatsappUrl = `https://wa.me/${mobileNumber}`;
  //   window.open(whatsappUrl, '_blank');
  // };

  return (
   <Fab
  onClick={() => Navigate("/contact",window.scrollTo(0, 0))}
  sx={{
    position: "fixed",
    bottom: { xs: 170, sm: 470, md: 350,  },   
    right:  { xs: 4, sm: 20, md: 25 },             
    backgroundColor: "#25D366",
    color: "#fff",

    width:  { xs: 58, sm: 55, md: 55, lg: 60 },      
    height: { xs: 58, sm: 55, md: 55, lg: 60 },      

    zIndex: 9999,
    "&:hover": {
      backgroundColor: "#1ebe5d",
      transform: "scale(1.1)",
    },
    transition: "all 0.3s ease",
  }}
  aria-label="Contact via WhatsApp"
>
  <MessageChannel sx={{ fontSize: { xs: 28, sm: 26, md: 30, lg: 32 } }} />
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
        bottom: { xs: 90, sm: 360, md: 25 },
        right: { xs: 5, sm: 15, md: 25 },
        background: `#0097b1`,
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
  const isMobile = useMediaQuery("(max-width: 600px)");
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
        {!isMobile && <WhatsAppButton2 />}
      <PhoneCallButton/>
        <SmartScrollButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;