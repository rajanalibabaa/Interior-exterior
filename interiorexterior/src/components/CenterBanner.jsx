import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import logo from '../assets/interiorexteriorprofilelogo.jpg'

const CenterBanner = () => {
  return (
   <Box
 display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={7} sx={{
  p:7,
  Height:50,
  width:'100%',
  background:'#041829'
 }}>
  <Typography variant="body1" fontWeight={800} fontSize={{md:'2rem'}} sx={{ mb: 2 ,color:'white'}}>Hire Professional Interior & Exterior <br/> Painters at Competitive Prices </Typography>
    <Box display={'Inline-flex'} flexDirection={'column'} sx={{}} >
      <Box display={'Inline-flex'} flexDirection={'row'}sx={{backgroundColor:'wheat',p:2,gap:4,borderRadius:2,border:1}} >
      <Box component='img'src={logo} height={50} width={50} borderRadius={'50%'} /> 
      <Box > <Typography>Any Question ?</Typography>
      <Typography>+91 9999999999</Typography></Box>
     </Box>
     
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
 </Box>

 </Box>
  )
}

export default CenterBanner
