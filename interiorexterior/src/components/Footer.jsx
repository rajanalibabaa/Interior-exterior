import React from "react";
import { Box, Container, Grid, Typography, IconButton, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

export default function Footer() {
  return (
    <Box sx={{ background: "#0F1B2D", color: "#fff", pt: 8, pb: 4, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo + About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
              Interior Exterior
            </Typography>
            <Typography sx={{ color: "#c7c7c7", lineHeight: 1.7 }}>
              We provide premium painting, cleaning, designing and renovation services<br/> with a commitment to quality and on-time delivery.
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
              <IconButton sx={{ color: "#fff" }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: "#fff" }}><InstagramIcon /></IconButton>
              <IconButton sx={{ color: "#fff" }}><LinkedInIcon /></IconButton>
              <IconButton sx={{ color: "#fff" }}><XIcon /></IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Quick Links</Typography>
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Typography key={item} sx={{ mb: 1, cursor: "pointer", color: "#c7c7c7", '&:hover': { color: '#fff' } }}>
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Our Services</Typography>
            {['Interior Painting', 'Exterior Painting', 'Cleaning Services', 'Wall Designing', 'Wood Work'].map((service) => (
              <Typography key={service} sx={{ mb: 1, cursor: "pointer", color: "#c7c7c7", '&:hover': { color: '#fff' } }}>
                {service}
              </Typography>
            ))}
          </Grid>

         
        </Grid>

        <Box sx={{ mt: 5, textAlign: "center", borderTop: "1px solid #344255", pt: 3 }}>
          <Typography sx={{ color: "#b0b0b0" }}>
            © 2025 Interior Exterior. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
