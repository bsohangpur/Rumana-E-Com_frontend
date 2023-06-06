import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { SingleProductContainer } from "../containers";
import { useDispatch, useSelector } from "react-redux";
import { FetchSingleProduct } from "../Redux/Reducers/productSlice";
import { useParams } from "react-router-dom";
import { Loading, PageNotFound } from "../utils";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const param = useParams();

  useEffect(() => {
    dispatch(FetchSingleProduct(param.name));
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <PageNotFound />;
  }

  return (
    <Box>
      <SingleProductContainer product={product} />
    </Box>
  );
};

export default SingleProductPage;
