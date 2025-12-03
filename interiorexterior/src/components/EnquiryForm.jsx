import React, { useState } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";


import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const HeroContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  // minHeight: "10vh",
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: { xs: 325 },
  padding: "20px 22px",
  background: "#21cdecff",
  backdropFilter: "blur(12px)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  zIndex: 10,
}));

const InputField = styled(TextField)(() => ({
  marginBottom: "14px",
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    fontSize: "14px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "13px",
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  fontSize: "15px",
  textTransform: "none",
  fontWeight: 700,
  padding: "12px",
  borderRadius: 12,
  background: "#0097b1",
  "&:hover": {
    background: "#0097b1",
    transform: "translateY(-2px)",
  },
  transition: "0.3s",
}));

export default function HeroBanner() {
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
      
      
      submissionData.append('_autoresponse', `Thank you ${formData.fullName} for requesting a FREE estimate! We will contact you shortly.`);
  
      // Submit the form data
      fetch('https://formsubmit.co/3ab397a631791c830fa5cedc882dcce6', {
        method: 'POST',
        body: submissionData,
      })
      .then(response => {
        if (response.ok) {
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
    <HeroContainer
      // component={div}
      initial="hidden"
      animate="show"
    >
      <FormWrapper
        // component={div}
        variants={fadeLeft}
        action="https://formsubmit.co/3ab397a631791c830fa5cedc882dcce6"
        method="POST"
      >
        {/* <Typography
          variant="h6"
          fontWeight={800}
          textAlign="center"
          mb={1}
          sx={{
            background: "linear-gradient(35deg, #ffffffff, #ffffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get Free Quote
        </Typography>

        <InputField
          fullWidth
          label="Full Name"
          name="name"
          required
          sx={{
            "& .MuiInputBase-input": {
              color: "white", // input text color
            },
            "& .MuiInputLabel-root": {
              color: "white", // label color
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // default border
              },
              "&:hover fieldset": {
                borderColor: "white", // hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // focused border
              },
            },
          }}
        />

        <InputField
          fullWidth
          label="Phone Number"
          name="phone"
          required
          sx={{
            "& .MuiInputBase-input": {
              color: "white", // input text color
            },
            "& .MuiInputLabel-root": {
              color: "white", // label color
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // default border
              },
              "&:hover fieldset": {
                borderColor: "white", // hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // focused border
              },
            },
          }}
        />

        <InputField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          required
          sx={{
            "& .MuiInputBase-input": {
              color: "white", // input text color
            },
            "& .MuiInputLabel-root": {
              color: "white", // label color
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // default border
              },
              "&:hover fieldset": {
                borderColor: "white", // hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // focused border
              },
            },
          }}
        />

        <InputField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={3}
          required
          sx={{
            mb: 3,
            "& .MuiInputBase-input": {
              color: "white", // input text color
            },
            "& .MuiInputLabel-root": {
              color: "white", // label color
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // default border
              },
              "&:hover fieldset": {
                borderColor: "white", // hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // focused border
              },
            },
          }}
        />

        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </SubmitButton> */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            // backgroundColor: "#0097b1",
            // padding: { xs: 3, md: 4 },
            // borderRadius: "20px",
            // boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "& .MuiInputBase-input": {
      color: "white",            // input text color
    },
    "& .MuiInputLabel-root": {
      color: "white",            // label color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",    // default border
      },
      "&:hover fieldset": {
        borderColor: "white",    // hover border
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",    // focused border
      },
    },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "#000000ff",
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
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#0097b1",
              color: "white",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              borderRadius: "10px",
              py: 1.5,
              '&:hover': {
                backgroundColor: "#0097b1",
              }
            }}
          >
            Submit
          </Button>
        </Box>
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
      </FormWrapper>
    </HeroContainer>
  );
}
