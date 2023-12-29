import React from "react";
import classes from "./header.module.css";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
function Header() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <div className={classes.topNav}>
          <div className="flex">
            <Typography
              variant="subtitle2"
              display="block"
              fontWeight={700}
              marginRight={"24px"}
            >
              <a href="tel:(225) 555-0118" className="textIconAlign">
                <LocalPhoneIcon sx={{ marginRight: "6px" }} />
                (225) 555-0118
              </a>
            </Typography>

            <Typography variant="subtitle2" display="block" fontWeight={700}>
              <a href="tel:(225) 555-0118" className="textIconAlign">
                <MailOutlineIcon sx={{ marginRight: "6px" }} />
                michelle.rivera@example.com
              </a>
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle2" display="block" fontWeight={700}>
              <p>Follow Us and get a chance to win 80% off</p>
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle2" display="block" fontWeight={700}>
              <p className="textIconAlign">
                Follow Us:{" "}
                <InstagramIcon
                  sx={{ marginLeft: "12px", marginRight: "12px" }}
                />{" "}
                <YouTubeIcon sx={{ marginRight: "12px" }} />{" "}
                <FacebookIcon sx={{ marginRight: "12px" }} /> <TwitterIcon />
              </p>
            </Typography>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Header;
