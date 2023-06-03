import { Box, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Product } from "../components";
import { useSelector } from "react-redux";

const SingleProductContainer = ({ product }) => {

  console.log(product)

  return (
    <Box minH="100vh" p={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconButton
          aria-label="Go back"
          icon={<ArrowBackIcon />}
          mb={4}
          as={Link}
          to="/shop"
        />
        <Product product={product} />
      </motion.div>
    </Box>
  );
};

export default SingleProductContainer;
