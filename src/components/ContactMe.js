import React from "react";
import { Box, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const ContactMe = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: "linear-gradient(135deg, #121212, #1a1a1a)", // Base gradient background
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
        fontFamily: "'Roboto Mono', monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)", // Ensure flush height
        position: "relative",
        overflow: "hidden", // Contain dynamic elements
        boxSizing: "border-box", // Account for padding in height
      }}
    >
      {/* Animated Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3), transparent)",
          animation: "rotate-gradient 10s infinite linear",
          zIndex: 0,
          filter: "blur(120px)",
        }}
      />

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          letterSpacing: "2px",
          fontSize: "2rem",
          zIndex: 1, // Ensure it appears above background
        }}
      >
        Contact Me
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          color: "#d1d1d1",
          marginBottom: "40px",
          zIndex: 1,
        }}
      >
        Have a question or a project in mind? Drop me an email!
      </Typography>

      {/* Email Button */}
      <Button
        variant="contained"
        href="mailto:martingvlad@gmail.com"
        startIcon={<EmailIcon />}
        sx={{
          backgroundColor: "#00d4ff",
          color: "white",
          fontSize: "0.875rem",
          padding: "10px 20px",
          borderRadius: "25px",
          textTransform: "none",
          width: { xs: "100%", sm: "auto" },
          maxWidth: "300px",
          margin: "0 auto",
          zIndex: 1,
          transition: "all 0.3s ease-in-out",
          ":hover": {
            backgroundColor: "#00aacc",
            boxShadow: "0px 0px 15px rgba(0, 212, 255, 0.8)",
            transform: "scale(1.05)", // Subtle hover scaling
          },
        }}
      >
        Email Me
      </Button>

      {/* Floating Glow Animations */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "rgba(0, 212, 255, 0.4)",
          filter: "blur(100px)",
          animation: "float 6s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "15%",
          width: "200px",
          height: "200px",
          background: "rgba(0, 212, 255, 0.3)",
          filter: "blur(100px)",
          animation: "float 8s ease-in-out infinite alternate-reverse",
          zIndex: 0,
        }}
      />

      {/* Keyframes for Animations */}
      <style>
        {`
          @keyframes rotate-gradient {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(20px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default ContactMe;
