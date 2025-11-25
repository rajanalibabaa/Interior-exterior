import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CalculateIcon from "@mui/icons-material/Calculate";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Contact Us",
    desc: "Get in touch with us online or over the phone and tell us what you're looking for.",
    icon: <DescriptionIcon sx={{ fontSize: 60, color: "#F5A623" }} />,
  },
  {
    id: 2,
    title: "Get an estimate",
    desc: "Receive a free detailed estimate tailored to your specific painting needs.",
    icon: <CalculateIcon sx={{ fontSize: 60, color: "#F5A623" }} />,
  },
  {
    id: 3,
    title: "Schedule the project",
    desc: "Choose a convenient date for us to begin transforming your space.",
    icon: <EventAvailableIcon sx={{ fontSize: 60, color: "#F5A623" }} />,
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={5}>
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
            How It Works
          </Typography>

          <Box
            sx={{
              width: '100%',
              height: 2,
              background: "#ff0062",
              // mx: "auto",
              position: "relative",
              mt: 1,
            }}
          >
            <Box
              sx={{
                width: 50,  
                height: 50,
                borderRadius: "50%",
                background: "#ffbb0f",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                color: "#F5A623",
              }}
            >
              🛠️
            </Box>
          </Box>

          <Typography
            sx={{
              maxWidth: 700,
              mx: "auto",
              mt: 3,
              color: "text.secondary",
              fontSize: 17,
            }}
          >
            Booking with us is a breeze – a simple call or online request is all it
            takes to set your painting project in motion. Our streamlined
            scheduling process ensures a hassle-free experience, making it easy to
            transform your space at your convenience.
          </Typography>
        </Box>

        {/* Steps */}
        <Grid container  display={"flex"} justifyContent={"space-evenly"}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    background: "#FAF7F0",
                    p: 4,
                    borderRadius: 2,
                    height: "100%",
                    maxWidth:350,
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  {/* Step Label */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      background: "#ff0062",
                      color: "#fff",
                      px: 2,
                      py: 0.5,
                      fontSize: 12,
                      fontWeight: 600,
                      transform: "translateY(-50%) rotate(-20deg)",
                    }}
                  >
                    STEP {step.id}
                  </Box>

                  {/* Icon */}
                  <Box mb={2}>{step.icon}</Box>

                  {/* Title */}
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography color="text.secondary" fontSize={15}>
                    {step.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
