import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

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

        {/* Desktop Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on small screens
            gap: 6,
          }}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="piano-sheets"
            smooth={true}
            duration={500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
          >
            PIANO SHEETS
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
          >
            CONTACT
          </ScrollLink>
        </Box>

        {/* Mobile Hamburger Menu */}
        <IconButton
          sx={{
            display: { xs: "block", md: "none" }, // Show only on small screens
            color: "#00d4ff",
          }}
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Align to the right
            gap: 2,
            padding: 2,
            backgroundColor: "#0d0d0d",
          }}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
            onClick={toggleMobileMenu}
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
            onClick={toggleMobileMenu}
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="piano-sheets"
            smooth={true}
            duration={500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
            onClick={toggleMobileMenu}
          >
            PIANO SHEETS
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={5500}
            offset={-64}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
            onClick={toggleMobileMenu}
          >
            CONTACT
          </ScrollLink>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
