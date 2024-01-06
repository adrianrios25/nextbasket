import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import gal1 from "../../../public/gallery/gal1.png";
import gal2 from "../../../public/gallery/gal2.png";
import gal3 from "../../../public/gallery/gal3.png";
import gal4 from "../../../public/gallery/gal4.png";
import gal5 from "../../../public/gallery/gal5.png";
import gal6 from "../../../public/gallery/gal6.png";
import gal7 from "../../../public/gallery/gal7.png";
import gal8 from "../../../public/gallery/gal8.png";
import gal9 from "../../../public/gallery/gal9.png";
function InstaWidget() {
  return (
    <Box
      sx={{ display: "grid", mt: "80px" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gap={1}
      marginBottom={"128px"}
    >
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal1} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal2} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal3} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal4} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal5} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal6} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal7} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal8} alt="clock icon" />
      </Box>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Image src={gal9} alt="clock icon" />
      </Box>
    </Box>
  );
}

export default InstaWidget;
