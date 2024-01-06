"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/globalRedux/store";
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
import Modal from "@mui/material/Modal";
import CartItem from "../Cart/CartItem";
import WishlistItem from "../Wishlist/WishlistItem";

const pages = ["Products", "Pricing", "Blog"];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "720" },
  height: { xs: "80%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const getTotal = (cart: any) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item: any) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};

function Navbar() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const [open, setOpen] = useState(false);
  const [openModalWL, setOpenModalWL] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModalWL = () => setOpenModalWL(true);
  const handleCloseModalWL = () => setOpenModalWL(false);

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
            href="/"
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
              marginThreshold={0}
              sx={{
                display: { xs: "block", md: "none" },
                width: "100%",
                maxWidth: "100%",
                left: 0,
                right: 0,
              }}
            >
              <MenuItem>
                <Typography textAlign="center" width={"100%"}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" width={"100%"}>
                  Shop
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" width={"100%"}>
                  About
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" width={"100%"}>
                  Blog
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" width={"100%"}>
                  Contact
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center" width={"100%"}>
                  Pages
                </Typography>
              </MenuItem>

              <MenuItem>
                <Button sx={{ margin: "auto" }}>
                  <span className="textIconAlign">
                    <PersonOutlineOutlinedIcon />
                    Login / Register
                  </span>
                </Button>
              </MenuItem>
              <MenuItem>
                <Button sx={{ margin: "auto" }}>
                  <SearchOutlinedIcon />
                </Button>
              </MenuItem>
              <MenuItem>
                <Button sx={{ margin: "auto" }} onClick={handleOpen}>
                  <ShoppingCartOutlinedIcon />
                </Button>
              </MenuItem>
              <MenuItem>
                <Button sx={{ margin: "auto" }} onClick={handleOpenModalWL}>
                  <FavoriteBorderOutlinedIcon />
                </Button>
              </MenuItem>
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
              <Button href="/" sx={menuButtonXS}>
                Home
              </Button>
              <Button href="#" sx={menuButtonXS}>
                <span className="textIconAlign">
                  Shop <KeyboardArrowDownOutlinedIcon />
                </span>
              </Button>

              <Button href="#" sx={menuButtonXS}>
                About
              </Button>

              <Button href="#" sx={menuButtonXS}>
                Blog
              </Button>
              <Button href="#" sx={menuButtonXS}>
                Contact
              </Button>
              <Button href="#" sx={menuButtonXS}>
                Pages
              </Button>
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
              <Button sx={rightMenuButtonXS} onClick={handleOpen}>
                <ShoppingCartOutlinedIcon />
              </Button>
              <Button sx={rightMenuButtonXS} onClick={handleOpenModalWL}>
                <FavoriteBorderOutlinedIcon />
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h2"
              component="h2"
              fontSize={"32px"}
              fontWeight={"700"}
              borderBottom={"1px solid #212121"}
            >
              Shopping Cart
            </Typography>
            {cart?.map((item: any) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}

            <Box
              marginTop="24px"
              padding="8px"
              gridTemplateColumns="repeat(12, 1fr)"
              gap={1}
              sx={{
                display: { xs: "block", md: "grid" },
              }}
            >
              <Box gridColumn="span 6">
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  color="#252B42"
                  fontSize="16px"
                  marginBottom={"14px"}
                >
                  ORDER SUMMARY
                </Typography>
              </Box>
              <Box gridColumn="span 6" textAlign={"right"}>
                <Typography
                  variant="subtitle2"
                  fontWeight={400}
                  color="#252B42"
                  fontSize="16px"
                  marginBottom={"14px"}
                >
                  SUBTOTAL({getTotal(cart).totalQuantity}):{" "}
                  <strong>${getTotal(cart).totalPrice}</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      </Modal>

      <Modal
        open={openModalWL}
        onClose={handleCloseModalWL}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h2"
              component="h2"
              fontSize={"32px"}
              fontWeight={"700"}
              borderBottom={"1px solid #212121"}
            >
              Wishlist
            </Typography>
            {wishlist?.map((item: any) => (
              <WishlistItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
          </Box>
        </>
      </Modal>
    </AppBar>
  );
}

export default Navbar;
