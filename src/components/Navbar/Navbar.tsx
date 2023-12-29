"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const pages = ["Products", "Pricing", "Blog"];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuButtonXS = {
    display: "block",
    color: "#737373",
    fontSize: "12px",
    fontWeight: "bold",
    minHeight: 0,
    minWidth: 0,
    padding: "6px",
  };

  const rightMenuButtonXS = {
    display: "block",
    color: "#23A6F0",
    fontSize: "12px",
    fontWeight: "bold",
    minHeight: 0,
    minWidth: 0,
    padding: "4px",
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "background.paper", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
            className="color-main"
          >
            Bandage
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 10,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
            className="color-main"
          >
            Bandage
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              marginLeft: "40px",
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button sx={menuButtonXS}>Home</Button>
              <Button sx={menuButtonXS}>
                <span className="textIconAlign">
                  Shop <KeyboardArrowDownOutlinedIcon />
                </span>
              </Button>

              <Button sx={menuButtonXS}>About</Button>

              <Button sx={menuButtonXS}>Blog</Button>
              <Button sx={menuButtonXS}>Contact</Button>
              <Button sx={menuButtonXS}>Pages</Button>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              <Button sx={rightMenuButtonXS}>
                <span className="textIconAlign">
                  <PersonOutlineOutlinedIcon />
                  Login / Register
                </span>
              </Button>
              <Button sx={rightMenuButtonXS}>
                <SearchOutlinedIcon />
              </Button>
              <Button sx={rightMenuButtonXS}>
                <ShoppingCartOutlinedIcon />
              </Button>
              <Button sx={rightMenuButtonXS}>
                <FavoriteBorderOutlinedIcon />
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
