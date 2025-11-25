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

export default function Footer() {
  
  const navigate = useNavigate();

 



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
          pb: { xs: 10, sm: 12, md: 4 },
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

     
    </>
  );
}