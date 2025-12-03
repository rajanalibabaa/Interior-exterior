import React, { useEffect, useState } from "react";
import  Box  from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import img1 from "../assets/interiorexteriorabout.jpg";
import img2 from "../assets/interiorexteriorabout2.jpg";
import img3 from "../assets/interiorexteriorabout3.jpg";
import img4 from "../assets/interiorexteriorabout4.jpg";
import AboutUsSection from "../components/AboutComponents";
import HowItWorks from "../components/HowItsWorks";
import CenterBanner from "../components/CenterBanner";
import FAQSection from "../components/Faq";

import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3, img4];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

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
      <Box sx={{textAlign:"center"}}>
      <Button
                onClick={() => navigate("/contact",window.scrollTo(0, 0))}
                variant="contained"
                sx={{
                  mt: { xs: 1, sm: 2 },
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.2, sm: 1.5 },
                  background: "#0097b1",
                  color: "#ffffffff",
                  fontWeight: 800,
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  borderRadius: 2,
                  textTransform: "none",
                  minWidth: { xs: "200px", sm: "auto" },
                  "&:hover": {
                    background: "#0097b1  ",
                  },
                }}
              >
                Get a Free Estimate
              </Button></Box>
      <HowItWorks/>
      <CenterBanner/>
      <FAQSection/>
    </>
  );
};

export default About;
