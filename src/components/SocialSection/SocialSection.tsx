import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FormGroup } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/material";

function SocialSection() {
  return (
    <>
      <Box
        sx={{
          minHeight: "174px",
          display: "flex",
          backgroundColor: "#FAFAFA",
          justifyContent: { xs: "center", md: "space-between" },
          flexFlow: { xs: "column", md: "row" },
          alignItems: { xs: "start", md: "center" },
          paddingX: { xs: "45px", md: "140px" },
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="left"
          color="#252B42"
          fontSize="24px"
        >
          Bandage
        </Typography>
        <Box>
          <IconButton color="primary" aria-label="add to shopping cart">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "block", md: "grid" },
          mt: "50px",
          paddingX: { xs: "45px", md: "140px" },
          paddingRight: { xs: "45px", md: "0" },
          marginBottom: "50px",
        }}
        gridTemplateColumns="repeat(12, 1fr)"
        gap={1}
      >
        <Box gridColumn="span 2" sx={{ height: "100%" }}>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#252B42"
            fontSize="16px"
          >
            Company Info
          </Typography>
          <List dense={false}>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                About Us
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Carrier
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                We are hiring
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Blog
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box gridColumn="span 2" sx={{ height: "100%" }}>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#252B42"
            fontSize="16px"
          >
            Legal
          </Typography>
          <List dense={false}>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                About Us
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Carrier
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                We are hiring
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Blog
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box gridColumn="span 2" sx={{ height: "100%" }}>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#252B42"
            fontSize="16px"
          >
            Features
          </Typography>
          <List dense={false}>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Business Marketing
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                User Analytic
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Live Chat
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Unlimited Support
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box gridColumn="span 2" sx={{ height: "100%" }}>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#252B42"
            fontSize="16px"
          >
            Resources
          </Typography>
          <List dense={false}>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                IOS & Android
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Watch a Demo
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                Customers
              </Typography>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="left"
                color="#737373"
                fontSize="14px"
              >
                API
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box gridColumn="span 4" sx={{ height: "100%" }}>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#252B42"
            fontSize="16px"
          >
            Get In Touch
          </Typography>
          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <TextField variant="outlined" placeholder="Your Email" />
            <Button variant="contained" disableElevation>
              Subscribe
            </Button>
          </Box>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            textAlign="left"
            color="#737373"
            fontSize="12px"
            marginTop={"8px"}
          >
            Lore imp sum dolor Amit
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "74px",
          display: "flex",
          backgroundColor: "#FAFAFA",
          justifyContent: { xs: "center", md: "space-between" },
          flexFlow: { xs: "column", md: "row" },
          alignItems: { xs: "start", md: "center" },
          paddingX: { xs: "45px", md: "140px" },
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="left"
          color="#737373"
          fontSize="14px"
        >
          Made With Love By Finland All Right Reserved
        </Typography>
      </Box>
    </>
  );
}

export default SocialSection;
