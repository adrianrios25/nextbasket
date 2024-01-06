import React from "react";
import classes from "./bottomBanner.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
function BottomBanner() {
  return (
    <Box
      className={classes.bottonBannerContainer}
      sx={{
        minHeight: { xs: "712px", md: "620px" },
        display: "flex",
        backgroundPosition: { xs: "55% bottom", md: "50% bottom" },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "38%" },
          margin: "auto",
          display: "block",
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23A6F0"
          fontSize="14px"
          marginBottom={"30px"}
        >
          Designing Better Experience
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="40px"
          marginBottom={"30px"}
        >
          Problems trying to resolve the conflict between
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="14px"
          marginBottom={"30px"}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23856D"
          fontSize="24px"
          marginBottom={"30px"}
        >
          $16.48
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#23A6F0",
            boxShadow: "none",
            margin: "auto",
            display: "block",
          }}
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Box>
    </Box>
  );
}

export default BottomBanner;
