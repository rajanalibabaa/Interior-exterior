import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <StarIcon sx={{ color: "#fff", fontSize: 26 }} />,
      title: "Rated 5-Star Average By Our Clients",
      desc: "Our perfect 5-star ratings speak volumes! Every review celebrates our unwavering commitment to quality craftsmanship and exceptional service.",
    },
    {
      icon: <MonetizationOnIcon sx={{ color: "#fff", fontSize: 26 }} />,
      title: "Honest Transparent Pricing",
      desc: "No hidden fees — ever! Clear explanations, proper estimates, and complete transparency from start to finish.",
    },
    {
      icon: <VerifiedUserIcon sx={{ color: "#fff", fontSize: 26 }} />,
      title: "100% Satisfaction Guarantee",
      desc: "We’re not done until you're fully satisfied. Every service comes with our trusted quality assurance guarantee.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 12, md: 3 },
        px: { xs: 2, md: 6 },
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={6}>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              WHY CHOOSE US
            </Typography>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{
                mb: 3,
                lineHeight: 1.2,
                fontSize: { xs: "2rem", md: "2.5rem" },
                background: "linear-gradient(90deg, #0F1B2D, #153E90)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We Deliver Trusted Residential & Commercial Painting Services
            </Typography>
          </motion.div>

          {/* Feature Items */}
          <Box sx={{ mt: 3 }}>
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    mb: 4,
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      bgcolor: "#AB46D2",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    //   boxShadow: "0 10px 25px rgba(21,62,144,0.3)",
                      mr: 2.5,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mb: 0.8 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#555" }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                background: '#ff0062ff',
                color: "#ffffffff",
                fontWeight: 800,
                fontSize: "16px",
                borderRadius: 2,    
                textTransform: "none",
                // boxShadow: "0 15px 35px rgba(0,208,142,0.3)",
                "&:hover": {
                  background: "#ff0062e7",
                },
              }}
            >
              Get a Free Estimate
            </Button>
          </motion.div>
        </Grid>

     
      </Grid>
    </Box>
  );
}
