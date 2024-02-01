import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import logoImage from "../../public/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Button, Modal } from "@mui/material";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      id="AppBar"
      position="static"
      sx={{ backgroundColor: "transparent" }}
    >
      <Box
        sx={{
          display: { xs: "none", md: open ? "flex" : "none" },
          justifyContent: "center",
          alignItems: "center",
          paddingX: "25px",
        }}
        height={{ xs: "65px", md: "70px", lg: "80px" }}
        backgroundColor={"primary.light"}
      >
        <Box
          flexGrow={"1"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"center"}
          >
            Get 20% OFF on your first order. Subscribe to our newsletter and get
            your coupon!
          </Typography>
          <Button onClick={handleOpen} disableRipple variant="contained">
            Subscribe
          </Button>
          <Modal
            open={openModal}
            onClose={handleClose}
            sx={{ display: "flex" }}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box>
              <h2 id="child-modal-title">Text in a child modal</h2>
              <p id="child-modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Button onClick={handleClose}>Close Child Modal</Button>
            </Box>
          </Modal>
        </Box>
        <CloseIcon
          onClick={() => setOpen(!open)}
          style={{ color: "gray", cursor: "pointer" }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ paddingY: "0.5rem" }}>
        <Toolbar disableGutters>

        <NavLink 
            style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
            to="/"
            >
          <img src={logoImage} width="150" alt="Company Logo" />
          </NavLink>
          <Box sx={{ marginLeft: "auto", display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              display: { xs: "none", md: "flex" },
              gap: { md: "10px", lg: "15px" },
            }}
          >
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "#FAA831" : "#707B9E",
                 textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#FAA831',
                },
              })}
              to="/"
            >
              {" "}
              Home
            </NavLink>
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "#FAA831" : "#707B9E",
                 textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#FAA831',
                },
              })}
              to="/company"
            >
              {" "}
              Company
            </NavLink>
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "#FAA831" : "#707B9E",
                 textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#FAA831',
                },
              })}
              to="/agriculture"
            >
              {" "}
              Agriculture
            </NavLink>
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "#FAA831" : "#707B9E",
                 textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#FAA831',
                },
              })}
              to="/construction"
            >
              {" "}
              Construction
            </NavLink>
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "#FAA831" : "#707B9E",
                 textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#FAA831',
                },
              })}
              to="/news&media"
            >
              {" "}
              News & Media
            </NavLink>
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "#FAA831" : "#707B9E",
                 textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#FAA831',
                },
              })}
              to="/contact"
            >
              {" "}
              Contact
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
