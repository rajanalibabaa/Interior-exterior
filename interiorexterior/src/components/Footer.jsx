import React from "react";
import { Box, Container, Grid, Typography, Link, Divider, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Social Media Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import cholaLogo from "../assets/cholaautomation_PoweredLogo.jpeg";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0F1B2D 0%, #1a2d3e 100%)",
        color: "#fff",
        pt: 8,
        pb: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} justifyContent="space-between">
          
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 2, color: "#FFD700" }}>
              Interior Exterior
            </Typography>

            <Typography sx={{ color: "#c7c7c7", lineHeight: 1.7, mb: 3 }}>
              We provide premium painting, cleaning, designing and renovation<br />
              services with quality and on-time delivery.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ fontSize: 18, mr: 1, color: "#FFD700" }} />
                <Typography sx={{ color: "#c7c7c7" }}>+1 (555) 123-4567</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ fontSize: 18, mr: 1, color: "#FFD700" }} />
                <Typography sx={{ color: "#c7c7c7" }}>info@interiorexterior.com</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ fontSize: 18, mr: 1, mt: 0.5, color: "#FFD700" }} />
                <Typography sx={{ color: "#c7c7c7" }}>
                  123 Design Street, Creative City, CC 12345
                </Typography>
              </Box>
            </Box>

            {/* ⭐ Social Media Icons */}
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
                    transition: "0.3s ease",
                    "&:hover": { color: "#FFD700", transform: "scale(1.2)" },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Middle Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: "#FFD700" }}>
              Quick Links
            </Typography>

            {["Home", "About Us", "Services", "Gallery", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: "block",
                    mb: 2,
                    color: "#c7c7c7",
                    textDecoration: "none",
                    "&:hover": { color: "#FFD700", transform: "translateX(5px)" },
                    transition: "all 0.3s ease",
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: "#FFD700" }}>
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
                  "&:hover": { color: "#FFD700", transform: "translateX(5px)" },
                  transition: "all 0.3s ease",
                }}
              >
                {service}
              </Link>
            ))}
          </Grid>
        </Grid>

        {/* Bottom Line */}
        <Divider sx={{ my: 4, borderColor: "#344255" }} />

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "'Pacifico', cursive",
            }}
          >
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#FFD700", fontWeight: 700 }}>Eagle Ceramics</span>
            . All Rights Reserved | Built with ❤️ in India
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "'Pacifico', cursive",
              mt: 1,
            }}
          >
            Powered by:
            <img
              src={cholaLogo}
              alt="CHOLA BIZ Logo"
              style={{
                marginLeft: "8px",
                verticalAlign: "middle",
                width: "50px",
                height: "auto",
              }}
            />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
