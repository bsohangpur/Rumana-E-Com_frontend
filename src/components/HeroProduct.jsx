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
import addProductToCart from "./addProductToCart";

import { Link } from "react-router-dom";

const HeroProduct = ({ products }) => {
  const dispatch = useDispatch();
  const { product: item } = useSelector((state) => state.cart);
  const toast = useToast();

  return (
    <Box pb={12}>
      <Flex wrap="wrap" justify="center" align="center" gap={10}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box px={4} py={2} bg="white" color='gray.900' boxShadow="lg" rounded="lg">
              <Box
                bg={`url(${product.default_image.image})`}
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
                  onClick={() =>
                    addProductToCart(product, dispatch, item, toast)
                  }
                />
                <IconButton
                  as={Link}
                  to={`/product/detail/${product.title}`}
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
