import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Box, Container, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { theme } from "../../Theme";
import ProductImages from "../../components/Product/ProductImages";
import ProductTitle from "./ProductTitle";
import ProductDynamicAttribute from "./ProductDynamicAttribute";
import ProductFeatures from "./ProductFeatures";
import ProductInfoCard from "./ProductInfoCard";
import ProductComments from "./ProductComments";

function Product() {
  const params = useParams();
  const productId = params.id;
  const categoryId = params.categoryId;
  const { res, loading, error } = useFetch(`/product/getProduct/${productId}`);
  const product = res;
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  if (loading) return "...";
  console.log(product);
  return (
    <Box sx={{ paddingBottom: mobileVersion ? "82px" : "0" }}>
      <Container maxWidth="xl">
        <Box pt={2}>
          <Breadcrumb categoryId={categoryId} />
        </Box>
        <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Box flex={2}>
            <ProductImages image={product.image} images={product.images} />
          </Box>
          <Box flex={3} sx={{ pr: { md: 0.5 } }}>
            <ProductTitle name={product.name} />
            <Box display="flex" flexDirection="column">
              <Box
                display="flex"
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <Box flex={2}>
                  <Box display="flex" flexDirection="column">
                    {product.product_types.map((type, index) => (
                      <ProductDynamicAttribute
                        product={product}
                        type={type}
                        key={index}
                      />
                    ))}
                    {/* <ProductDynamicAttribute
                      attributes={product.weights}
                      type={product.product_types}
                    /> */}
                    <ProductFeatures features={product.features} />
                  </Box>
                </Box>
                <ProductInfoCard product={product} />
              </Box>
            </Box>
          </Box>
        </Box>
        <ProductComments description={product.description} />
      </Container>
    </Box>
  );
}

export default Product;
