"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TopItems from "@/components/TopItems/TopItems";
import DynamicItems from "@/components/DynamicItems/DynamicItems";
import Services from "@/components/Services/Services";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import Feedback from "@/components/Feedback/Feedback";
import InstaWidget from "@/components/InstaWidget/InstaWidget";
export default function HomePage() {
  return (
    <>
      <Box sx={{ padding: { xs: "8px 14px", md: "80px 147px" } }}>
        <TopItems />
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
          BEST SELLERS PRODUCTS
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
        <DynamicItems showLoadmoreBtn={true} />
        <Services />
        <FeaturedPost />
        <Box
          sx={{ display: { xs: "block", md: "grid" }, mt: "80px" }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={1}
        >
          <Box gridColumn="span 6" sx={{ height: "100%" }}>
            <Feedback />
          </Box>
          <Box gridColumn="span 6" sx={{ height: "100%" }}>
            <InstaWidget />
          </Box>
        </Box>
      </Box>
    </>
  );
}
