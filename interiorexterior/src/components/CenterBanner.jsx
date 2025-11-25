import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import logo from '../assets/interiorexteriorprofilelogo.jpg'

const CenterBanner = () => {
  return (
    <Box
      sx={{
        p: { xs: 3, sm: 5, md: 7 },
        width: "100%",
        background: "#041829",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },   // COLUMN in mobile, ROW in desktop
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },       // Center text in mobile
        gap: { xs: 4, sm: 5, md: 7 },
      }}
    >
      
      {/* LEFT TEXT */}
      <Typography
        variant="body1"
        fontWeight={800}
        fontSize={{ xs: "1rem", sm: "1.6rem", md: "2rem" }}
        sx={{ color: "white" }}
      >
        Hire Professional Interior & Exterior <br /> Painters at Competitive Prices
      </Typography>

      {/* RIGHT SECTION */}
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={2}
      >

        {/* PHONE BOX */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "wheat",
            p: 2,
            gap: 2,
            borderRadius: 2,
            border: 1,
            width: { xs: "100%", sm: "auto" },
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box 
            component="img" 
            src={logo} 
            height={50} 
            width={50} 
            borderRadius={"50%"} 
          />

          <Box>
            <Typography fontWeight={600}>Any Question?</Typography>
            <Typography fontWeight={700}>+91 9999999999</Typography>
          </Box>
        </Box>

        {/* BUTTON */}
        <Button
          variant="contained"
          sx={{
            mt: 1,
            px: { xs: 3, sm: 3 },
            py: { xs: 1.2, sm: 1.3 },
            background: "#ff0062ff",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: { xs: "14px", sm: "16px" },
            borderRadius: 2,
            textTransform: "none",
            width: { xs: "100%", sm: "auto" }, 
            "&:hover": {
              background: "#ff0062e7",
            },
          }}
        >
          Get a Free Estimate
        </Button>

      </Box>
    </Box>
  )
}

export default CenterBanner
