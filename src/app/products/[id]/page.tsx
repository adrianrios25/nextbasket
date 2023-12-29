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
import Link from "next/link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

function Product({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: RootState) => state.products.singleProductPayload
  );

  useEffect(() => {
    dispatch(getSingleProduct({ id: params.id }));
  }, []);

  const breadcrumbs = [
    <MUILink underline="hover" key="1" color="text.primary">
      <Link href={`/`} replace={true}>
        <Typography key="3" color="text.primary">
          Home
        </Typography>
      </Link>
    </MUILink>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <>
      <Box sx={{ padding: { xs: "8px 14px", md: "8px 147px" } }}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Box>
      <Box sx={{ padding: { xs: "8px 14px", md: "80px 147px" } }}>
        <Box
          sx={{ display: { xs: "block", md: "grid" }, mt: "80px" }}
          gridTemplateColumns="repeat(10, 1fr)"
          gap={1}
        >
          <Box
            gridColumn="span 5"
            sx={{ height: "100%", margin: "8px" }}
            key={product.title}
          >
            {product.images && (
              <Carousel>
                {product?.images?.map((image: any) => (
                  <Image
                    key={image}
                    src={image}
                    layout="fill"
                    objectFit="contain"
                    alt="Picture of the author"
                  />
                ))}
              </Carousel>
            )}
          </Box>
          <Box
            gridColumn="span 5"
            sx={{ height: "100%", margin: "8px" }}
            key={product.title}
          >
            Item name here
          </Box>
        </Box>

        <DynamicItems showLoadmoreBtn={false} />
      </Box>
    </>
  );
}

export default Product;
