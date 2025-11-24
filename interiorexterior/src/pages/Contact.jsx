import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import contactBanner from "../assets/ContactBanner.jpg"; 
import right from "../assets/ContactUsSideimage.jpg";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate email
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // Show the popup
    setShowPopup(true);

    // Create FormData for submission
    const submissionData = new FormData();
    submissionData.append('fullName', formData.fullName);
    submissionData.append('email', formData.email);
    submissionData.append('phone', formData.phone);
    submissionData.append('message', formData.message);
    submissionData.append('_subject', 'New Contact Form Submission - FREE Estimate Request');
    submissionData.append('_captcha', 'false');
    submissionData.append('_template', 'table');
    
    // Optional: Add a thank you message in the response
    submissionData.append('_autoresponse', `Thank you ${formData.fullName} for requesting a FREE estimate! We will contact you shortly.`);

    // Submit the form data
    fetch('https://formsubmit.co/4928bdeea462118f9e193be9cd0da148', {
      method: 'POST',
      body: submissionData,
    })
    .then(response => {
      if (response.ok) {
        console.log('Contact form submitted successfully');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        console.error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "250px", sm: "300px", md: "420px" },
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          marginTop: "-30px",   
          zIndex: -1,        
        }}
      >
        {/* Black Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",            
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.9rem" },
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              mb: 1
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              maxWidth: "80%",
            }}
          >
            We value every conversation. Let's connect!
          </Typography>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: { xs: 3, md: 5 },
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 8 },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={right}
            alt="contact"
            style={{
              width: "100%",
              maxWidth: "580px",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </Box>

        {/* MIDDLE CONTENT */}
        <Box 
          sx={{ 
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 0, md: 1 }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.2,
              textAlign: "center"
            }}
          >
            Let's Discuss Your Next Painting Project!
          </Typography>

          <Typography 
            sx={{ 
              mb: 4, 
              color: "#444",
              fontSize: "1.1rem",
              lineHeight: 1.6
            }}
          >
            Book an appointment with our team of professionals or submit for a
            FREE quote online.
          </Typography>

          <Box sx={{ mb: 2 }}>
            {[
              "Free Consultation",
              "Budget Quotations",
              "16 Years of Experience",
              "Eco Friendly Solutions",
              "5-Star Rating",
              "100% Satisfaction Guaranteed",
              "Fully Licensed and Insured",
            ].map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  mb: 2 
                }}
              >
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    bgcolor: "#FFB74D",
                    borderRadius: "50%",
                    mr: 2,
                    flexShrink: 0
                  }}
                />
                <Typography 
                  sx={{ 
                    fontSize: "1rem",
                    lineHeight: 1.5
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            backgroundColor: "#FFF6E9",
            padding: { xs: 3, md: 4 },
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              mb: 3,
              textAlign: "center",
            }}
          >
            Schedule A FREE Estimate!
          </Typography>

          <TextField
            name="fullName"
            label="Full Name"
            fullWidth
            sx={{ mb: 2.5 }}
            size="small"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <TextField
            name="email"
            type="email"
            label="Email Address"
            fullWidth
            sx={{ mb: 2.5 }}
            size="small"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            name="phone"
            label="Phone Number"
            fullWidth
            sx={{ mb: 2.5 }}
            size="small"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            name="message"
            label="More Information"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 3 }}
            size="small"
            value={formData.message}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#FFB74D",
              color: "black",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              borderRadius: "10px",
              py: 1.5,
              '&:hover': {
                backgroundColor: "#FFA726",
              }
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {/* Popup Component */}
      {showPopup && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          onClick={() => setShowPopup(false)}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              padding: 4,
              borderRadius: 2,
              textAlign: 'center',
              maxWidth: '400px',
              margin: 2,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Typography variant="h6" sx={{ mb: 2, color: '#FFB74D', fontWeight: 700 }}>
              Thank You! 🎉
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'black' }}>
              Thank you for requesting a FREE estimate! We have received your information and our team will contact you shortly.
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, color: 'black' }}>
              We typically respond within 24 hours during business days.
            </Typography>
            <Button
              variant="contained"
              onClick={() => setShowPopup(false)}
              sx={{
                backgroundColor: '#FFB74D',
                color: 'black',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#FFA726',
                }
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Contact;