import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Image,
  Button,
  HStack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";
import {newsletter} from '../assets'

const NewsLetters = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} py={10}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="4xl"
        mx="auto"
        flexWrap='wrap'
        px={4}
      >
        <Box className="w-full md:w-1/2 mx-4 md:mx-0 flex flex-col justify-center items-center">
          <Text fontSize="3xl" fontWeight="bold" mb={8}>
            Newsletter
          </Text>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text mb={4}>
              Sign up for our newsletter to get the latest updates:
            </Text>
            <Flex direction="column" w="100%" maxW="400px" mx="auto">
              <Input placeholder="Your email address" mb={4} />
              <Button colorScheme="blue">Subscribe</Button>
            </Flex>
          </motion.div>
          <HStack spacing={4} mt={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <IconButton
                variant="outline"
                colorScheme="facebook"
                icon={<FaFacebook className="text-2xl" />}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <IconButton
                variant="outline"
                colorScheme="twitter"
                icon={<FaTwitter className="text-2xl" />}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <IconButton
                variant="outline"
                colorScheme="pink"
                icon={<FaInstagram className="text-2xl" />}
              />
            </motion.div>
          </HStack>
        </Box>
        <Box className="w-full md:w-1/2 mx-4 md:mx-0">
            <Image  src={newsletter} alt="newsletter" />
        </Box>
      </Flex>
    </Box>
  );
};

export default NewsLetters;
