import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
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
  const itemsPerPage = 3;
  const gap = 20;

  const handleNext = () => {
    if (startIndex + itemsPerPage < videos.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <Box
      sx={{ backgroundColor: "#121212", padding: "20px", textAlign: "center" }}
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
        <Box className="carousel-container">
          <Box
            className="carousel-track"
            style={{
              transform: `translateX(-${startIndex * (300 + gap)}px)`, // Account for card width + gap
            }}
          >
            {videos.map((video, index) => (
              <Card
                key={index}
                className="video-card"
                sx={{
                  position: "relative", // Make card a positioning context
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  flex: "0 0 300px",
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
                    height: "200px",
                    objectFit: "cover", // Ensure the image fits properly
                  }}
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.6)", // Semi-transparent background for text
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                    zIndex: 2, // Ensure text stays on top
                    height: "50px", // Fixed height for consistent alignment
                    overflow: "hidden", // Prevent text from overflowing
                    display: "flex",
                    alignItems: "center", // Center text vertically
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "1rem",
                      textOverflow: "ellipsis", // Add ellipsis for overflow text
                      overflow: "hidden",
                      whiteSpace: "nowrap", // Prevent text wrapping
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
