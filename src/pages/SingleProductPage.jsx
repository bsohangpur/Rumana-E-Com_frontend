import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { SingleProductContainer } from "../containers";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../Redux/Reducers/productSlice";
import { useParams } from "react-router-dom";
import { Loading } from "../utils";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const param = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(param.name));
  }, [param.name]);


  return (
    <Box>
      <SingleProductContainer product={product} />
    </Box>
  );
};

export default SingleProductPage;
