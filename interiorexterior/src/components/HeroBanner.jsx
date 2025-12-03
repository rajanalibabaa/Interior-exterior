import React, { useState, useEffect } from "react";
import  Box from "@mui/material/Box";
import HeroBanner from "./HeroOverlayContent";


import img1 from '../../public/interiorexteriorherobg1.jpg';
import img2 from '../../public/interiorexteriorherobg2.jpg';
import img3 from '../../public/interiorexteriorherobg3.jpg';
import img4 from '../../public/interiorexteriorherobg4.jpg';

import video1 from '../../public/interiorexteriorherobg1.mp4'
import video3 from '../../public/interiorexteriorherobg3.mp4'
import video4 from '../../public/interiorexteriorherobg4.mp4'

// const backgroundMedia = [
  
//   "/src/assets/interiorexteriorherobg2.jpg",
//   "/src/assets/interiorexteriorherobg1.jpg",
//   "/src/assets/interiorexteriorherobg3.jpg",
//   "/src/assets/interiorexteriorherobg4.jpg",
//   "/src/assets/interiorexteriorherobg1.mp4",
//   "/src/assets/interiorexteriorherobg3.mp4",
//   "/src/assets/interiorexteriorherobg4.mp4",
// ];

const backgroundMedia = [
  img1,
  img2,
  img3,
  img4,
  video1,
  video3,
  video4
]

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
        height: "100%",
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
