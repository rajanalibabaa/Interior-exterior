import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Chip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import BrushIcon from "@mui/icons-material/Brush";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import img1 from '../assets/interiorexteriorhero_ourservices.png';
import img2 from '../assets/interiorexteriorheropaint.png';
import img3 from '../assets/interiorexteriorherobucket.png';
const centralImage = img1;

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.3 },
  },
};

// Reusable Card Component
const ServiceCard = ({ icon, title, text, highlighted = false, index }) => (
  <motion.div
    variants={itemVariant}
    whileHover={{ 
      y: -8,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }}
  >
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        maxWidth: 400,
        maxHeight: 250,
        px: 3,
        py: 1,
        background: highlighted 
          ? "linear-gradient(35deg, #ff7043 0%, #ff8a65 100%)" 
          : "#ffffff",
        border: highlighted ? "none" : "1px solid rgba(0,0,0,0.08)",
        color: highlighted ? "#fff" : "text.primary",
        boxShadow: highlighted 
          ? "0 12px 30px rgba(255, 112, 67, 0.25)"
          : "0 4px 20px rgba(0,0,0,0.06)",
        position: "relative",
        overflow: "visible",
        "&::before": highlighted ? {
          content: '""',
          position: "absolute",
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          background: "linear-gradient(135deg, #ff7043, #ffab91)",
          borderRadius: 4,
          zIndex: -1,
          opacity: 0.6,
          filter: "blur(8px)",
        } : {},
      }}
    >
      <CardContent sx={{ px: 0, py: 1 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: 3,
              background: highlighted 
                ? "rgba(255,255,255,0.2)" 
                : "linear-gradient(135deg, #ffecb3 0%, #ffd54f 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {React.cloneElement(icon, {
              sx: { 
                fontSize: 26, 
                color: highlighted ? "#fff" : "#ff0062",
              },
            })}
          </Box>
          <Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: 16, md: 18 }
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: highlighted ? "rgba(255,255,255,0.9)" : "text.secondary",
                lineHeight: 1.6,
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
        
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 1,
            px: 0,
            color: highlighted ? "#fff" : "#ff0062",
            fontWeight: 600,
            fontSize: 14,
            "&:hover": {
              background: "transparent",
              transform: "translateX(4px)",
            },
            transition: "all 0.2s ease",
          }}
        >
          Learn More
        </Button>
      </CardContent>
      
      {/* Card Number */}
      <Chip
        label={`0${index}`}
        size="small"
        sx={{
          position: "absolute",
          top: -12,
          right: 16,
          background: highlighted ? "#fff" : "#ff0062",
          color: highlighted ? "#ff7043" : "#fff",
          fontWeight: 800,
          fontSize: 12,
          height: 24,
          minWidth: 40,
        }}
      />
    </Card>
  </motion.div>
);

