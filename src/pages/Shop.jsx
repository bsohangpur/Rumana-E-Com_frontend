import React from "react";
import { ShopMain } from "../containers";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Shop = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <Box className=" relative" display="flex" gap={6}>
      <ShopMain products={products} toggle="" />
    </Box>
  );
};

export default Shop;
