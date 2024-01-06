import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import service1icon from "../../../public/services/bx_bxs-book-reader.svg";
import service2icon from "../../../public/services/carbon_book.svg";
import service3icon from "../../../public/services/uil_arrow-growth.svg";
function Services() {
  return (
    <>
      <Box sx={{ mt: "80px", mb: "24px", mx: "56px" }}>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="20px"
        >
          Featured Products
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="24px"
        >
          THE BEST SERVICES
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="14px"
        >
          Problems trying to resolve the conflict between
        </Typography>

        <Box
          sx={{ display: { xs: "block", md: "grid" }, mt: "80px" }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={1}
        >
          <Box
            gridColumn="span 4"
            sx={{ height: "100%", margin: "8px", px: "40px" }}
          >
            <Card sx={{ maxWidth: 345, height: "100%", boxShadow: "none" }}>
              <Image
                src={service1icon}
                alt="Services 1 icon"
                style={{ margin: "auto", display: "block" }}
              />
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="center"
                    color="#252B42"
                    fontSize="24px"
                  >
                    Easy Wins
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
                    Get your best looking smile now!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>

          <Box
            gridColumn="span 4"
            sx={{ height: "100%", margin: "8px", px: "40px" }}
          >
            <Card sx={{ maxWidth: 345, height: "100%", boxShadow: "none" }}>
              <Image
                src={service2icon}
                alt="Services 2 icon"
                style={{ margin: "auto", display: "block" }}
              />
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="center"
                    color="#252B42"
                    fontSize="24px"
                  >
                    Concrete
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
                    Defalcate is most focused in helping you discover your most
                    beautiful smile
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>

          <Box
            gridColumn="span 4"
            sx={{ height: "100%", margin: "8px", px: "40px" }}
          >
            <Card sx={{ maxWidth: 345, height: "100%", boxShadow: "none" }}>
              <Image
                src={service3icon}
                alt="Services 3 icon"
                style={{ margin: "auto", display: "block" }}
              />
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="center"
                    color="#252B42"
                    fontSize="24px"
                  >
                    Hack Growth
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
                    Overcame any hurdle or any other problem.
                  </Typography>
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