export default function ServicesSection() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 12 },
        // background: "linear-gradient(135deg, #fff9f5 0%, #fffdf9 50%, #f8f5ff 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff061fff 0%, transparent 70%)",
          opacity: 0.4,
        }}
      />
       <Box
                  component={motion.div}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 100,
                    width: 100,
                    height: 170,
                    borderRadius: "50%",
                    // background: "linear-gradient(135deg, #ff80ab 0%, #ff4081 100%)",
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    // boxShadow: "0 10px 25px rgba(255, 64, 129, 0.3)",
                  }}
                >
                  <img src={img2} alt="img"  style={{ width: "100vh", height: "100vh", objectFit: "contain" }} />
                </Box>

                <Box
                  component={motion.div}
                  animate={{
                    y: [0, 10, 0],
                    // rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "circIn",
                    delay: 0.3,
                  }}
                  sx={{
                    position: "absolute",
                    bottom: 230,
                    left: 200,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #80deea 0%, #26c6da 100%)",
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(38, 198, 218, 0.3)",
                  }}
                >
                    <img src={img3} alt="img"  style={{  width: "100vh", height: "100vh", objectFit: "contain" }} />
                </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ffcdd2 0%, transparent 70%)",
          opacity: 0.3,
        }}
      />

      <Container maxWidth="xl">
        {/* Section header */}
        <Box 
          component={motion.div}
          variants={itemVariant}
          sx={{  mb: { xs: 6, md: 10 } }}
        >
           <Typography
                        variant="h6"
                        fontWeight={700}
                        letterSpacing={2}
                        sx={{ color: "#77037B", mb: 1,
                          '&::before': {
                            content: '""',
                            display: 'block',
                            width: 90,
                            height: 3,
                            background: '#F94A29',
                            mb: 1
                          }
          
                         }}
                      >
                        Our Services
                      </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: -0.5,
              mb: 2,
              fontSize: { xs: 32, md: 48 },
              background: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Transform Your Space With Expertise
          </Typography>
          <Typography
            sx={{
              maxWidth: 680,
              color: '#555',
              fontSize: { xs: 15, md: 18 },
              lineHeight: 1.7,
            }}
          >
            Our experienced team brings creativity and precision to every project, 
            delivering exceptional results that exceed expectations and transform visions into reality.
          </Typography>
        </Box>

        {/* Modern Service Layout */}
        <Grid container spacing={6} display={"flex"}  justifyContent={'space-evenly'} >
          {/* Left Services Column */}
          <Grid item xs={12} md={3}>
            <motion.div variants={containerVariant}>
              <ServiceCard
                icon={<HomeIcon />}
                title="Residential Painting"
                text="Complete home transformation with attention to detail and quality finishes that make your space feel brand new."
                highlighted={true}
                index={1}
              />
              <Box sx={{ mt: 4 }} />
              <ServiceCard
                icon={<WallpaperIcon />}
                title="Wallpaper & Finishes"
                text="Creative wallpaper solutions and specialty finishes that add character and style to any interior space."
                index={2}
              />
            </motion.div>
          </Grid>

          {/* Central Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                mb: { xs: 0, md: 0 },
              }}
            >
              <motion.div variants={imageVariant}>
                {/* Main Circle Container */}
                <Box
                  sx={{
                    width: isSm ? 340 : 480,
                    height: isSm ? 470 : 750,
                    // borderRadius: "50%",
                    overflow: "hidden",
                    // boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8)",
                    // background: "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)",
                    position: "relative",
                    // border: "8px solid white",
                  }}
                >
                  <Box
                    component="img"
                    src={centralImage}
                    alt="Professional Painter"
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center ",
                    }}
                  />
                  
                  {/* Overlay Gradient */}
                  {/* <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background: "linear-gradient(transparent 0%, rgba(0,0,0,0.1) 100%)",
                    }}
                  /> */}
                </Box>

                {/* Floating Elements */}
               
              </motion.div>
            </Box>
          </Grid>

          {/* Right Services Column */}
          <Grid item xs={12} md={3}>
            <motion.div variants={containerVariant}>
              <ServiceCard
                icon={<BusinessIcon />}
                title="Commercial Projects"
                text="Professional painting services for businesses, offices, and commercial spaces that enhance brand image."
                index={3}
              />
              <Box sx={{ mt: 4 }} />
              <ServiceCard
                icon={<BrushIcon />}
                title="Restoration & Repair"
                text="Expert restoration of historic properties and repair services that preserve and enhance architectural beauty."
                index={4}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom CTA */}
        <Box
          component={motion.div}
          variants={itemVariant}
          sx={{ textAlign: "center", mt: 8 }}
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: "linear-gradient(135deg, #ff0062 0%, #ff0062 100%)",
              borderRadius: 3,
              px: 4,
              py: 1.5,
              fontSize: 16,
              fontWeight: 600,
              boxShadow: "0 10px 30px rgba(255, 112, 67, 0.3)",
              "&:hover": {
                boxShadow: "0 15px 40px rgba(255, 112, 67, 0.4)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}