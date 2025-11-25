import React, { useState, useRef } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Container,
  Chip,
  useTheme,
  useMediaQuery,
  Dialog,
  Fab,
  IconButton
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { 
  Star, 
  Email,
  LocationOn,
  Schedule,
  Close
} from '@mui/icons-material';
import MessageIcon from '@mui/icons-material/Message';
import EnquiryForm from './EnquiryForm';
import { useNavigate } from 'react-router-dom';

// Feature Chip Component
const FeatureChip = ({ icon, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      duration: 0.5, 
      delay,
      ease: "easeOut"
    }}
    whileHover={{ scale: 1.05, y: -2 }}
  >
    <Chip
      icon={icon}
      label={text}
      sx={{
        background: 'linear-gradient(135deg, rgba(250, 243, 45, 0.15) 0%, rgba(247, 247, 33, 0.41) 100%)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.25)',
        color: 'white',
        fontWeight: 600,
        fontSize: { xs: '0.75rem', sm: '0.85rem' },
        py: { xs: 1, sm: 1.5 },
        px: 1,
        m: 0.5,
        '& .MuiChip-icon': {
          color: '#FFCC00',
          fontSize: '1rem'
        }
      }}
    />
  </motion.div>
);

// WhatsApp-style Floating Mobile Button
const FloatingMobileEnquiryButton = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={{
      position: 'fixed',
      // top: 30,
      bottom: 130,
      right: 15,
      zIndex: 1000
    }}
  >
    <Fab
      color="primary"
      aria-label="get quote"
      onClick={onClick}
      sx={{
        width: 45,
        height: 45,
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        '&:hover': {
          background: 'linear-gradient(135deg, #128C7E 0%, #0C6B5E 100%)',
          boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          borderRadius: '50%',
          zIndex: -1,
          animation: 'pulse 2s infinite',
        }
      }}
    >
      <MessageIcon 
        sx={{ 
          fontSize: 28,
          color: 'white'
        }} 
      />
    </Fab>
    
    {/* Floating notification dot */}
    <Box
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        width: 12,
        height: 12,
        backgroundColor: '#FF4081',
        borderRadius: '50%',
        border: '2px solid white',
        animation: 'pulse 1.5s infinite'
      }}
    />
  </motion.div>
);

// Main Component
const ProfessionalHeroBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const navigate = useNavigate();
  
  // State for mobile form dialog
  const [openMobileForm, setOpenMobileForm] = useState(false);

  const features = [
    { icon: <Star />, text: 'Premium Quality' },
    { icon: <MessageIcon />, text: '24/7 Support' },
    { icon: <LocationOn />, text: 'Local Experts' },
    { icon: <Schedule />, text: 'On-Time' },
    { icon: <Email />, text: 'Free Estimate' }
  ];

  return (
    <Box
      ref={containerRef}
      sx={{
        p: { xs: 2, sm: 4, md: 9 },
        mt: { xs: 0, md: 1 },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 'auto', md: '100vh' }
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 0 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              lg: '1.2fr 0.8fr' 
            },
            gap: { xs: 3, md: 4, lg: 6 },
            alignItems: 'center',
            minHeight: { xs: 'auto', lg: '70vh' }
          }}
        >
          {/* Content Section */}
          <Box sx={{ 
            position: 'relative', 
            zIndex: 2,
            textAlign: { xs: 'center', lg: 'left' }
          }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Main Title */}
              <Typography
                component={motion.h1}
                variant="h1"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.2 }}
                sx={{
                  fontSize: {
                    xs: "2.2rem",
                    sm: "2.8rem",
                    md: "3.2rem",
                    lg: "3.5rem",
                    xl: "3.8rem",
                  },
                  fontWeight: 900,
                  textAlign: { xs: "center", lg: "left" },
                  mb: 2,
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #FFF58A 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em"
                }}
              >
                Welcome to !!
                <Box component="br" sx={{ display: { xs: 'block', sm: 'block' } }} />
                Interior & Exterior
                <Box component="br" />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #FFF58A 0%, #FFFFFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Best Painting Services
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                component={motion.p}
                variant="h6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  fontWeight: 400,
                  textAlign: { xs: "center", lg: "left" },
                  mb: 3,
                  maxWidth: "600px",
                  mx: { xs: "auto", lg: 0 }
                }}
              >
                Experience the top-rated professional residential and commercial painting services.
              </Typography>

              {/* Feature Chips */}
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: 1, 
                mt: 2,
                mb: 3,
                justifyContent: { xs: 'center', lg: 'flex-start' }
              }}>
                {features.map((feature, index) => (
                  <FeatureChip
                    key={feature.text}
                    icon={feature.icon}
                    text={feature.text}
                    delay={index * 0.1}
                  />
                ))}
              </Box>

              {/* CTA Button */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", lg: "flex-start" },
                  mb: { xs: 4, md: 6 },
                }}
              >
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  onClick={() => navigate('/services')}
                  size="large"
                  sx={{
                    background: "#AB46D2",
                    fontWeight: 700,
                    px: { xs: 3, sm: 4 },
                    py: 1.8,
                    borderRadius: 2,
                    textTransform: "none",
                    minWidth: { xs: "180px", sm: "200px" },
                    fontSize: { xs: "0.9rem", sm: "1rem" }
                  }}
                >
                  Explore Services Now  &raquo;
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Form Section - Desktop */}
          {!isMobile && (
            <Box sx={{ 
              mt: 0,
              ml: { lg: 4, xl: 20 }
            }}>
              <EnquiryForm 
                title="Free Quote" 
                subtitle="Get started in minutes"
              />
            </Box>
          )}
        </Box>

        {/* Mobile Form Dialog */}
        {isMobile && (
          <>
            <FloatingMobileEnquiryButton onClick={() => setOpenMobileForm(true)} />
            <Dialog
              open={openMobileForm}
              onClose={() => setOpenMobileForm(false)}
              fullWidth
              maxWidth="sm"
              PaperProps={{
                sx: {
                  borderRadius: 3,
                  m: 2,
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  overflow: "hidden",
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  maxHeight: '90vh',
                  display: 'flex',
                  flexDirection: 'column'
                }
              }}
            >
              {/* Dialog Header */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #AB46D2 0%, #7B1FA2 100%)',
                  color: 'white',
                  p: 2,
                  position: 'relative'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Get Free Quote
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Start your project today
                    </Typography>
                  </Box>
                  <IconButton 
                    onClick={() => setOpenMobileForm(false)}
                    sx={{ 
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
              </Box>

              {/* Form Content */}
              <Box sx={{ 
                flex: 1,
                overflow: 'auto',
                p: 3
              }}>
                <EnquiryForm
                  title=""
                  subtitle=""
                  onClose={() => setOpenMobileForm(false)}
                  compact={true}
                />
              </Box>
            </Dialog>
          </>
        )}
      </Container>

      {/* Add pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default ProfessionalHeroBanner;