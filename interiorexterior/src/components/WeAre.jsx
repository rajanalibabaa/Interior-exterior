import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EventIcon from '@mui/icons-material/Event';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import VerifiedIcon from '@mui/icons-material/Verified';
import { motion } from "framer-motion";
import img1 from "../assets/interiorexteriorherobest.png";


const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WeAre() {
  return (
    <Box
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{ 
        px: { xs: 2, sm: 4, md: 6, lg: 12 },
        py: { xs: 2, sm: 8, md: 5, lg: 6 }, 
        overflow: "hidden", 
        background: `url(${img1}) no-repeat right center`,
        backgroundSize: { 
          xs: "70% auto", 
          sm: "60% auto", 
          md: "50% auto", 
          lg: "40% auto",
          xl: "28% auto"
        },
        backgroundPosition: {
          xs: "right 10% center",
          sm: "right 5% center",
          md: "calc(100% - 80px) center",
          lg: "calc(100% - 100px) center"
        },
        minHeight: { xs: "auto", md: "600px" }
      }}
    >
      <Box maxWidth="lg" sx={{ width: "100%" }}>

        {/* FIXED RESPONSIVE LAYOUT */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} alignItems="left">

          {/* RIGHT TEXT - FIRST ON MOBILE */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 1 }}
            sx={{ textAlign: { xs: "left", md: "left" } }}
          >
            <motion.div variants={itemVariant}>
              <Typography
                variant="h6"
                fontWeight={700}
                letterSpacing={2}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  color: "#0097b1",
                  mb: 1,
                  fontSize: { xs: "1.9rem", sm: "2rem", md: "2.125rem" },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    width: { xs: 70, sm: 80, md: 90 },
                    height: 3,
                    background: '#000000ff',
                    mb: 1,
                    marginInline: { xs: "auto", md: 0 }
                  }
                }}
              >
                We Are The Best
              </Typography>

              <Typography
                variant="h3"
                fontWeight={900}
                sx={{
                  mb: 3,
                  lineHeight: 1.2,
                  fontSize: { 
                    xs: "1.2rem", 
                    sm: "1.8rem", 
                    md: "2.2rem", 
                    lg: "2.0rem" 
                  },
                  background: "linear-gradient(90deg, #0F1B2D, #153E90)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Always On Time And Never
                 Delay A Project
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                
                  mb: 4,
                  color: "#000000ff",
                  textAlign: { xs: "justify", md: "left" },
                  maxWidth: 1000,
                  mx: { xs: "auto", md: 0 },
                  fontWeight:{ xs: 600, md: 500 },
                  letterSpacing: 0.5,
                  fontSize: { 
                    xs: "0.875rem", 
                    sm: "0.9rem", 
                    md: "1rem" 
                  },
                  lineHeight: { 
                    xs: 1.5, 
                    md: 1.6 
                  }
                }}
              >
                We take pride in being one of the most trusted and preferred painting service providers. Our team delivers top-quality finishes, professional workmanship, and hassle-free service from start to finish. With a strong focus on reliability, transparency, and customer satisfaction, we make sure your home or workspace transforms beautifully—just the way you imagined.
              </Typography>
            </motion.div>

            {/* FEATURES GRID */}
            <Grid container spacing={{ xs: 2, sm: 3 }} sx={{display:"flex",justifyContent:{ xs:"center", md:"flex-start" }}}>
              {/* 1 */}
              <Grid item xs={12} sm={6} >
                <motion.div variants={itemVariant} >
                  <Box sx={{ 
                    display: "flex", 
                    gap: { xs: 1.5, sm: 2 },
                    alignItems: "flex-start"
                  }}>
                    <EventIcon sx={{ 
                      fontSize: { xs: 30, sm: 34, md: 36 }, 
                      color: "#63cbe0",
                      flexShrink: 0 
                    }} />
                    <Box>
                      <Typography fontWeight={700} sx={{
                        fontSize: { 
                          xs: "0.9rem", 
                          sm: "1rem", 
                          md: "1.125rem" 
                        }
                      }}>
                        Flexible Schedule Option
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{
                        fontSize: { 
                          xs: "0.75rem", 
                          sm: "0.8rem", 
                          md: "0.875rem" 
                        }
                      }}>
                        We bring the right people together to challenge
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* 2 */}
              <Grid item xs={12} sm={6}>
                <motion.div variants={itemVariant}>
                  <Box sx={{ 
                    display: "flex", 
                    gap: { xs: 1.5, sm: 2 },
                    alignItems: "flex-start"
                  }}>
                    <CleaningServicesIcon sx={{ 
                      fontSize: { xs: 30, sm: 34, md: 36 }, 
                      color: "#63cbe0",
                      flexShrink: 0 
                    }} />
                    <Box>
                      <Typography fontWeight={700} sx={{
                        fontSize: { 
                          xs: "0.9rem", 
                          sm: "1rem", 
                          md: "1.125rem" 
                        }
                      }}>
                        Eco Friendly and Clean
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{
                        fontSize: { 
                          xs: "0.75rem", 
                          sm: "0.8rem", 
                          md: "0.875rem" 
                        }
                      }}>
                        We bring the right people together to challenge
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* 3 */}
              <Grid item xs={12} sm={6}>
                <motion.div variants={itemVariant}>
                  <Box sx={{ 
                    display: "flex", 
                    gap: { xs: 1.5, sm: 2 },
                    alignItems: "flex-start"
                  }}>
                    <ColorLensIcon sx={{ 
                      fontSize: { xs: 30, sm: 34, md: 36 }, 
                      color: "#63cbe0",
                      flexShrink: 0 
                    }} />
                    <Box>
                      <Typography fontWeight={700} sx={{
                        fontSize: { 
                          xs: "0.9rem", 
                          sm: "1rem", 
                          md: "1.125rem" 
                        }
                      }}>
                        Free Colors Consultation
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{
                        fontSize: { 
                          xs: "0.75rem", 
                          sm: "0.8rem", 
                          md: "0.875rem" 
                        }
                      }}>
                        We bring the right people together to challenge
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* 4 */}
              <Grid item xs={12} sm={6}>
                <motion.div variants={itemVariant}>
                  <Box sx={{ 
                    display: "flex", 
                    gap: { xs: 1.5, sm: 2 },
                    alignItems: "flex-start"
                  }}>
                    <VerifiedIcon sx={{ 
                      fontSize: { xs: 30, sm: 34, md: 36 }, 
                      color: "#63cbe0",
                      flexShrink: 0 
                    }} />
                    <Box>
                      <Typography fontWeight={700} sx={{
                        fontSize: { 
                          xs: "0.9rem", 
                          sm: "1rem", 
                          md: "1.125rem" 
                        }
                      }}>
                        PDCA Certified
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{
                        fontSize: { 
                          xs: "0.75rem", 
                          sm: "0.8rem", 
                          md: "0.875rem" 
                        }
                      }}>
                        We bring the right people together to challenge
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          {/* LEFT IMAGE - FIRST ON DESKTOP, SECOND ON MOBILE */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
           
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}