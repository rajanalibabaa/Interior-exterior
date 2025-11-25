import React, { useState, useEffect } from "react";
import { 
  Box, Container, Grid, Typography, Link, Divider, IconButton, Fab 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowUp from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDown from "@mui/icons-material/KeyboardDoubleArrowDown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const navigate = useNavigate();

  const [scrollDirection, setScrollDirection] = useState("up");
  useEffect(() => {
    const handleScroll = () => {
      setScrollDirection(window.scrollY > 200 ? "up" : "down");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (scrollDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const colors = {
    primary: "#F43838",
    secondary: "#FF7F50",
  };

 

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0F1B2D 0%, #1a2d3e 100%)",
          color: "#fff",
          pt: { xs: 6, sm: 8 },
          pb: { xs: 3, sm: 4 },
          mt: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={{ xs: 4, md: 8 }} 
            justifyContent="space-between"
          >
            {/* Left Section */}
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h5" 
                fontWeight={800} 
                sx={{ 
                  mb: 2, 
                  color: "#ff0062",
                  fontSize: { xs: "1.5rem", sm: "1.75rem" }
                }}
              >
                Interior Exterior
              </Typography>

              <Typography 
                sx={{ 
                  color: "#c7c7c7", 
                  lineHeight: 1.7, 
                  mb: 3,
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }}
              >
                We provide premium painting, cleaning, designing and renovation<br />
                services with quality and on-time delivery.
              </Typography>

              {/* Contact */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ fontSize: 18, mr: 1, color: "#ff0062" }} />
                  <Typography sx={{ color: "#c7c7c7", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon sx={{ fontSize: 18, mr: 1, color: "#ff0062" }} />
                  <Typography sx={{ color: "#c7c7c7", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                    info@interiorexterior.com
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <LocationOnIcon sx={{ fontSize: 18, mr: 1, mt: 0.5, color: "#ff0062" }} />
                  <Typography sx={{ color: "#c7c7c7", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                    123 Design Street, Creative City, CC 12345
                  </Typography>
                </Box>
              </Box>

              {/* Social Icons */}
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                {[
                  { icon: <FacebookIcon />, link: "#" },
                  { icon: <InstagramIcon />, link: "#" },
                  { icon: <TwitterIcon />, link: "#" },
                  { icon: <LinkedInIcon />, link: "#" },
                ].map((item, index) => (
                  <IconButton
                    key={index}
                    href={item.link}
                    sx={{
                      color: "#c7c7c7",
                      transition: "0.3s",
                      "&:hover": { color: "#ff0062", transform: "scale(1.2)" },
                      padding: { xs: 1, sm: 1.5 },
                    }}
                    size="small"
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Middle Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography 
                variant="h6" 
                fontWeight={700} 
                sx={{ 
                  mb: 3, 
                  color: "#ff0062",
                  fontSize: { xs: "1.1rem", sm: "1.25rem" }
                }}
              >
                Quick Links
              </Typography>

              {["Home", "About Us", "Services", "Gallery", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: "block",
                    mb: 2,
                    color: "#c7c7c7",
                    textDecoration: "none",
                    "&:hover": { color: "#ff0062", transform: "translateX(5px)" },
                    transition: "all 0.3s ease",
                    fontSize: { xs: "0.9rem", sm: "1rem" }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Grid>

            {/* Right Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography 
                variant="h6" 
                fontWeight={700} 
                sx={{ 
                  mb: 3, 
                  color: "#ff0062",
                  fontSize: { xs: "1.1rem", sm: "1.25rem" }
                }}
              >
                Our Services
              </Typography>

              {[
                "Interior Design",
                "Exterior Design",
                "Waterproofing",
                "Wood Polishing",
                "Commercial Painting",
              ].map((service) => (
                <Link
                  key={service}
                  href="#"
                  sx={{
                    display: "block",
                    mb: 2,
                    color: "#c7c7c7",
                    textDecoration: "none",
                    "&:hover": { color: "#ff0062", transform: "translateX(5px)" },
                    transition: "all 0.3s ease",
                    fontSize: { xs: "0.9rem", sm: "1rem" }
                  }}
                >
                  {service}
                </Link>
              ))}
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ my: { xs: 3, sm: 4 }, borderColor: "#344255" }} />

          {/* Footer Bottom */}
          <Box sx={{ textAlign: "center" }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#fff", 
                fontFamily: "'Pacifico', cursive",
                fontSize: { xs: "0.8rem", sm: "0.875rem" }
              }}
            >
              © {new Date().getFullYear()}{" "}
              <span style={{ color: "#ff0062", fontWeight: 700 }}>Interior Exterior</span>.  
              All Rights Reserved | Built with ❤️ in India
            </Typography>

            <Typography
              variant="body2"
              sx={{ 
                color: "#fff", 
                fontFamily: "'Pacifico', cursive", 
                mt: 1,
                fontSize: { xs: "0.8rem", sm: "0.875rem" }
              }}
            >
              Powered by:{" "}
              <a
                href="https://www.cholabiz.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff0062", textDecoration: "none", fontWeight: 700 }}
              >
                CholaBiz.com
              </a>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* WhatsApp Button */}
      <IconButton
        href="https://wa.me/+1234567890"
        target="_blank"
        sx={{
          position: "fixed",
          bottom: { xs: 200, sm: 150, md: 200 },
          right: { xs: 14, sm: 20, md: 25 },
          width: { xs: 50, sm: 55, md: 60 },
          height: { xs: 50, sm: 55, md: 60 },
          background: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          boxShadow: "0px 4px 20px #25D36688",
          zIndex: 999,
          "&:hover": {
            background: "#1EBE5C",
            transform: "scale(1.1)",
          },
          transition: "0.3s",
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 26, sm: 28, md: 32 } }} />
      </IconButton>

      {/* Scroll To Top FAB */}
      <Fab
        onClick={handleScrollClick}
        size="medium"
        aria-label="Scroll button"
        sx={{
          position: "fixed",
          bottom: { xs: 60, sm: 20, md: 25 },
          right: { xs: 15, sm: 20, md: 25 },
          background: `#ff0062`,
          color: "#fff",
          boxShadow: `0 4px 25px ${colors.primary}55`,
          "&:hover": {
            transform: "translateY(-4px)",
            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
          },
          transition: "all 0.3s ease",
          zIndex: 999,
          width: { xs: 44, sm: 48, md: 52 },
          height: { xs: 44, sm: 48, md: 52 },
        }}
      >
        {scrollDirection === "up" ? (
          <KeyboardDoubleArrowUp sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />
        ) : (
          <KeyboardDoubleArrowDown sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />
        )}
      </Fab>
    </>
  );
}