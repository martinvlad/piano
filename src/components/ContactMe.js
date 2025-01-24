import React from "react";
import { Box, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const ContactMe = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: "#1a1a1a", // Minimalist dark background
        color: "white",
        padding: "80px 20px", // Consistent padding
        textAlign: "center",
        fontFamily: "'Roboto Mono', monospace",
        display: "flex", // Flexbox ensures alignment
        flexDirection: "column",
        justifyContent: "center", // Center content vertically
        minHeight: "calc(100vh - 64px)", // Dynamically adjusted height
        boxSizing: "border-box", // Includes padding in height calculation
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          letterSpacing: "2px",
          fontSize: "2rem", // Balanced heading size
        }}
      >
        Contact Me
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          color: "#d1d1d1",
          marginBottom: "40px",
        }}
      >
        Have a question or a project in mind? Drop me an email!
      </Typography>

      <Button
        variant="contained"
        href="mailto:martingvlad@gmail.com"
        startIcon={<EmailIcon />} // Email Icon for better UX
        sx={{
          backgroundColor: "#00d4ff",
          color: "white",
          fontSize: "0.875rem", // Default button font size
          padding: "8px 16px", // Default button padding
          borderRadius: "25px", // Rounded button
          textTransform: "none",
          width: { xs: "100%", sm: "auto" }, // Full width on mobile, auto for larger screens
          maxWidth: "300px", // Set a max width for larger screens
          margin: "0 auto", // Center the button on larger screens
          transition: "all 0.3s ease-in-out",
          ":hover": {
            backgroundColor: "#00aacc",
            boxShadow: "0px 0px 15px rgba(0, 212, 255, 0.8)",
          },
        }}
      >
        Email Me
      </Button>
    </Box>
  );
};

export default ContactMe;
