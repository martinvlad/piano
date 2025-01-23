import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

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
        {/* Logo */}
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
            href="#piano-sheets"
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
            href="#contact"
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

        {/* Mobile Hamburger Menu Toggle */}
        <IconButton
          sx={{
            display: { xs: "block", md: "none" }, // Show only on small screens
            color: "#00d4ff",
          }}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <Box
          ref={menuRef}
          className="hamburger-menu"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Align menu items to the right
            padding: 2,
            backgroundColor: "rgba(13, 13, 13, 0.85)", // Reduced opacity
            borderRadius: "8px 0 0 8px", // Rounded left border
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 64, // Adjust based on your navbar height
            right: 10,
            zIndex: 999,
          }}
        >
          <Typography
            component="a"
            href="#home"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontFamily: "'Roboto Mono', serif",
              margin: "10px 0",
              textAlign: "right", // Align text to the right
            }}
            onClick={toggleMobileMenu}
          >
            HOME
          </Typography>
          <Typography
            component="a"
            href="#about"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontFamily: "'Roboto Mono', serif",
              margin: "10px 0",
              textAlign: "right",
            }}
            onClick={toggleMobileMenu}
          >
            ABOUT
          </Typography>
          <Typography
            component="a"
            href="#piano-sheets"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontFamily: "'Roboto Mono', serif",
              margin: "10px 0",
              textAlign: "right",
            }}
            onClick={toggleMobileMenu}
          >
            PIANO SHEETS
          </Typography>
          <Typography
            component="a"
            href="#contact"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontFamily: "'Roboto Mono', serif",
              margin: "10px 0",
              textAlign: "right",
            }}
            onClick={toggleMobileMenu}
          >
            CONTACT
          </Typography>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
