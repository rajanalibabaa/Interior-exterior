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
  IconButton
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { 
  Star, 
  Email,
  LocationOn,
  Schedule,
  Close,
  Message as MessageIcon
} from '@mui/icons-material';
import EnquiryForm from './EnquiryForm';
import { useNavigate } from 'react-router-dom';

// Feature Chip
const FeatureChip = ({ icon, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
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
        '& .MuiChip-icon': { color: '#FFCC00', fontSize: '1rem' }
      }}
    />
  </motion.div>
);

const ProfessionalHeroBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const navigate = useNavigate();

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
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 0 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.2fr 0.8fr' },
            gap: { xs: 3, md: 6 },
         
          }}
        >
          {/* Left Content */}
          <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem", lg: "3.5rem", xl: "3.8rem" },
                  fontWeight: 900,
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #FFF58A 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                  mb: 2
                }}
              >
                Welcome to !!
                <br />
                Interior & Exterior
                <br />
                <Box component="span" sx={{ background: "linear-gradient(135deg, #FFF58A 0%, #FFFFFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Best Painting Services
                </Box>
              </Typography>

              <Typography variant="h6" sx={{ color: 'white', mb: 3, maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                Experience the top-rated professional residential and commercial painting services.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'flex-start' }, gap: 1, my: 3 }}>
                {features.map((f, i) => <FeatureChip key={i} {...f} delay={i * 0.1} />)}
              </Box>

              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/services')}
                sx={{
                  background: "#AB46D2",
                  px: 4, py: 1.8,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'none'
                }}
              >
                Explore Services Now
              </Button>
            </motion.div>
          </Box>

          {/* Desktop Form */}
          {!isMobile && (
            <Box sx={{ ml: { lg: 4, xl: 20 } }}>
              <EnquiryForm title="Free Quote" subtitle="Get started in minutes" />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalHeroBanner;