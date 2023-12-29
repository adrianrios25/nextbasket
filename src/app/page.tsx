"use client";
import * as React from "react";
import Box from "@mui/material/Box";

import TopItems from "@/components/TopItems/TopItems";
import DynamicItems from "@/components/DynamicItems/DynamicItems";
import Typography from "@mui/material/Typography";
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
      </Box>
    </>
  );
}
