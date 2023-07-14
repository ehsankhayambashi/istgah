import { Box, Typography } from "@mui/material";
import React from "react";
import CounterCart from "./CounterCart";
import { theme } from "../../Theme";

function ProductCard({ product, border }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={2}
      py={2}
      my={0.5}
      border={border}
      borderRadius={2}
      borderColor={theme.palette.grey[300]}
    >
      <Box maxWidth="116px" flex={1} display="flex" flexDirection="column">
        <img
          src="https://www.technolife.ir/image/gallery-1-TLP-4993_5024bc63-9f0a-47d8-9d2b-fd555eacc08e.webp"
          width="100%"
          alt={product.name}
        />
        <CounterCart product={product} />
      </Box>
      <Box flex={2} display="flex" flexDirection="column" gap={1}>
        <Typography className="noselect" fontSize="0.9rem" lineHeight={2}>
          {product.name}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            borderRadius={5}
            bgcolor="magenta"
            width="15px"
            height="15px"
          ></Box>
          <Typography variant="subtitle2">صورتی</Typography>
        </Box>
        <Box>
          <Typography fontSize="0.7rem" variant="subtitle2" color="red">
            ۴۷,۰۰۰ تومان تخفیف
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">32,000,000 تومان</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
