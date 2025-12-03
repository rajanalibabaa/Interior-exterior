

import Grid  from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Container  from '@mui/material/Container';


import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import video1 from "../assets/interiorexteriorabout.mp4";

// Video/image
const videoImage = video1;

export default function AboutUsSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Typography
                     variant="h6"
                     fontWeight={700}
                     letterSpacing={2}
                     sx={{ color: "#0097b1", mb: 1,
                       '&::before': {
                         content: '""',
                         display: 'block',
                         width: 90,
                         height: 3,
                         background: '#000000ff',
                         mb: 1
                       }
       
                      }}
                   >
                     About Us
                   </Typography>

            <Typography
               variant="h3"
              fontWeight={900}
              sx={{
                mb: 3,
                lineHeight: 1.2,
                fontSize: { xs: "2rem", md: "2.5rem" },
                background: "linear-gradient(90deg, #0F1B2D, #153E90)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Commitment To Excellence
            </Typography>

            {/* Divider with Icon */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
              }}
            >
              <Box sx={{ height: 3, flexGrow: 1, backgroundColor: "#0097b1" }} />
              <VerifiedIcon sx={{ color: "#000000ff", fontSize: 28 }} />
              <Box sx={{ height: 3, flexGrow: 1, backgroundColor: "#0097b1" }} />
            </Box>

        <Grid container spacing={4} alignItems="flex-start" display={"flex"} flexDirection={"row"}>
          {/* Left Content */}
          <Grid item xs={12} md={7}>
            
            <Typography sx={{ color: "#000000ff", mb: 3 }}>
              Interior and Exterior Painters was created in 2020 with a vision to modernize<br/> the painting
              industry. We wanted to create a service that was easy,<br/> stress-free,
              and reliable. When you contact us,<br/> we ensure confidence that your
              vision will be delivered exactly as you imagine.
            </Typography>

            {/* Bullet Points */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                "High-quality finishes and attention to detail",
                "Dedication to completing the project on time",
                "Easy to reach us through calls, text, & email",
                "Commitment to customer satisfaction",
              ].map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon sx={{ color: "#0097b1", fontSize: 20 }} />
                  <Typography sx={{ color: "#000000ff" }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Video/Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="video"
              src={videoImage}
              alt="About Video"
              controls
              sx={{ width: "100%", maxWidth: 450, height: "auto", borderRadius: 2, objectFit: "cover" }}
            />
          </Grid>
        </Grid>

       
      </Container>
    </Box>
  );
}
