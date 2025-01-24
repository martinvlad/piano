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
import "./Videos.css";

const Videos = () => {
  const originalVideos = [
    { thumbnail: "/hero-background.jpg", title: "Unravel - Tokyo Ghoul" },
    {
      thumbnail: "/hero-background.jpg",
      title: "Attack on Titan - Vogel Im Kafig",
    },
    { thumbnail: "/hero-background.jpg", title: "Naruto - Sadness and Sorrow" },
    { thumbnail: "/hero-background.jpg", title: "One Piece - Binks' Sake" },
    { thumbnail: "/hero-background.jpg", title: "Death Note - L's Theme" },
    {
      thumbnail: "/hero-background.jpg",
      title: "Demon Slayer - Kamado Tanjiro's Theme",
    },
    {
      thumbnail: "/hero-background.jpg",
      title: "Your Lie in April - Hikaru Nara",
    },
    { thumbnail: "/hero-background.jpg", title: "Bleach - Number One" },
    {
      thumbnail: "/hero-background.jpg",
      title: "Fullmetal Alchemist - Brotherhood",
    },
  ];

  const clonedVideos = [
    ...originalVideos.slice(-3), // Last 3 slides
    ...originalVideos,
    ...originalVideos.slice(0, 3), // First 3 slides
  ];

  const [startIndex, setStartIndex] = useState(3); // Start with the real first slide
  const [containerWidth, setContainerWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // Track transition state

  const isMobile = useMediaQuery("(max-width: 768px)");
  const itemsPerPage = isMobile ? 1 : 3;
  const cardWidth = containerWidth / itemsPerPage - (isMobile ? 10 : 20);
  const cardHeight = cardWidth * 0.66;

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

  useEffect(() => {
    if (startIndex === clonedVideos.length - itemsPerPage) {
      // Reached the fake first slide (rightmost fake)
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition
        setStartIndex(itemsPerPage); // Reset to real first slide
      }, 1100); // Wait for animation
    }
    if (startIndex === 0) {
      // Reached the fake last slide (leftmost fake)
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition
        setStartIndex(clonedVideos.length - itemsPerPage * 2); // Reset to real last slide
      }, 1100); // Wait for animation
    }
  }, [startIndex, clonedVideos.length, itemsPerPage]);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50); // Re-enable transition after reset
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const handleNext = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePrev = () => {
    setStartIndex(startIndex - itemsPerPage);
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
        {/* Left Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            color: "white",
            backgroundColor: "#00d4ff",
            ":hover": {
              backgroundColor: "#00aacc",
              boxShadow: "0px 0px 10px #00d4ff",
            },
          }}
        >
          <ArrowBack sx={{ fontSize: isMobile ? "20px" : "30px" }} />
        </IconButton>

        {/* Carousel */}
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
              flexWrap: "nowrap",
              transition: isTransitioning ? "transform 1.1s ease" : "none",
              transform: `translateX(-${
                startIndex * (cardWidth + (isMobile ? 10 : 20))
              }px)`,
            }}
          >
            {clonedVideos.map((video, index) => (
              <Card
                key={index}
                className="video-card"
                sx={{
                  flex: "0 0 auto",
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: `${cardWidth}px`,
                  margin: `0 ${isMobile ? 5 : 10}px`,
                }}
              >
                <CardMedia
                  component="img"
                  image={video.thumbnail}
                  alt={video.title}
                  loading="eager"
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

        {/* Right Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            color: "white",
            backgroundColor: "#00d4ff",
            ":hover": {
              backgroundColor: "#00aacc",
              boxShadow: "0px 0px 10px #00d4ff",
            },
          }}
        >
          <ArrowForward sx={{ fontSize: isMobile ? "20px" : "30px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Videos;
