import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExploreIcon from "@mui/icons-material/Explore";
import { Parallax } from "react-scroll-parallax";
import { ReactTyped } from "react-typed";

import "./Hero.css";

const Hero = () => {
  return (
    <Box
      id="hero" // Add ID here for scroll targeting
      sx={{ width: "100%", overflow: "hidden", position: "relative" }}
    >
      {/* Parallax Background */}
      <Parallax speed={-20}>
        <Box
          sx={{
            backgroundImage: `url("/newhero.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "calc(100vh - 56px)", // Correct height adjustment
            width: "100%",
          }}
        />
      </Parallax>

      {/* Hero Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "calc(100vh - 56px)", // Consistent height for content
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            border: "none",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fefefe",
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: "bold",
              marginBottom: "10px",
              textShadow: "0px 0px 10px rgba(238, 229, 229, 0.8)",
            }}
          >
            Martin Vladimirov
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              marginBottom: "20px",
              color: "#FFFFFF",
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            <ReactTyped
              strings={[
                "The art of sound",
                "Timeless aesthetics",
                "Unveiling harmony",
                "Redefining artistry",
                "Experience music",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </Typography>

          {/* Icons Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              marginTop: "20px",
            }}
          >
            <IconButton
              href="https://youtube.com/@martinvlad"
              target="_blank"
              sx={{
                color: "white",
                backgroundColor: "#FF0000",
                ":hover": {
                  backgroundColor: "#cc0000",
                  transform: "scale(1.2)",
                  boxShadow: "0px 0px 15px rgba(255, 0, 0, 0.5)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <YouTubeIcon sx={{ fontSize: "30px" }} />
            </IconButton>

            <IconButton
              href="https://instagram.com/martinvlad1k"
              target="_blank"
              sx={{
                color: "white",
                backgroundColor: "#E1306C",
                ":hover": {
                  backgroundColor: "#b42458",
                  transform: "scale(1.2)",
                  boxShadow: "0px 0px 15px rgba(225, 48, 108, 0.5)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <InstagramIcon sx={{ fontSize: "30px" }} />
            </IconButton>

            <IconButton
              href="#services"
              sx={{
                color: "white",
                backgroundColor: "#00D4FF",
                ":hover": {
                  backgroundColor: "#00aacc",
                  transform: "scale(1.2)",
                  boxShadow: "0px 0px 15px rgba(0, 212, 255, 0.5)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <ExploreIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
