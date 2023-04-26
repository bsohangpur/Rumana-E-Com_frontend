/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setProduct } from "../Redux/Reducers/cartSlice";
import { CropText } from "../utils";

const Product = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Box maxW="sm">
      <Box position="relative">
        <Image
          maxW="100%"
          maxH="40rem"
          src={data.image[0]}
          alt={data.image[0]}
          borderRadius="lg"
        />
        <Box
          maxW="100%"
          position="absolute"
          borderRadius="lg"
          cursor="pointer"
          top="0"
          left="0"
          right="0"
          bottom="0"
          px={6}
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          opacity="0"
          transition="opacity 0.3s ease-in-out"
          _hover={{ opacity: 1 }}
        >
          <Text>
            <CropText text={data.description} />
          </Text>
        </Box>
      </Box>
      <Text maxW="300px" fontWeight="bold" fontSize="lg" mb={2}>
        {data.title}
      </Text>
      <Text fontSize="md">{data.price}$</Text>
      <Flex justify="center" mt={4}>
        <Button
          onClick={() => {
            dispatch(setProduct(data));
          }}
          colorScheme="orange"
          mr={2}
        >
          Add to Cart
        </Button>
        <Button variant="outline" colorScheme="orange">
          View Details
        </Button>
      </Flex>
    </Box>
  );
};

export default Product;
