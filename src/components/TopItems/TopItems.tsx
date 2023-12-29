"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import featured1 from "../../../public/featured/featured1.jpg";
import featured2 from "../../../public/featured/featured2.jpg";
import featured3 from "../../../public/featured/featured3.jpg";
import featured4 from "../../../public/featured/featured4.jpg";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  boxShadow: "none",
}));

export default function TopItems() {
  return (
    <Box
      sx={{ display: { xs: "block", md: "grid" }, mb: "80px" }}
      gridTemplateColumns="repeat(10, 1fr)"
      gap={1}
    >
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Item sx={{ position: "relative" }}>
          <Image
            src={featured1}
            alt="Some text"
            style={{ width: "100%", height: "auto" }}
          />
          <Box position="absolute" top="24px" left="24px">
            <Typography
              variant="subtitle2"
              fontWeight={700}
              textAlign="left"
              color="#2DC071"
            >
              5 items
            </Typography>
            <Typography
              variant="h1"
              fontSize="2.5rem"
              fontWeight={700}
              className="color-main"
            >
              Furniture
            </Typography>

            <Typography
              variant="subtitle2"
              className="color-main"
              fontWeight={700}
              textAlign="left"
            >
              Read More
            </Typography>
          </Box>
        </Item>
      </Box>
      <Box gridColumn="span 6">
        <Box sx={{ width: 1 }}>
          <Box
            gridTemplateColumns="repeat(12, 1fr)"
            gap={1}
            sx={{ display: { xs: "block", md: "grid" } }}
          >
            <Box gridColumn="span 12">
              <Item sx={{ position: "relative" }}>
                <Image
                  src={featured2}
                  alt="Some text"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box position="absolute" top="24px" left="24px">
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="left"
                    color="#2DC071"
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize="1.5rem"
                    fontWeight={700}
                    className="color-main"
                  >
                    Furniture
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="color-main"
                    fontWeight={700}
                    textAlign="left"
                  >
                    Read More
                  </Typography>
                </Box>
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item sx={{ position: "relative" }}>
                <Image
                  src={featured3}
                  alt="Some text"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box position="absolute" top="24px" left="24px">
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="left"
                    color="#2DC071"
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize="1.5rem"
                    fontWeight={700}
                    className="color-main"
                  >
                    Furniture
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="color-main"
                    fontWeight={700}
                    textAlign="left"
                  >
                    Read More
                  </Typography>
                </Box>
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item sx={{ position: "relative" }}>
                <Image
                  src={featured4}
                  alt="Some text"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box position="absolute" top="24px" left="24px">
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="left"
                    color="#2DC071"
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize="1.5rem"
                    fontWeight={700}
                    className="color-main"
                  >
                    Furniture
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="color-main"
                    fontWeight={700}
                    textAlign="left"
                  >
                    Read More
                  </Typography>
                </Box>
              </Item>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
