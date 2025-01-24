import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [iconTransition, setIconTransition] = useState(false); // Track icon transition
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    // Set a short delay before toggling the icon for smoother transition
    if (mobileMenuOpen) {
      setIconTransition(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIconTransition(false);
      }, 1300); // 300ms matches the transform animation
    } else {
      setMobileMenuOpen(true);
    }
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu when the screen size changes to non-mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          variant="h6"
          component={ScrollLink} // Add ScrollLink here
          to="hero" // Target the 'hero' section
          smooth={true}
          duration={2500}
          offset={-64} // Adjust for the navbar height
          style={{ textDecoration: "none" }}
          sx={{
            fontFamily: "'Roboto Mono', serif",
            fontWeight: "bold",
            color: "#00d4ff",
            letterSpacing: 2,
            fontStyle: "italic",
            cursor: "pointer",
            textDecoration: "none",
            // Ensure it doesn't look like a link
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
            to="hero"
            smooth={true}
            duration={2500}
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
            to="featured"
            smooth={true}
            duration={2500}
            offset={-56}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
          >
            FEATURED
          </ScrollLink>
          <ScrollLink
            to="piano-sheets"
            smooth={true}
            duration={2500}
            offset={-56}
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
            duration={2500}
            offset={-56}
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
            transition: "transform 0.3s ease", // Smooth transition for the icon
            transform: iconTransition ? "rotate(90deg)" : "rotate(0deg)", // Rotate for visual effect
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
            justifyContent: "space-between",
            alignItems: "flex-end", // Align menu items to the right
            padding: 2,
            backgroundColor: "rgba(13, 13, 13, 0.85)", // Reduced opacity
            borderRadius: "8px 0 0 8px", // Rounded left border
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 64, // Adjust based on your navbar height
            right: 10,
            zIndex: 999,
            gap: "20px",
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <ScrollLink
            to="hero"
            smooth={true}
            duration={2500}
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
            to="featured"
            smooth={true}
            duration={2500}
            offset={-56}
            style={{
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "'Roboto Mono', serif",
              cursor: "pointer",
            }}
            onClick={toggleMobileMenu}
          >
            FEATURED
          </ScrollLink>
          <ScrollLink
            to="piano-sheets"
            smooth={true}
            duration={2500}
            offset={-56}
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
            duration={2500}
            offset={-56}
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
