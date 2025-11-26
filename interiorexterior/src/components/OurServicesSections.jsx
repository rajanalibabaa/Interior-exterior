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
import { useNavigate } from "react-router-dom";
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
        width: { xs: "100%", sm: 320, md: 320, lg: 380 },
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
  const navigate = useNavigate();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      sx={{
        py: { xs: 1, sm: 3, md: 5, lg: 10 },
        px: { xs: 2, sm: 3, md: 6, lg: 5, xl: 1 },
        overflow: "hidden",
        position: "relative",
        maxWidth: "1400px",
        margin: "0 auto",
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
          sx={{ mb: { xs: 6, md: 10 } }}
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
            Our Services
          </Typography>
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
            Transform Your Space With Expertise
          </Typography>
          <Typography
            sx={{
              maxWidth: 680,
              color: '#555',
              fontSize: { xs: 15, md: 18 },
              lineHeight: 1.7,
              textAlign: "justify"
            }}
          >
            Our experienced team brings creativity and precision to every project, 
            delivering exceptional results that exceed expectations and transform visions into reality.
          </Typography>
        </Box>

        {/* Modern Service Layout - Fixed spacing for single row on xl */}
        <Grid 
          container 
          spacing={{ xs: 2, sm: 2, md: 3 }}
          justifyContent={{ xs: "space-around", sm: "space-between", md: "space-between" }}
          alignItems="center" // Center the 3 columns vertically at sm/md/xl
          sx={{ flexWrap: { xs: "wrap", sm: "nowrap" } }} // prevent wrap on sm and above so fold devices render in a row
        >
          {/* Left Services Column */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            xl={3}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: { xs: "stretch", sm: "center" } }}
          >
            <motion.div variants={containerVariant}>
              <ServiceCard
                icon={<HomeIcon />}
                title="Residential Painting"
                text="Complete home transformation with attention to detail and quality finishes that make your space feel brand new."
                highlighted={true}
                index={1}
              />
              <Box sx={{ mt: { xs: 4, xl: 3 } }} />
              <ServiceCard
                icon={<WallpaperIcon />}
                title="Wallpaper & Finishes"
                text="Creative wallpaper solutions and specialty finishes that add character and style to any interior space."
                index={2}
              />
            </motion.div>
          </Grid>

          {/* Central Image Section */}
          <Grid item xs={12} sm={4} md={6} xl={6}>
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
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 220, sm: 260, md: 480 },
                    height: { xs: 200, sm: 320, md: 520 },
                    overflow: "hidden",
                    position: "relative",
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
                      objectPosition: "center",
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Services Column */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            xl={3}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: { xs: "stretch", sm: "center" } }}
          >
            <motion.div variants={containerVariant}>
              <ServiceCard
                icon={<BusinessIcon />}
                title="Commercial Projects"
                text="Professional painting services for businesses, offices, and commercial spaces that enhance brand image."
                index={3}
              />
              <Box sx={{ mt: { xs: 4, xl: 3 } }} />
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
          sx={{ textAlign: "center", mt: 2 }}
        >
          <Button
            variant="contained"
            onClick={()=> navigate('/services/interiordesign')}
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