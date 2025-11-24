import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How long does a painting project usually take?",
    answer:
      "The duration depends on the size of the area and surface conditions. Most residential projects take 1–3 days.",
  },
  {
    question: "Do you offer a free site inspection?",
    answer:
      "Yes! We provide a 100% free site inspection to assess surface condition and offer the right painting solution.",
  },
  {
    question: "What type of paints do you use?",
    answer:
      "We use high-quality, eco-friendly, low-VOC paints from trusted brands ensuring long-lasting finish and safety.",
  },
  {
    question: "Is there any warranty on your painting work?",
    answer:
      "Yes. All our painting services come with workmanship & paint manufacturer warranty depending on the product chosen.",
  },
  {
    question: "Do I need to move my furniture?",
    answer:
      "Our team helps with covering, moving, and protecting your furniture before starting the painting work.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: "#F7F7F7", py: 8 }}>
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{ color: "#07294D" }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          align="center"
          sx={{ mb: 4, color: "#555", maxWidth: "700px", mx: "auto" }}
        >
          Find answers to the most common questions customers ask about our
          painting services.
        </Typography>

        {/* Accordion List */}
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              mb: 2,
              borderRadius: "10px !important",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              sx={{
                background: "#fff",
                px: 3,
                py: 2,
                "& .MuiAccordionSummary-content": { fontWeight: 600 },
              }}
            >
              {item.question}
            </AccordionSummary>

            <AccordionDetails
              sx={{
                background: "#fafafa",
                px: 3,
                py: 2,
                color: "#444",
                fontSize: "15px",
              }}
            >
              {item.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
