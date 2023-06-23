import React from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ShowSubCats from "../../components/SubCategories/ShowSubCats";
import useFetch from "../../hooks/useFetch";

function Search() {
  const params = useParams();
  const categorySlug = params.category;
  const categoryId = params.id;
  const products = [];
  const { res, loading, error } = useFetch(
    `/product/getProducts/${categoryId}`
  );
  console.log("res", res);
  return (
    <Container maxWidth="xl">
      <Box mt={3} pb={1}>
        <Breadcrumb categoryId={categoryId} />
      </Box>
      <Box>
        <ShowSubCats categoryId={categoryId} />
      </Box>
    </Container>
  );
}

export default Search;
