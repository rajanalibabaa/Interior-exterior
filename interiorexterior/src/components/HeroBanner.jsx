import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import EnquiryForm from "./EnquiryForm";
import HeroBanner from "./HeroOverlayContent";

const backgroundMedia = [
  "/src/assets/interiorexteriorherobg2.jpg",
  "/src/assets/interiorexteriorherobg1.jpg",
  "/src/assets/interiorexteriorherobg3.jpg",
  "/src/assets/interiorexteriorherobg4.jpg",
  "/src/assets/interiorexteriorherobg1.mp4",
  "/src/assets/interiorexteriorherobg3.mp4",
  "/src/assets/interiorexteriorherobg4.mp4",
];

export default function  BackgroundOnlyHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundMedia.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        mt: -3,
        height: "82vh",
        overflow: "hidden",
      }}
    >
      {backgroundMedia.map((src, index) => {
        const isVideo = src.endsWith(".mp4");
        return isVideo ? (
          <Box
            key={index}
            component="video"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
            }}
          />
        ) : (
          <Box
            key={index}
            component="img"
            src={src}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
            }}
          />
        );
      })}

      {/* Overlay Text */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.31)", // subtle overlay
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
<Box> 
  <Box sx={{display:"flex",flexDirection:"row"}}>
    
    <Typography>Professional</Typography>
    <Typography>Meticulous</Typography>
    <Typography>Responsive</Typography>
  </Box>
  <Typography>Interior & Exteriors <br/> Best Painters</Typography>
        <Typography variant="h6" sx={{ maxWidth: "600px" }}>
          Experience the best professional residential and commercial painting services in the area.
        </Typography>
        <Button>Get free estimate</Button></Box>
<Box mt={15}>
<EnquiryForm/>

</Box>

        </Box>
       
      </Box> */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
 background: `
          linear-gradient(135deg, 
            rgba(15, 23, 42, 0.66) 0%,
            rgba(0, 0, 0, 0.51) 35%,
            rgba(0, 0, 0, 0.09) 100%
          ),
          radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0) 0%, transparent 50%)
        `,        }}
      />
      <HeroBanner/>
    </Box>
  );
}
