import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  ButtonGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import addProductToCart from './addProductToCart'

export default function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const { product: productData } = useSelector((state) => state.cart);
  const toast = useToast();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box w="80%">
        <Flex justify="space-evenly" flexWrap="wrap" align="center">
          <Box className="h-fit">
            <Swiper pagination={true} modules={[Pagination]} className="w-96">
              {product &&
                product.image &&
                product.image.map((image, index) => (
                  <SwiperSlide className="w-96 h-96" key={index}>
                    <Image src={image.image} alt={product.name} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Box>
          <Box>
            <Box mt={4}>
              <Heading as="h1" size="xl">
                {product.title}
              </Heading>
              <Text mt={2}>{product.description}</Text>
              <Text mt={2} fontWeight="bold">
                Price: ${product.price}
              </Text>
              <Box mt={4}>
                <Text>Rating: {product.rating}</Text>
                <Text>Reviews: {product.reviews}</Text>
              </Box>
            </Box>
          </Box>
        </Flex>
        <ButtonGroup my={12} display="flex" justifyContent="center">
          <Button
            onClick={() =>
              addProductToCart(product, dispatch, productData, toast)
            }
            variant="solid"
            colorScheme="teal"
            w="80%"
            h={12}
          >
            Add to Cart
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
