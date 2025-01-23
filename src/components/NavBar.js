import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(13, 13, 13, 0.6)", // Lower opacity
        backdropFilter: "blur(10px)", // Blur effect
        boxShadow: "none", // Remove shadow for minimalism
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Roboto Mono', serif",
            fontWeight: "bold",
            color: "#00d4ff",
            letterSpacing: 3,
          }}
        >
          MARTIN VLAD
        </Typography>
        <Box sx={{ display: "flex", gap: 6 }}>
          <Typography
            component="a"
            href="#home"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
            }}
          >
            HOME
          </Typography>
          <Typography
            component="a"
            href="#about"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
            }}
          >
            ABOUT
          </Typography>
          <Typography
            component="a"
            href="#about"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
            }}
          >
            PIANO SHEETS
          </Typography>
          <Typography
            component="a"
            href="#about"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
            }}
          >
            CONTACT
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
