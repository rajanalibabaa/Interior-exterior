


import Grid  from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import Divider  from '@mui/material/Divider';
import IconButton  from '@mui/material/IconButton';
import Link  from '@mui/material/Link';


import { useNavigate } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import google from '../assets/Interiorexteriorgoogle.webp';
// Replace this with your Google Maps place reviews URL
const googleMapsReviewsUrl = "https://www.google.com/maps/place/Interior+and+Exterior+Painters/@13.0365646,80.2177705,17z/data=!4m16!1m9!3m8!1s0x639b585e7802da2f:0xf91e8aa9132741a6!2sInterior+and+Exterior+Painters!8m2!3d13.0365646!4d80.2177705!9m1!1b1!16s%2Fg%2F11yrwtmq03!3m5!1s0x639b585e7802da2f:0xf91e8aa9132741a6!8m2!3d13.0365646!4d80.2177705!16s%2Fg%2F11yrwtmq03?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";
export default function Footer() {
  const navigate = useNavigate();

  const linkStyle = {
    display: "block",
    mb: 2,
    color: "#ffffffff",
    textDecoration: "none",
    "&:hover": { color: "#000000ff", transform: "translateX(5px)" },
    transition: "all 0.3s ease",
    fontSize: { xs: "0.9rem", sm: "1rem" }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services/interiordesign" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const services = [
  { label: "Interior Painting", href: "/services/interiordesign" },
  { label: "Exterior Painting", href: "/services/exteriordesign" },
  { label: "Water proofing", href: "/services/waterproofing" },
  { label: "Wood Polishing", href: "/services/woodpolishing" },
  { label: "Commercial Painting", href: "/services/commercialpainting" },
];


  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0097b1 0%, #0097b1 100%)",
          color: "#ffffffff",
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
                  color: "#ffffffff",
                  fontSize: { xs: "1.5rem", sm: "1.75rem" }
                }}
              >
                Interior And Exterior Painters
              </Typography>

              <Typography 
                sx={{ 
                  color: "#ffffffff", 
                  lineHeight: 1.7, 
                  mb: 3,
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }}
              >
                We provide premium painting, cleaning and renovation<br />
                services with quality and on-time delivery.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ fontSize: 18, mr: 1, color: "#000000ff" }} />
                  <Typography sx={{ color: "#ffffffff", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                    +91 8248638595
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon sx={{ fontSize: 18, mr: 1, color: "#000000ff" }} />
                  <Typography sx={{ color: "#ffffffff", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                   info@interiorandexteriorpainters.com

                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <LocationOnIcon sx={{ fontSize: 18, mr: 1, mt: 0.5, color: "#000000ff" }} />
                  <Typography sx={{ color: "#ffffffff", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                   No.16/20,
Rams Subhasri flat,No- 3,
4th postal colony street, 
West mambalam,  
Chennai
                  </Typography>
                </Box>
              </Box>

            </Grid>

            {/* Quick Links Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography 
                variant="h6" 
                fontWeight={700} 
                sx={{ 
                  mb: 3, 
                  color: "#ffffffff",
                  fontSize: { xs: "1.1rem", sm: "1.25rem" }
                }}
              >
                Quick Links
              </Typography>

              {quickLinks.map((item) => (
                <Link key={item.label} onClick={() => navigate(item.href,window.scrollTo(0, 0))} sx={linkStyle}>
                  {item.label}
                </Link>
              ))}

            </Grid>

           {/* Services Section */}
<Grid item xs={12} sm={6} md={4}>
  <Typography 
    variant="h6" 
    fontWeight={700} 
    sx={{ 
      mb: 3, 
      color: "#ffffffff",
      fontSize: { xs: "1.1rem", sm: "1.25rem" }
    }}
  >
    Our Services
  </Typography>

  {services.map((item, index) => (
    <Link key={index} onClick={() => navigate(item.href,window.scrollTo(0, 0))} sx={linkStyle}>
      {item.label}
    </Link>
  ))}
</Grid>

          </Grid>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              {/* Social Icons */}
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                {[ 
                  { icon: <FacebookIcon />, link: "/" },
                  { icon: <InstagramIcon />, link: "/" },
                  { icon: <TwitterIcon />, link: "/" },
                  { icon: <LinkedInIcon />, link: "/" },
                ].map((item, index) => (
                  <IconButton
                    key={index}
                    href={item.link}
                    sx={{
                      color: "#000000ff",
                      transition: "0.3s",
                      "&:hover": { color: "#fefafbff", transform: "scale(1.2)" },
                      padding: { xs: 1, sm: 1.5 },
                    }}
                    size="small"
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="a"
                  href={googleMapsReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Google Maps reviews for Interior and Exterior Painters"
                  sx={{ display: 'inline-block', borderRadius: 1, overflow: 'hidden' }}
                >
                  <Box
                    component={'img'}
                    src={google}
                    alt="Google reviews badge"
                    sx={{ width: 120, height: 70, background: 'white', padding: 1, display: 'block' }}
                  />
                </Box>
              </Box>
</Box>
          {/* Divider */}
          <Divider sx={{ my: { xs: 3, sm: 4 }, borderColor: "#344255" }} />

          {/* Footer Bottom */}
          <Box sx={{ textAlign: "center" }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#fff", 
                // fontFamily: "'Pacifico', cursive",
                fontSize: { xs: "0.8rem", sm: "0.875rem" }
              }}
            >
              © {new Date().getFullYear()}{" "}
              <span style={{ color: "#ffffffff", fontWeight: 700 }}>Interior and Exterior Painters</span>.  
              All Rights Reserved | Built with ❤️ in India
            </Typography>

            <Typography
              variant="body2"
              sx={{ 
                color: "#fff", 
                // fontFamily: "'Pacifico', cursive", 
                mt: 1,
                fontSize: { xs: "0.8rem", sm: "0.875rem" }
              }}
            >
              Powered by:{" "}
              <a
                href="https://www.cholabiz.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffffff", textDecoration: "none", fontWeight: 700 }}
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
