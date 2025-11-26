import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, Fab, Box, Dialog, IconButton, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ServiceDetail from './components/ServicesCardForAll';
import EnquiryForm from './components/EnquiryForm'; // Import form
import { useState, useEffect } from 'react';

const theme = createTheme({
  typography: { fontFamily: ["Poppins", "Roboto", "sans-serif"].join(",") },
});

// WhatsApp Button
const WhatsAppButton = () => {
  const handleClick = () => window.open("https://wa.me/917350000000", "_blank");

  return (
    <Fab
      onClick={handleClick}
      sx={{
        position: "fixed",
        bottom: { xs: 140, sm: 100, md: 80, lg: 90 },
        right: { xs: 16, md: 30 },
        bgcolor: "#25D366",
        color: "white",
        width: { xs: 56, md: 64 },
        height: { xs: 56, md: 64 },
        zIndex: 9999,
        "&:hover": { bgcolor: "#1ebe5d", transform: "scale(1.1)" },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: { xs: 30, md: 36 } }} />
    </Fab>
  );
};

// Global Enquiry Floating Button + Dialog
const GlobalEnquiryButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ position: 'fixed', bottom: 210, right: 16, zIndex: 9999 }}
      >
        <Fab
          onClick={() => setOpen(true)}
          sx={{
            width: 56,
            height: 56,
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #128C7E 0%, #0C6B5E 100%)',
              boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: -4,
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              borderRadius: '50%',
              zIndex: -1,
              animation: 'pulse 2s infinite',
            }
          }}
        >
          <MessageIcon sx={{ fontSize: 32, color: 'white' }} />
          <Box sx={{
            position: 'absolute',
            top: 8, right: 8,
            width: 14, height: 14,
            // bgcolor: '#FF4081',
            borderRadius: '50%',
            // border: '3px solid white',
            animation: 'pulse 1.5s infinite'
          }} />
        </Fab>
      </motion.div>

      {/* Dialog Form */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { borderRadius: 3, m: 2, overflow: 'hidden' } }}
      >
        <Box sx={{ bgcolor: 'linear-gradient(135deg, #AB46D2 0%, #7B1FA2 100%)', color: 'white', p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Typography variant="h6" fontWeight="bold">Get Free Quote</Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>We'll reply in minutes</Typography>
            </div>
            <IconButton onClick={() => setOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ p: 3, bgcolor: '#fff' }}>
          <EnquiryForm compact={true} onClose={() => setOpen(false)} />
        </Box>
      </Dialog>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
      `}</style>
    </>
  );
};

// Scroll Button (unchanged)
const SmartScrollButton = () => {
  const [dir, setDir] = useState("up");

  useEffect(() => {
    const handle = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      const atTop = window.scrollY < 100;
      setDir(atBottom ? "up" : atTop ? "down" : "up");
    };
    window.addEventListener("scroll", handle);
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: dir === "up" ? 0 : document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <Fab
      onClick={scroll}
      sx={{
        position: "fixed",
        bottom: { xs: 20, md: 30 },
        right: { xs: 16, md: 30 },
        bgcolor: "#ff0062",
        color: "white",
        zIndex: 9998,
        "&:hover": { transform: "translateY(-4px)" ,  bgcolor: "#ff0062" , color: "white" }
      }}
    >
      {dir === "up" ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleDownIcon />}
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

        {/* Global Floating Buttons */}
        <GlobalEnquiryButton />   {/* New: Visible on ALL pages */}
        <WhatsAppButton />
        <SmartScrollButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;