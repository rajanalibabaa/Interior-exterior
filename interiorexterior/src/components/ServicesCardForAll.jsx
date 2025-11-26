// ServiceDetail.jsx
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import servicesData from '../components/ServicesDatas.jsx';
import HowItWorks from '../components/HowItsWorks';
import CenterBanner from '../components/CenterBanner';
import FAQSection from '../components/Faq';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <Container sx={{ py: 20, textAlign: 'center' }}>
        <Typography variant="h4" color="error.main">
          Service not found!
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Hero Section - Desktop left-aligned, Mobile centered */}
      <Box
        sx={{
          padding: {
            xs: '80px 20px 60px',
            sm: '100px 32px 80px',
            md: '120px 40px'
          },
          backgroundImage: `url(${service.headingImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: { xs: 'center', md: 'left' },
          minHeight: { xs: '75vh', sm: '80vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              md={8}
              lg={7}
              sx={{
                mx: { xs: 'auto', md: 0 },
                maxWidth: { xs: '90%', md: 'none' }
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: '2.6rem',
                    sm: '3.5rem',
                    md: '4.5rem'
                  },
                  lineHeight: { xs: 1.15, md: 1.1 },
                  letterSpacing: { xs: '-0.5px', md: 'normal' },
                  color: '#FFFFFF',
                  background: "linear-gradient(135deg, #FFF58A 0%, #FFF58A 100%)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: { xs: '0 3px 10px rgba(0,0,0,0.5)', md: 'none' },
                }}
              >
                {service.heading}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  opacity: 0.95,
                  fontWeight: 500,
                  color: '#E8F4FD',
                  fontSize: {
                    xs: '1.35rem',
                    sm: '1.6rem',
                    md: '2rem'
                  },
                  lineHeight: { xs: 1.5, md: 1.6 },
                  mt: { xs: 3, md: 2 },
                  maxWidth: { xs: '90%', md: '100%' },
                  mx: { xs: 'auto', md: 0 },
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                {service.description}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 10, md: 12 } }}>
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            {/* Intro Paragraph */}
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.15rem', md: '1.2rem' },
                lineHeight: { xs: 1.85, md: 1.9 },
                color: '#2D3748',
                fontWeight: 400,
              }}
            >
              {service.headPara}
            </Typography>

            {/* Our Approach */}
            <Typography
              variant="h6"
                fontWeight={700}
                letterSpacing={2}
                sx={{
                  color: "#77037B",
                  mb: 1,
                  '&::before': {
                    content: '""',
                    display: 'block',
                    width: 90,
                    height: 3,
                    background: '#F94A29',
                    mb: 1,
                    marginInline: { xs: "auto", md: 0 }
                  }
                }}
            >
              {service.ourApproach}
            </Typography>

            <Typography
              paragraph
              sx={{
                color: '#4A5568',
                lineHeight: { xs: 1.8, md: 1.8 },
                fontSize: { xs: '1.05rem', md: '1.1rem' },
                fontWeight: 400,
              }}
            >
              {service.ourApproachPara}
            </Typography>

            {/* What We Offer - Mobile: Image First */}
            <Grid
              container
              spacing={{ xs: 5, md: 4 }}
              alignItems="center"
              direction={{ xs: 'column-reverse', md: 'row' }}
              sx={{ mt: { xs: 8, md: 6 }, display: { xs: 'flex', justifyContent:'space-between' } }}
             >
              {/* Text Column */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                fontWeight={700}
                letterSpacing={2}
                sx={{
                  color: "#77037B",
                  mb: 1,
                  '&::before': {
                    content: '""',
                    display: 'block',
                    width: 90,
                    height: 3,
                    background: '#F94A29',
                    mb: 1,
                    marginInline: { xs: "auto", md: 0 }
                  }
                }}
                >
                  What We Offer
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none', 
                    pl: { xs: 3, md: 4 },
                    fontSize: { xs: '1.05rem', md: '1.1rem' },
                    lineHeight: 2.4,
                    color: '#2D3748',
                    '& li': {
                      marginBottom: 2,
                      fontWeight: 500,
                      paddingLeft: 1,
                      position: 'relative',
                      '&::before': {
                        content: "'✔'",
                        position: 'absolute',
                        left: -28,
                        color: '#2B6CB0',
                        fontWeight: 'bold',
                        fontSize: '1.3rem',
                      }
                    },
                  }}
                >
                  {service.whatWeOffer.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Box>
              </Grid>

              {/* Image Column - Appears first on mobile */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={service.bottomImg}
                  alt={service.heading}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '380px', sm: '500px', md: '500px' },
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    filter: 'brightness(1.05) contrast(1.1)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    display: 'block',
                    mx: 'auto',
                    mt: { xs: 0, md: 0 },
                  }}
                  loading="lazy"
                />
              </Grid>
            </Grid>

            {/* Why Choose Us */}
            <Typography
             variant="h6"
                fontWeight={700}
                letterSpacing={2}
                sx={{
                  color: "#77037B",
                  mb: 1,
                  '&::before': {
                    content: '""',
                    display: 'block',
                    width: 90,
                    height: 3,
                    background: '#F94A29',
                    mb: 1,
                    marginInline: { xs: "auto", md: 0 }
                  }
                }}
            >
              Why Choose Us?
            </Typography>

            <Typography
              paragraph
              sx={{
                color: '#4A5568',
                lineHeight: 1.8,
                fontSize: { xs: '1.05rem', md: '1.1rem' },
                fontWeight: 500,
              }}
            >
              {service.standOut}
            </Typography>

            <Typography
              paragraph
              sx={{
                color: '#4A5568',
                lineHeight: 1.8,
                fontSize: { xs: '1.05rem', md: '1.1rem' },
                fontWeight: 400,
              }}
            >
              {service.standOutPara}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <CenterBanner />
      <HowItWorks />
      <FAQSection />
    </Box>
  );
};

export default ServiceDetail;