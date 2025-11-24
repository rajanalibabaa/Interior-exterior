import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const HeroContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 300,
  padding: "26px 22px",
  background: "#FEEE91",
  backdropFilter: "blur(12px)",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  zIndex: 10,
}));

const InputField = styled(TextField)(() => ({
  marginBottom: "14px",
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    fontSize: "14px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "13px",
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  fontSize: "15px",
  textTransform: "none",
  fontWeight: 700,
  padding: "12px",
  borderRadius: 12,
            background: "#AB46D2",
  "&:hover": {
    background: "#a800eafb",
    transform: "translateY(-2px)",
  },
  transition: "0.3s",
}));

export default function HeroBanner() {
  return (
    <HeroContainer
      component={motion.div}
      initial="hidden"
      animate="show"
    >
      <FormWrapper
        component={motion.form}
        variants={fadeLeft}
        action="https://your-backend-url.com/api/create-lead"
        method="POST"
      >
        <Typography
          variant="h6"
          fontWeight={800}
          textAlign="center"
          mb={1}
          sx={{
            background: "linear-gradient(35deg, #174fe7ff, #642c33ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get Free Quote
        </Typography>

        <InputField
          fullWidth
          label="Full Name"
          name="name"
          required
        />

        <InputField
          fullWidth
          label="Phone Number"
          name="phone"
          required
        />

        <InputField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          required
        />

        <InputField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={3}
          required
          sx={{ mb: 3 }}
        />

        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </SubmitButton>
      </FormWrapper>
    </HeroContainer>
  );
}
