import React, { useState, useRef } from 'react';
import {useTheme,useMediaQuery,} from '@mui/material';

import Button  from '@mui/material/Button';
import Box  from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import Chip  from '@mui/material/Chip';
import Dialog  from '@mui/material/Dialog';
import Fab  from '@mui/material/Fab';
import IconButton  from '@mui/material/IconButton';
import { motion, useInView } from 'framer-motion';

import MessageIcon from '@mui/icons-material/Message';
import Star from '@mui/icons-material/Star';
import Email from '@mui/icons-material/Email';
import LocationOn from '@mui/icons-material/LocationOn';
import Schedule from '@mui/icons-material/Schedule';
import Close from '@mui/icons-material/Close';
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
        // background: 'linear-gradient(135deg, rgba(250, 243, 45, 0.15) 0%, rgba(247, 247, 33, 0.41) 100%)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.25)',
        color: 'white',
        fontWeight: 600,
        fontSize: { xs: '0.75rem', sm: '0.85rem' },
        py: { xs: 1, sm: 1.5 },
        px: 1,
        m: 0.5,
        '& .MuiChip-icon': {
          color: '#ffffffff',
          fontSize: '1rem'
        }
      }}
    />
  </motion.div>
);

//  Floating Mobile Button
const FloatingMobileEnquiryButton = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    whileTap={{ scale: 0.9 }}
    style={{
      position: 'fixed',
      bottom: 270,
      right: 3,
       
      zIndex: 9999,
    }}
  >
    <Fab
      color="primary"
      aria-label="get quote"
      onClick={onClick}
     sx={{
  position: "sticky",
  width: { xs: 58, sm: 58, md: 52 },
  height: { xs: 58, sm: 58, md: 52 },
  right: {  sm: 30, md: 40 },   // keep icon inside on all screens
  bottom: { xs: 20, sm: 30, md: 40 },  // comfortable bottom spacing
  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
  boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
  borderRadius: "50%",
  zIndex: 9999,
}}
    >
      <MessageIcon
        sx={{
          fontSize: 28,
          color: 'white'
        }}
      />
    </Fab>

    
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
        mt: { xs: 0, md: 0 },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 'auto', md: '50vh' }
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 0 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1.2fr 0.8fr',

            },

            gap: { xs: 3, md: 4, lg: 6 },
            // alignItems: 'center',
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
                  background: "linear-gradient(135deg, #0097b1 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em"
                }}
              >
                Welcome to !!
                <Box component="br" sx={{ display: { xs: 'block', sm: 'block' } }} />
                Interior And  Exterior Painters 
                <Box component="br" /> 
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #0097b1 0%, #FFFFFF 100%)",
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
                  onClick={() => navigate('/services/interiordesign',window.scrollTo(0, 0)  )}
                  size="large"
                  sx={{
                    background: "#0097b1",
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
              p: 0,
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
            <FloatingMobileEnquiryButton
              onClick={() => setOpenMobileForm(true)} />
            <Dialog
              open={openMobileForm}
              onClose={() => setOpenMobileForm(false)}
              fullWidth
              maxWidth="sm"

            >
              <IconButton
                onClick={() => setOpenMobileForm(false)}
                sx={{ position: 'absolute', top: 0, right: 0, zIndex: 10, }}
              >
                <Close color='error' />
              </IconButton>
              {/* Form Content */}

              <EnquiryForm
                title=""
                subtitle=""
                onClose={() => setOpenMobileForm(false)}
                compact={true}
              />

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