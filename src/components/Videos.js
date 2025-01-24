import React, { useState, useEffect } from "react";
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
import { Link as ScrollLink } from "react-scroll"; // Import for scroll behavior
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
  const [containerWidth, setContainerWidth] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)"); // Check for mobile screens
  const itemsPerPage = isMobile ? 1 : 3; // Number of items per slide

  // Adjust card width dynamically
  const cardWidth = containerWidth / itemsPerPage - (isMobile ? 10 : 20); // Account for gap
  const cardHeight = cardWidth * 0.66; // Maintain aspect ratio (e.g., 3:2)

  // Navbar height for scroll offset
  const NAVBAR_HEIGHT = 64; // Adjust this value based on your navbar height

  // Update container width on window resize
  useEffect(() => {
    const updateContainerWidth = () => {
      const carouselContainer = document.querySelector(".carousel-container");
      if (carouselContainer) {
        setContainerWidth(carouselContainer.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < videos.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <Box
      id="featured"
      sx={{
        backgroundColor: "#121212",
        padding: isMobile ? "60px 10px" : "50px",
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
          gap: isMobile ? 1 : 2,
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
          <ArrowBack sx={{ fontSize: isMobile ? "20px" : "30px" }} />
        </IconButton>

        {/* Carousel Container */}
        <Box
          className="carousel-container"
          sx={{
            overflow: "hidden",
            paddingTop: isMobile ? "10px" : "20px",
            maxWidth: "100%",
          }}
        >
          <Box
            className="carousel-track"
            style={{
              display: "flex",
              transition: "transform 1.1s ease",
              transform: `translateX(-${
                startIndex * (cardWidth + (isMobile ? 10 : 20))
              }px)`,
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
                  margin: `0 ${isMobile ? 5 : 10}px`,
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
                    objectFit: "cover",
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
