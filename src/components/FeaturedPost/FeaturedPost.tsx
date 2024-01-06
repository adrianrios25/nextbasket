import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import featuredPostimg1 from "../../../public/featuredPost/featuredpost1.png";
import featuredPostimg2 from "../../../public/featuredPost/featuredpost2.png";
import featuredPostimg3 from "../../../public/featuredPost/featuredpost3.png";
import clockIcon from "../../../public/icons/clock.svg";
import chartIcon from "../../../public/icons/chart-outlined.svg";
function Services() {
  return (
    <>
      <Box sx={{ mt: "192px", mb: "112px", mx: "56px" }}>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23A6F0"
          fontSize="14px"
        >
          Practice Advice
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="40px"
        >
          Featured Post
        </Typography>

        <Box
          sx={{ display: { xs: "block", md: "grid" }, mt: "80px" }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={1}
        >
          <Box gridColumn="span 4" sx={{ height: "100%", margin: "4px" }}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <Box sx={{ position: "relative" }}>
                <Image
                  src={featuredPostimg1}
                  alt="Featured Post image 1"
                  style={{ margin: "auto", display: "block" }}
                />
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#fff"
                  fontSize="14px"
                  mr="15px"
                  bgcolor="#E74040"
                  position="absolute"
                  padding="4px 16px"
                  top="20px"
                  left="20px"
                  borderRadius={"3px"}
                >
                  NEW
                </Typography>
              </Box>
              <CardActionArea>
                <CardContent>
                  <Box sx={{ display: "flex", width: "100%", mb: "16px" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                      mr="15px"
                    >
                      Trending
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                    >
                      New
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    color="#252B42"
                    fontSize="20px"
                  >
                    Loudest à la Madison #1 (L&apos;integral)
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    textAlign="center"
                    color="#737373"
                    fontSize="14px"
                    marginTop="8px"
                    marginBottom="8px"
                  >
                    We focus on ergonomics and meeting you where you work.
                    It&apos;s only a keystroke away.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={clockIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        22 April 2021
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={chartIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        10 comments
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton aria-label="delete">
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#737373"
                        fontSize="14px"
                        mr="4px"
                      >
                        Learn More
                      </Typography>
                      <ArrowForwardIosIcon style={{ color: "#23A6F0" }} />
                    </IconButton>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box gridColumn="span 4" sx={{ height: "100%", margin: "4px" }}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <Box sx={{ position: "relative" }}>
                <Image
                  src={featuredPostimg2}
                  alt="Featured Post image 2"
                  style={{ margin: "auto", display: "block" }}
                />
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#fff"
                  fontSize="14px"
                  mr="15px"
                  bgcolor="#E74040"
                  position="absolute"
                  padding="4px 16px"
                  top="20px"
                  left="20px"
                  borderRadius={"3px"}
                >
                  NEW
                </Typography>
              </Box>
              <CardActionArea>
                <CardContent>
                  <Box sx={{ display: "flex", width: "100%", mb: "16px" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#8EC2F2"
                      fontSize="12px"
                      mr="15px"
                    >
                      Google
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                      mr="15px"
                    >
                      Trending
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                    >
                      New
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    color="#252B42"
                    fontSize="20px"
                  >
                    Loudest à la Madison #1 (L&apos;integral)
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    textAlign="center"
                    color="#737373"
                    fontSize="14px"
                    marginTop="8px"
                    marginBottom="8px"
                  >
                    We focus on ergonomics and meeting you where you work.
                    It&apos;s only a keystroke away.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={clockIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        22 April 2021
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={chartIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        10 comments
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton aria-label="delete">
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#737373"
                        fontSize="14px"
                        mr="4px"
                      >
                        Learn More
                      </Typography>
                      <ArrowForwardIosIcon style={{ color: "#23A6F0" }} />
                    </IconButton>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box gridColumn="span 4" sx={{ height: "100%", margin: "4px" }}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <Box sx={{ position: "relative" }}>
                <Image
                  src={featuredPostimg3}
                  alt="Featured Post image 3"
                  style={{ margin: "auto", display: "block" }}
                />
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#fff"
                  fontSize="14px"
                  mr="15px"
                  bgcolor="#E74040"
                  position="absolute"
                  padding="4px 16px"
                  top="20px"
                  left="20px"
                  borderRadius={"3px"}
                >
                  NEW
                </Typography>
              </Box>
              <CardActionArea>
                <CardContent>
                  <Box sx={{ display: "flex", width: "100%", mb: "16px" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#8EC2F2"
                      fontSize="12px"
                      mr="15px"
                    >
                      Google
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                      mr="15px"
                    >
                      Trending
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                    >
                      New
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    color="#252B42"
                    fontSize="20px"
                  >
                    Loudest à la Madison #1 (L&apos;integral)
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    textAlign="center"
                    color="#737373"
                    fontSize="14px"
                    marginTop="8px"
                    marginBottom="8px"
                  >
                    We focus on ergonomics and meeting you where you work.
                    It&apos;s only a keystroke away.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={clockIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        22 April 2021
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={chartIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        10 comments
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton aria-label="delete">
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#737373"
                        fontSize="14px"
                        mr="4px"
                      >
                        Learn More
                      </Typography>
                      <ArrowForwardIosIcon style={{ color: "#23A6F0" }} />
                    </IconButton>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Services;
