"use client";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "@/app/globalRedux/store";
import { getSingleProduct } from "@/app/globalRedux/Features/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import DynamicItems from "@/components/DynamicItems/DynamicItems";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { default as MUILink } from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Carousel from "nuka-carousel";
import Image from "next/image";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function Product({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: RootState) => state.products.singleProductPayload
  );

  useEffect(() => {
    dispatch(getSingleProduct({ id: params.id }));
  }, []);

  const breadcrumbs = [
    <MUILink href={`/`} key="1">
      <Typography color="text.primary">Home</Typography>
    </MUILink>,
    <Typography key="2" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <>
      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 147px" },
          backgroundColor: "#FAFAFA",
        }}
      >
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Box>
      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 147px" },
          backgroundColor: "#FAFAFA",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "grid" },
          }}
          gridTemplateColumns="repeat(10, 1fr)"
          gap={1}
        >
          <Box
            gridColumn="span 5"
            sx={{ height: "100%", margin: "8px" }}
            key={product.title}
          >
            {product.images && params.id && (
              <Carousel wrapAround={true}>
                {product?.images?.map((image: any) => (
                  <Image
                    key={image}
                    src={image}
                    width={300}
                    height={350}
                    objectFit="contain"
                    alt="Picture of the author"
                    style={{ margin: "auto", display: "block" }}
                  />
                ))}
              </Carousel>
            )}
            {product.thumbnail && (
              <Image
                src={product.thumbnail}
                width={100}
                height={150}
                objectFit="contain"
                alt="Picture of the author"
              />
            )}
          </Box>
          <Box
            gridColumn="span 5"
            sx={{ height: "100%", margin: "8px", padding: "16px" }}
            key={product.title}
          >
            <Typography
              variant="subtitle2"
              fontWeight={400}
              color="#252B42"
              fontSize="16px"
              marginBottom={"14px"}
            >
              {product.title}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#252B42"
              fontSize="16px"
              marginBottom={"14px"}
            >
              {product.rating}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#252B42"
              fontSize="24px"
              marginBottom={"14px"}
            >
              ${product.price}
            </Typography>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#737373"
              fontSize="14px"
              marginBottom={"14px"}
            >
              Availability:{" "}
              {product.stock > 0 ? (
                <span style={{ color: "#23A6F0" }}>In Stock</span>
              ) : (
                <span style={{ color: "#23A6F0" }}>Not Available</span>
              )}
            </Typography>

            <Box
              display="flex"
              borderTop="1px solid #212121"
              paddingTop="29px"
              marginTop="140px"
            >
              <div className="ellipse bg-blue"></div>
              <div className="ellipse bg-green"></div>
              <div className="ellipse bg-orange"></div>
              <div className="ellipse bg-black"></div>
            </Box>
            <Box marginTop="68px">
              <Button variant="contained">Select Options</Button>
              <IconButton
                className="icon-btn-bordered"
                sx={{ mx: "5px" }}
                aria-label="add to shopping cart"
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton
                className="icon-btn-bordered"
                sx={{ mx: "5px" }}
                aria-label="add to shopping cart"
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <IconButton
                className="icon-btn-bordered"
                sx={{ mx: "5px" }}
                aria-label="add to shopping cart"
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 147px" },
        }}
      >
        <Box></Box>

        <DynamicItems showLoadmoreBtn={false} />
      </Box>
    </>
  );
}

export default Product;
