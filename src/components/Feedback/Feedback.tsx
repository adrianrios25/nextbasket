import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import user1 from "../../../public/user1.png";
import Image from "next/image";

import Rating from "@mui/material/Rating";
function Feedback() {
  return (
    <Box sx={{ mt: "80px", mb: "24px", mx: "56px", textAlign: "center" }}>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="center"
        color="#252B42"
        fontSize="24px"
      >
        What they say about us
      </Typography>

      <Image
        src={user1}
        alt="Featured Post image 1"
        style={{
          margin: "auto",
          display: "block",
          marginTop: "58px",
          marginBottom: "20px",
        }}
      />
      <Box sx={{ marginBottom: "20px" }}>
        <Rating name="read-only" value={4} readOnly />
      </Box>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="center"
        color="#737373"
        fontSize="14px"
        marginBottom={"20px"}
      >
        Slate helps you see how many more days you need to work to reach your
        financial goal.
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="center"
        color="#23A6F0"
        fontSize="14px"
      >
        Regina Miles
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="center"
        color="#252B42"
        fontSize="14px"
      >
        Designer
      </Typography>
    </Box>
  );
}

export default Feedback;
