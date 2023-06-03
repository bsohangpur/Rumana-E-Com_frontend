import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  IconButton,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../Redux/Reducers/cartSlice";

const HeroProduct = ({ products }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.cart);
  const toast = useToast();

  const addProductToCart = (item) => {
    const filteredProducts = product.filter((values) =>
      Object.entries(item).every(([key, value]) => values[key] === value)
    );

    if (filteredProducts.length === 0) {
      dispatch(setProduct(item));
      toast({
        title: `Product: ${item.title} Added to cart`,
        description: "You can checkout product in your cart",
        status: "success",
        position: "top-left",
        duration: 3000,
      });
    } else {
      toast({
        title: "Product is already in your cart",
        description: "You can checkout product in your cart",
        status: "warning",
        position: "top-left",
        duration: 3000,
      });
    }
  };

  return (
    <Box pb={12} bg="gray.100">
      <Heading as="h2" size="lg" mb={4}>
        Most Popular Products
      </Heading>
      <Flex wrap="wrap" justify="center" align="center" gap={10}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box px={4} py={2} bg="white" boxShadow="lg" rounded="lg">
              <Box
                bg={`url(${product.default_image.image.image})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                w={300}
                height="250px"
                borderRadius="lg"
                mb={4}
              />
              <Heading as="h3" size="md" mb={2}>
                {product.title}
              </Heading>
              <Text>Price: ${product.price}</Text>
              <Text>{product.description}</Text>
              <ButtonGroup>
                <IconButton
                  icon={<AiOutlineShoppingCart size={25} />}
                  colorScheme="blue"
                  variant="outline"
                  mt={4}
                  mr={2}
                  onClick={() => addProductToCart(product)}
                />
                <IconButton
                  icon={<AiOutlineInfoCircle size={25} />}
                  colorScheme="blue"
                  variant="outline"
                  mt={4}
                  mr={2}
                />
              </ButtonGroup>
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default HeroProduct;
