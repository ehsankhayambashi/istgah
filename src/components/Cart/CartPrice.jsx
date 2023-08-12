import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  Link,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../../Theme";

function CartPrice({ itemNumber, rawPrice, discountedPrice, cartPrice }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container maxWidth="xl">
      <Box
        my={biggerThanMd ? 0 : 2}
        gap={3}
        display="flex"
        flexDirection="column"
      >
        <Box
          color={theme.palette.grey[700]}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1" fontSize="0.8rem">
            {`قیمت کالا ها (${itemNumber})`}
          </Typography>
          <Typography variant="subtitle1" fontSize="0.8rem">
            {rawPrice} تومان
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="subtitle1" fontSize="0.8rem">
            جمع سبد خرید
          </Typography>
          <Typography variant="subtitle1" fontSize="0.8rem">
            {cartPrice} تومان
          </Typography>
        </Box>
        <Box
          color="red"
          display={discountedPrice ? "flex" : "none"}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1" fontSize="0.8rem">
            جمع تخفیف
          </Typography>
          <Typography variant="subtitle1" fontSize="0.8rem">
            {discountedPrice} تومان
          </Typography>
        </Box>
        <Box
          display={biggerThanMd ? "flex" : "none"}
          flexDirection="row"
          justifyContent="center"
        >
          <Link to="/checkout" component={RouterLink} underline="none">
            <Button
              variant="contained"
              size="large"
              sx={{ paddingX: "5rem", marginBottom: "1rem", width: "100%" }}
            >
              ثبت سفارش
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default CartPrice;
