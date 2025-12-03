import React from "react";

import Box  from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import Grid  from '@mui/material/Grid';

import DescriptionIcon from "@mui/icons-material/Description";
import CalculateIcon from "@mui/icons-material/Calculate";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { motion } from "framer-motion";

import img1 from "../assets/interiorandexteriorhowitsworks1.jpg";
import img2 from "../assets/interiorandexteriorhowitsworks2.jpg";
import img3 from "../assets/interiorandexteriorhowitsworks3.jpg";
import img4 from '../assets/interiorandexteriorsettingimage.jpg';

const steps = [
  {
    id: 1,
    title: "Contact Us",
    desc: "Get in touch with us online or over the phone and tell us what you're looking for.",
    // icon: <DescriptionIcon sx={{ fontSize: 60, color: "#F5A623" }} />,
    icon: img1,
  },
  {
    id: 2,
    title: "Get an estimate",
    desc: "Receive a free detailed estimate tailored to your specific painting needs.",
    // icon: <CalculateIcon sx={{ fontSize: 60, color: "#F5A623" }} />,
    icon: img2,
  },
  {
    id: 3,
    title: "Schedule the project",
    desc: "Choose a convenient date for us to begin transforming your space.",
    icon: img3,
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
              background: "#0097b1",
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
              <img src={img4} alt="icon" style={{ width: "100px", height: "100%" }} />
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
    background: "#ffffffff",
    p: 4,
    mb: index === 2 ? 4 : { xs: 3, sm: 3 }, 
    borderRadius: 2,
    height: "100%",
    maxWidth: 350,
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
                      background: "#0097b1",
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
                  <Box component={'img'} src={step.icon} sx={{ width: 120, height: 100 ,objectFit: "contain"}}   mb={2}/>

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
