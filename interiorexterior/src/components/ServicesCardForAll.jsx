// ServiceDetail.jsx
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useParams } from 'react-router-dom';
import servicesData from '../components/ServicesDatas.jsx'; // Correct import

const ServiceDetail = () => {
  const { serviceId } = useParams(); // e.g., "interiordesign", "exteriordesign"
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Direct match: "interiordesign" → servicesData.interiordesign
  const service = servicesData[serviceId];
  console.log('===',service);
  

  if (!service) {    
    return (
      <Container sx={{ py: 20, textAlign: 'center' }}>
        <Typography variant="h4" color="error">Service not found!</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          padding: { xs: '60px 20px', md: '120px 40px' },
          backgroundImage:`url(${service.headingImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: { xs: 'center', md: 'left' },
          minHeight: { xs: '70vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.8rem', md: '4.5rem' },
                  lineHeight: 1.1,
                }}
              >
                {service.heading}
              </Typography>
              <Typography variant="h4" sx={{ opacity: 0.95, fontWeight: 500 }}>
                {service.description}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.9, color: '#333' }}>
              {service.headPara}
            </Typography>

            <Typography paragraph sx={{ fontWeight: 700, mt: 6, mb: 3, color: '#1a237e' }}>
              {service.ourApproach}
            </Typography>
            <Typography paragraph sx={{ color: '#444', lineHeight: 1.8 }}>
              {service.ourApproachPara}
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 700, mt: 6, mb: 3, color: '#1a237e' }}>
              What We Offer
            </Typography>
            <Box component="ul" sx={{ pl: 4, fontSize: '1.1rem', lineHeight: 2.4 }}>
              {service.whatWeOffer.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </Box>

            <Typography variant="h3" sx={{ fontWeight: 700, mt: 6, mb: 3, color: '#1a237e' }}>
              Why Choose Us?
            </Typography>
            <Typography paragraph sx={{ color: '#444', lineHeight: 1.8 }}>
              {service.standOut}
            </Typography>
            <Typography paragraph sx={{ color: '#444', lineHeight: 1.8 }}>
              {service.standOutPara}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={service.bottomImg}
              alt={service.heading}
              sx={{
                width: '100%',
                borderRadius: 3,
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                mt: { xs: 4, md: 0 }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceDetail;