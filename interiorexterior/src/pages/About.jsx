import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import img1 from "../assets/interiorexteriorabout.jpg";
import img2 from "../assets/interiorexteriorabout2.jpg";
import img3 from "../assets/interiorexteriorabout3.jpg";
import img4 from "../assets/interiorexteriorabout4.jpg";
import AboutUsSection from "../components/AboutComponents";
import HowItWorks from "../components/HowItsWorks";
import CenterBanner from "../components/CenterBanner";
import FAQSection from "../components/Faq";

const images = [img1, img2, img3, img4];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        mt={-3}
        sx={{
          width: "100%",
          height: { xs: "300px", md: "550px" },
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          borderRadius: "10px",
        }}
      />
      <AboutUsSection/>
      <HowItWorks/>
      <CenterBanner/>
      <FAQSection/>
    </>
  );
};

export default About;
