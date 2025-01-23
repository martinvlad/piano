import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./Videos.css";

const Videos = () => {
  const videos = [
    { thumbnail: "/hero-background.webp", title: "Unravel - Tokyo Ghoul" },
    {
      thumbnail: "/hero-background.webp",
      title: "Attack on Titan - Vogel Im Kafig",
    },
    {
      thumbnail: "/hero-background.webp",
      title: "Naruto - Sadness and Sorrow",
    },
    { thumbnail: "/hero-background.webp", title: "One Piece - Binks' Sake" },
    { thumbnail: "/hero-background.webp", title: "Death Note - L's Theme" },
    {
      thumbnail: "/hero-background.webp",
      title: "Demon Slayer - Kamado Tanjiro's Theme",
    },
    {
      thumbnail: "/hero-background.webp",
      title: "Your Lie in April - Hikaru Nara",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Check for mobile screen size
  const itemsPerPage = isMobile ? 1 : 3; // Show 1 item per slide on mobile, 3 on larger screens
  const cardWidth = isMobile ? window.innerWidth : 300; // Full width for mobile
  const gap = isMobile ? 10 : 20; // Smaller gap on mobile

  const handleNext = () => {
    if (startIndex + itemsPerPage < videos.length) {
      setStartIndex(startIndex + 1); // Scroll by 1 on both mobile and larger screens
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); // Scroll by 1 on both mobile and larger screens
    }
  };

  return (
    <Box
      sx={{ backgroundColor: "#121212", padding: "50px", textAlign: "center" }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          marginBottom: "20px",
          fontFamily: "'Roboto Mono', monospace",
        }}
      >
        Featured Performances
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Material UI Left Button */}
        <IconButton
          onClick={handlePrev}
          disabled={startIndex === 0}
          sx={{
            color: "white",
            backgroundColor: "#00d4ff",
            ":hover": {
              backgroundColor: "#00aacc",
              boxShadow: "0px 0px 10px #00d4ff",
            },
            ":disabled": { backgroundColor: "gray", color: "white" },
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Carousel Container */}
        <Box
          className="carousel-container"
          sx={{
            overflow: "hidden",
            paddingTop: "20px",
            // Ensure no overflow
            maxWidth: isMobile
              ? "100%"
              : `${itemsPerPage * (cardWidth + gap)}px`, // Adjust for screen size
          }}
        >
          <Box
            className="carousel-track"
            style={{
              display: "flex",
              transition: "transform 0.5s ease", // Smooth transition for slides
              transform: `translateX(-${startIndex * (cardWidth + gap)}px)`, // Adjust based on card width + gap
            }}
          >
            {videos.map((video, index) => (
              <Card
                key={index}
                className="video-card"
                sx={{
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  flex: `0 0 ${cardWidth}px`, // Card width matches screen size
                  margin: `0 ${gap / 2}px`, // Adjust margins to set gap
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={video.thumbnail}
                  alt={video.title}
                  sx={{
                    width: "100%",
                    height: "200px", // Set consistent height for all images
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    position: "absolute", // Position relative to the card
                    bottom: 0, // Pin to the bottom of the card
                    left: 0, // Start from the left edge
                    width: "100%", // Ensure it spans the card width only
                    textAlign: "center", // Center text horizontally
                    background: "rgba(0, 0, 0, 0.8)", // Semi-transparent background for visibility
                    color: "white",
                    padding: "10px 0", // Adjust vertical padding for proper spacing
                    boxSizing: "border-box", // Include padding in width calculations
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "1rem",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      display: "block", // Ensure block-level behavior for proper centering
                      margin: 0, // Reset default margins
                      width: "100%", // Ensure text spans only the card's width
                    }}
                  >
                    {video.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Material UI Right Button */}
        <IconButton
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= videos.length}
          sx={{
            color: "white",
            backgroundColor: "#00d4ff",
            ":hover": {
              backgroundColor: "#00aacc",
              boxShadow: "0px 0px 10px #00d4ff",
            },
            ":disabled": { backgroundColor: "gray", color: "white" },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Videos;
