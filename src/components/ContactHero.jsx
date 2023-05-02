import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactHero() {
  return (
    <Box py={{ base: 6, lg: 12 }}>
      <Heading
        as="h2"
        textAlign="center"
        fontWeight="extrabold"
        mb={{ base: 4, lg: 8 }}
        fontSize={{ base: "3xl", md: "4xl" }}
      >
        Contact Us
      </Heading>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        maxW={{ base: "100%", lg: "80%", xl: "1200px" }}
        mx="auto"
      >
        {/* Contact Details */}
        <Box w={{ base: "100%", lg: "50%" }} pr={{ lg: 8 }}>
          <Box mb={{ base: 8, lg: 12 }}>
            <Heading
              as="h3"
              fontWeight="semibold"
              fontSize="2xl"
              mb={2}
              color="gray.800"
            >
              Contact Details
            </Heading>
            <Box mb={4} display="flex" alignItems="center">
              <Icon as={FaEnvelope} color="gray.500" boxSize="20px" mr={2} />
              <Box>
                <Text fontWeight="bold">Email</Text>
                <Text color="gray.500">contact@rumanazainab.com</Text>
              </Box>
            </Box>
            <Box mb={4} display="flex" alignItems="center">
              <Icon as={FaPhone} color="gray.500" boxSize="20px" mr={2} />
              <Box>
                <Text fontWeight="bold">Phone</Text>
                <Text color="gray.500">+1 234-567-8910</Text>
              </Box>
            </Box>
            <Box mb={4} display="flex" alignItems="center">
              <Icon
                as={FaMapMarkerAlt}
                color="gray.500"
                boxSize="20px"
                mr={2}
              />
              <Box>
                <Text fontWeight="bold">Address</Text>
                <Text color="gray.500">
                  6-3-657/p1, Kapadia Ln, Somajiguda, Hyderabad, Telangana
                  500082
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Contact Form */}
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box mb={{ base: 8, lg: 12 }}>
            <Heading
              as="h3"
              fontWeight="semibold"
              fontSize="2xl"
              mb={2}
              color="gray.800"
            >
              Get In Touch
            </Heading>
            <form>
              <FormControl mb={4}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" placeholder="Email" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <Input type="number" placeholder="Subject" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea placeholder="Message" />
              </FormControl>
              <Button type="submit" colorScheme="orange">
                Send Message
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactHero;
