import React from "react";

import { Box, Button, Grid, Typography } from "@mui/material";
import interiorImg1 from "../assets/interiorimage1.jpg";
import interiorImg2 from "../assets/interiorexteriorabout2.jpg";
import interiorImg3 from "../assets/interiorexteriorabout3.jpg";
import interiorImg4 from "../assets/interiorexteriorabout4.jpg";
import interiorImg5 from "../assets/interiorimage5.jpg";
import interiorImg6 from "../assets/interiorimage6.jpg";
import interiorImg7 from "../assets/interiorimage7.jpg";
import interiorImg8 from "../assets/interiorimage8.jpg";
import interiorImg9 from "../assets/interiorimage9.jpg";
import interiorImg10 from "../assets/interiorimage10.jpg";

import exterior1 from '../assets/exteriorimage1.jpg'
import exterior2 from '../assets/exteriorimage2.jpg'
import exterior3 from '../assets/exteriorimage3.jpg'
import exterior4 from '../assets/exteriorimage4.jpg'
import exterior5 from '../assets/exteriorimage5.jpg'
import exterior6 from '../assets/exteriorimage6.jpg'
import exterior7 from '../assets/exteriorimage7.jpg'
import exterior8 from '../assets/exteriorimage8.jpg'
import exterior9 from '../assets/exteriorimage9.jpg'
import exterior10 from '../assets/exteriorimage10.jpg'

import wallProffing1 from '../assets/wall_proffing1.jpg'
import wallProffing2 from '../assets/wall_proffing2.jpg'
import wallProffing3 from '../assets/wall_proffing3.jpg'
import wallProffing4 from '../assets/wall_proffing4.jpg'
import wallProffing5 from '../assets/wall_proffing5.jpg'
import wallProffing6 from '../assets/wall_proffing6.jpg'
import wallProffing7 from '../assets/wall_proffing7.jpg'
import wallProffing8 from '../assets/wall_proffing8.jpg'
import wallProffing9 from '../assets/wall_proffing9.jpg'
import wallProffing10 from '../assets/wall_proffing10.jpg'

import woodProffing1 from '../assets/woodProffing1.jpg'
import woodProffing2 from '../assets/woodProffing2.jpg'
import woodProffing3 from '../assets/woodProffing3.jpg'
import woodProffing4 from '../assets/woodProffing4.jpg'
import woodProffing5 from '../assets/woodProffing5.jpg'
import woodProffing6 from '../assets/woodProffing6.jpg'
import woodProffing7 from '../assets/woodProffing7.jpg'
import woodProffing8 from '../assets/woodProffing8.jpg'
import woodProffing9 from '../assets/woodProffing9.jpg'
import woodProffing10 from '../assets/woodProffing10.jpg'

import commercialImage from '../assets/commercial1.jpg'
import commercialImage2 from '../assets/commercial2.jpg'
import commercialImage3 from '../assets/commercial3.jpg'
import commercialImage4 from '../assets/commercial4.jpg'
import commercialImage5 from '../assets/commercial5.jpg'
import commercialImage6 from '../assets/commercial6.jpg'
import commercialImage7 from '../assets/commercial7.jpg'
import commercialImage8 from '../assets/commercial8.jpg'
import commercialImage9 from '../assets/commercial9.jpg'
import commercialImage10 from '../assets/commercial10.jpg'


const interiorImages = [
  interiorImg1,
  interiorImg2,
  interiorImg3,
  interiorImg4,
  interiorImg5,
  interiorImg6,
  interiorImg7,
  interiorImg8,
  interiorImg9,
  interiorImg10

];

const exteriorImages = [
  exterior1,
  exterior2,
  exterior3,
  exterior4,
  exterior5,
  exterior6,
  exterior7,
  exterior8,
  exterior9,
  exterior10
];

const wall_proffing = [
  wallProffing1,
  wallProffing2,wallProffing3,wallProffing4,wallProffing5,wallProffing6,wallProffing7,wallProffing8,wallProffing9,wallProffing10
]

const woodProffing = [
  woodProffing1,
  woodProffing2,woodProffing3,woodProffing4,woodProffing5,woodProffing6,woodProffing7,woodProffing8,woodProffing9,woodProffing10
]


const commercialImages = [
  commercialImage,
  commercialImage2,
  commercialImage3,
  commercialImage4,
  commercialImage5,
  commercialImage6,
  commercialImage7,
  commercialImage8,
  commercialImage9,
  commercialImage10
]
const InteriorExteriorGrid = ({
  title,
  description,
  images = [],
  buttonText = "Explore",
  onClick,
}) => {
  console.log("Images Received:", images); 
  return (
    <Box sx={{ width: "100%", py: { xs: 3, md: 4 },px: { xs: 2, md: 10} }}>
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
            {title}
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
            {description}
          </Typography>
         
<Box
  sx={{
    width: "100%",

    // Mobile & small tablet: horizontal scroll
    display: { xs: "flex", sm: "flex", md: "grid" },
    overflowX: { xs: "auto", sm: "auto", md: "unset" },

    // Desktop: 5-column grid
    gridTemplateColumns: { md: "repeat(5, 1fr)" },

    gap: 2,
    pb: { xs: 1, sm: 1, md: 0 },
  }}
>
  {images.map((img, index) => (
    <Box
      key={index}
      component="img"
      src={img}
      sx={{
        flexShrink: 0, 
        width: { xs: "250px", sm: "320px", md: "100%" },
        height: { xs: "160px", sm: "200px", md: "180px" },
        objectFit: "cover",
        borderRadius: "12px",
        mr: { xs: 2, sm: 2, md: 0 },
      }}
    />
  ))}
</Box>

  <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start"} }}>
  <Button
    variant="contained"
    sx={{
      mt: 3,
      px: 4,
      py: 1.5,
      background: '#ff0062ff',
      color: "#ffffffff",
      fontWeight: 800,
      fontSize: "16px",
      borderRadius: 2,
      textTransform: "none",
      "&:hover": {
        background: "#ff0062e7",
      },
    }}
    onClick={onClick}
  >
    {buttonText}
  </Button>
</Box>

    </Box>
  );
};

const Gallery = () => {
  return (
    <>
    <InteriorExteriorGrid
      title="Interior Painting"
      description="Transform your living space with beautiful interior painting."
      images={interiorImages}        
      buttonText="Explore Interior"
    />

    <InteriorExteriorGrid
      title="Exterior Painting"
      description="Transform your exterior with stunning exterior painting."
      images={exteriorImages}        
      buttonText="Explore Exterior"
    />
    <InteriorExteriorGrid
      title="Wall Proffing"
      description="Transform your exterior with stunning exterior painting."
      images={wall_proffing}       
      buttonText="Explore Wall Proffing"
    />
    <InteriorExteriorGrid
      title="Wood Proffing"
      description="Transform your exterior with stunning exterior painting."
      images={woodProffing}        
      buttonText="Explore Wood Proffing"
    />

    <InteriorExteriorGrid
      title="Commercial Painting"
      description="Transform your exterior with stunning exterior painting."
      images={commercialImages}        
      buttonText="Explore Commercial Painting"
    />

    
    </>
  );
};

export default Gallery;
