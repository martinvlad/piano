import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ContactMe = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: "linear-gradient(90deg, #121212, #1e1e1e)", // Subtle gradient
        color: "white",
        padding: "50px 40px", // More padding
        textAlign: "center",
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: "30px",
          textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
          fontWeight: "bold",
          letterSpacing: "3px",
          fontSize: "2.5rem", // Larger text for emphasis
        }}
      >
        Contact Me
      </Typography>

      <Box
        sx={{
          maxWidth: "700px",
          margin: "20px auto",
          padding: "30px",
          background: "rgba(0, 0, 0, 0.8)", // Darker background for box
          borderRadius: "20px", // Smoother corners
          boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.2)", // Softer shadow
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.3rem",
            lineHeight: 1.7,
            marginBottom: "40px",
            color: "#e0e0e0",
            textShadow: "0px 0px 5px rgba(255, 255, 255, 0.4)",
          }}
        >
          Have a question, a project in mind, or just want to say hi? Feel free
          to reach out to me anytime. I'm always happy to connect and discuss
          new ideas!
        </Typography>
        <Button
          variant="contained"
          href="mailto:martingvlad@gmail.com"
          sx={{
            backgroundColor: "#00d4ff",
            color: "white",
            fontSize: "1.2rem",
            padding: "15px 30px",
            borderRadius: "30px",
            textTransform: "none",
            transition: "all 0.3s ease-in-out", // Smooth animations
            ":hover": {
              backgroundColor: "#00aacc",
              boxShadow: "0px 0px 25px rgba(0, 212, 255, 0.8)",
              transform: "scale(1.05)", // Scale up on hover
            },
          }}
        >
          Email Me
        </Button>
      </Box>
    </Box>
  );
};

export default ContactMe;
