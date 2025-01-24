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
  const cardWidth = isMobile ? 280 : 300; // Adjust width for mobile
  const cardHeight = isMobile ? 180 : 200; // Adjust height for mobile
  const gap = isMobile ? 5 : 20; // Reduced gap for mobile

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
      id="featured"
      sx={{
        backgroundColor: "#121212",
        padding: isMobile ? "30px 30px 70px 30px" : "50px", // Reduced padding on mobile
        textAlign: "center",
      }}
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
          gap: isMobile ? 1 : 2, // Reduced gap for mobile
        }}
      >
        {/* Material UI Left Button */}
        <IconButton
          onClick={handlePrev}
          disabled={startIndex === 0}
          sx={{
            color: "white",
            backgroundColor: "#00d4ff",
            fontSize: isMobile ? "small" : "large",
            padding: isMobile ? "6px" : "10px",
            ":hover": {
              backgroundColor: "#00aacc",
              boxShadow: "0px 0px 10px #00d4ff",
            },
            ":disabled": { backgroundColor: "gray", color: "white" },
          }}
        >
          <ArrowBack sx={{ fontSize: isMobile ? "20px" : "30px" }} />
        </IconButton>

        {/* Carousel Container */}
        <Box
          className="carousel-container"
          sx={{
            overflow: "hidden",
            paddingTop: isMobile ? "10px" : "20px", // Adjusted top padding for mobile
            maxWidth: isMobile
              ? "100%"
              : `${itemsPerPage * (cardWidth + gap)}px`, // Adjust for screen size
          }}
        >
          <Box
            className="carousel-track"
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${startIndex * (cardWidth + gap)}px)`,
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
                  flex: `0 0 ${cardWidth}px`,
                  margin: `0 ${gap / 2}px`,
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
                    height: `${cardHeight}px`,
                    objectFit: "contain",
                  }}
                />
                <CardContent
                  sx={{
                    position: "relative",
                    textAlign: "center",
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    padding: "10px 0",
                    marginTop: "-10px",
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
                      display: "block",
                      margin: 0,
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
            fontSize: isMobile ? "small" : "large",
            padding: isMobile ? "6px" : "10px",
            ":hover": {
              backgroundColor: "#00aacc",
              boxShadow: "0px 0px 10px #00d4ff",
            },
            ":disabled": { backgroundColor: "gray", color: "white" },
          }}
        >
          <ArrowForward sx={{ fontSize: isMobile ? "20px" : "30px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Videos;
