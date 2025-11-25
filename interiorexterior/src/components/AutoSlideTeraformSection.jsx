import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, PlayArrow, Pause } from '@mui/icons-material';
import img1 from '../assets/interiorExterioImage1.jpg';
import img2 from '../assets/interiorExterioImage2.jpg';
import img3 from '../assets/interiorExterioImage3.jpg';
import img4 from '../assets/interiorExterioImage4.jpg';
import img5 from '../assets/interiorExterioImage5.jpg';
import img6 from '../assets/interiorExterioImage6.jpg';
import img7 from '../assets/interiorExterioImage7.jpg';
import img8 from '../assets/interiorExterioImage8.jpg';
import img9 from '../assets/interiorExterioImage9.jpg';
import img10 from '../assets/interiorExterioImage10.jpg';

const images = [img5, img6, img7, img8, img9, img10, img1, img2, img3, img4];

export default function ModernAutoSlideSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <Box sx={{ 
      width: '100%', 
      px: { xs: 2, sm: 3, md: 12 },
      py: { xs: 4, sm: 5, md: 4 },
      background: 'linear-gradient(305deg, #FCF9EA 0%, #ffffff 50%, #ffffffff 100%)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       <Typography
                           variant="h6"
                           fontWeight={700}
                           letterSpacing={2}
                           sx={{
                             textAlign: { xs: "center", md: "left" },
                             color: "#77037B",
                             mb: 1,
                             fontSize: { xs: "1.9rem", sm: "2rem", md: "2.125rem" },
                             '&::before': {
                               content: '""',
                               display: 'block',
                               width: { xs: 70, sm: 80, md: 90 },
                               height: 3,
                               background: '#F94A29',
                               mb: 1,
                               marginInline: { xs: "auto", md: 0 }
                             }
                           }}
                         >
          TRANSFORM YOUR SPACE
        </Typography>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
       <Typography
                           variant="h3"
                           fontWeight={900}
                           sx={{
                             mb: 3,
                             lineHeight: 1.2,
                             fontSize: { 
                               xs: "1.2rem", 
                               sm: "1.8rem", 
                               md: "2.2rem", 
                               lg: "2.0rem" 
                             },
                             background: "linear-gradient(90deg, #0F1B2D, #153E90)",
                             WebkitBackgroundClip: "text",
                             WebkitTextFillColor: "transparent",
                           }}
                         >
          Elevate Your Property with Expert Painting Solutions
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
          mt: 2,
        }}
      >
        {/* LEFT TEXT CONTENT */}
        <Box sx={{ 
          flex: 1,
        
          textAlign: { xs: 'center', lg: 'justify' },
          maxWidth: { lg: '600px' },
          width: '100%'
        }}>
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography
              sx={{ 
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: '#555',
                mb: 3,
                textAlign:"justify"
              }}
            >
              As premier painting contractors, we deliver exceptional value and unmatched quality 
              for both commercial and residential properties. Our comprehensive services enhance 
              aesthetic appeal while ensuring lasting durability.
            </Typography>
          </motion.div>

          {/* Features List */}
          <Box sx={{ mb: 4 }}>
            {[
              "Expert Exterior & Interior Painting",
              "Commercial & Residential Specialists",
              "Professional Waterproofing Services",
              "Specialized Finishes & Coatings",
              "10+ Years Industry Experience"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 1.5,
                  justifyContent: { xs: 'flex-start', sm: 'flex-start', lg: 'flex-start' }
                }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      backgroundColor: '#b700ffff',
                      borderRadius: '50%',
                      mr: 2,
                      flexShrink: 0,
                      mt: 0.2
                    }}
                  />
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 600,
                      color: '#333',
                      textAlign: 'left'
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#FF0060',
                color: '#ffffffff',
                px: { xs: 4, md: 5 },
                py: { xs: 1.2, md: 1.8 },
                borderRadius: 2,
                fontWeight: 700,
                fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(255, 0, 96, 0.3)',
                '&:hover': {
                  backgroundColor: '#d40856ff',
                  boxShadow: '0 12px 35px rgba(255, 0, 96, 0.4)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease',
                minWidth: { xs: '200px', sm: 'auto' }
              }}
            >
              Get Free Quote
            </Button>
          </motion.div>
        </Box>

        {/* RIGHT SIDE IMAGE SLIDER */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: '100%',
            mb:{ xs: 1, lg: 5 },
            maxWidth: { xs: '100%', lg: '600px' }
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              height: { xs: 300, sm: 400, md: 450 },
              borderRadius: { xs: 3, md: 4 },
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
              background: "#f5f5f5",
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Slider Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <img
                  src={images[currentIndex]}
                  alt={`Painting service example ${currentIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Hidden on very small screens */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: 8, sm: 16 },
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 0, 96, 0.9)",
                color: "white",
                '&:hover': {
                  backgroundColor: "#FF0060",
                },
                display: { xs: 'none', sm: 'flex' },
                width: { xs: 36, md: 48 },
                height: { xs: 36, md: 48 },
              }}
            >
              <ChevronLeft sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
            </IconButton>

            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                top: "50%",
                right: { xs: 8, sm: 16 },
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 0, 96, 0.9)",
                color: "white",
                '&:hover': {
                  backgroundColor: "#FF0060",
                },
                display: { xs: 'none', sm: 'flex' },
                width: { xs: 36, md: 48 },
                height: { xs: 36, md: 48 },
              }}
            >
              <ChevronRight sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
            </IconButton>

            {/* Auto Play Toggle - Optional */}
            {/* <IconButton
              onClick={toggleAutoPlay}
              sx={{
                position: "absolute",
                top: { xs: 8, sm: 16 },
                right: { xs: 8, sm: 16 },
                backgroundColor: "rgba(255,255,255,0.9)",
                '&:hover': {
                  backgroundColor: "rgba(255,255,255,1)",
                },
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }}
            >
              {isPlaying ? 
                <Pause sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} /> : 
                <PlayArrow sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} />
              }
            </IconButton> */}

            {/* Indicators - Improved for mobile */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 12, md: 16 },
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: { xs: 0.5, sm: 1 },
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: { xs: 2, md: 3 },
                px: { xs: 1, sm: 1.5 },
                py: { xs: 0.5, sm: 1 },
              }}
            >
              {images.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => goToSlide(i)}
                  sx={{
                    width: currentIndex === i ? { xs: 20, sm: 24 } : { xs: 8, sm: 10 },
                    height: { xs: 8, sm: 10 },
                    borderRadius: 6,
                    bgcolor: currentIndex === i ? "#FF0060" : "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      bgcolor: currentIndex === i ? "#FF0060" : "rgba(255,255,255,0.8)",
                    }
                  }}
                />
              ))}
            </Box>

            {/* Mobile Swipe Instruction */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 8, sm: 12 },
                left: "50%",
                transform: "translateX(-50%)",
                display: { xs: 'block', sm: 'none' },
              }}
            >
            
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}