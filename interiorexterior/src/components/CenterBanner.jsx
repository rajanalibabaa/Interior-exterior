import React from 'react'

import Button  from '@mui/material/Button';
import Box  from '@mui/material/Box';
import Typography  from '@mui/material/Typography';

import logo from '../assets/interiorexteriorprofilelogo1.jpg'
import { useNavigate } from 'react-router-dom'


const CenterBanner = () => {
  const navigate = useNavigate();
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
            backgroundColor: "#0097b1",
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
            alt="logo"
            sx={{ objectFit: "cover" }}
            height={50} 
            width={50} 
            borderRadius={"50%"} 
          />

          <Box>
            <Typography fontWeight={600} color='white'>Any Question?</Typography>
            <Typography fontWeight={700} color='white'>+91 8248638595</Typography>
          </Box>
        </Box>

        {/* BUTTON */}
        <Button
          variant="contained"
          onClick={()=> navigate ('/contact',window.scrollTo(0, 0))}
          sx={{
            mt: 1,
            px: { xs: 3, sm: 3 },
            py: { xs: 1.2, sm: 1.3 },
            background: "#0097b1",
            color: "#ffffffff",
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "16px" },
            borderRadius: 2,
            textTransform: "none",
            width: { xs: "100%", sm: "auto", md: "100%" }, 
            "&:hover": {
              background: "#0097b1",
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
