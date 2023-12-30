import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { removeWishlistItem } from "../../app/globalRedux/Features/wishlistSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
function WishlistItem({
  id,
  image,
  title,
}: {
  id: string | number;
  image: string;
  title: string;
}) {
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "grid" },
        }}
        gridTemplateColumns="repeat(12, 1fr)"
        gap={1}
        borderBottom={"1px solid #212121"}
        padding="8px"
      >
        <Box gridColumn="span 4">
          <Image
            src={image}
            alt="Some text"
            width="200"
            height="200"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box gridColumn="span 5">
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color="#252B42"
            fontSize="16px"
            marginBottom={"14px"}
          >
            {title}
          </Typography>
        </Box>
        <Box gridColumn="span 3">
          <Button
            onClick={() => dispatch(removeWishlistItem(id))}
            endIcon={<DeleteIcon />}
            variant="outlined"
            size="small"
          >
            Remove
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default WishlistItem;
