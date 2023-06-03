import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import HeroProduct from "./HeroProduct";
import { Link } from "react-router-dom";

const Hero = ({ products }) => {
  return (
    <Box>
      <Box
        py={{base:10, md:15 , lg:20}}
        bg="gray.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="500px" textAlign="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h1" size="2xl" mb={4}>
              Find the Perfect Gift
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Text fontSize="xl" mb={6}>
              Explore our wide range of gift products for any occasion.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Button as={Link} to='/shop' colorScheme="teal" size="lg">
              Shop Now
            </Button>
          </motion.div>
        </Box>
      </Box>
      <Box
        bg="gray.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeroProduct products={products} />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
