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
  FormErrorMessage,
  useColorModeValue,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { sendContact } from "../Redux/Reducers/contactSlice";

const ContactHero = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contact);
  const [isSubmit, setIsSubmit] = React.useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      dispatch(sendContact(values));
      setIsSubmit(true);
    },
  });

  return (
    <Box
      px={{ base: 10, md: 0 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      py={{ base: 6, lg: 12 }}
    >
      <Heading
        as="h2"
        textAlign="center"
        fontWeight="extrabold"
        mb={{ base: 4, lg: 8 }}
        fontSize={{ base: "3xl", md: "4xl" }}
      >
        Contact Us
      </Heading>
      <Flex justify="center" flexWrap="wrap" gap={10}>
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: { base: "100%", lg: "50%" },
            paddingRight: { lg: 8 },
          }}
        >
          <Box mb={{ base: 8, lg: 12 }}>
            <Heading
              as="h3"
              fontWeight="semibold"
              fontSize="2xl"
              mb={6}
              color="gray.800"
            >
              Contact Details
            </Heading>
            <Box
              mb={4}
              display="flex"
              alignItems="center"
              className="border-2 shadow-md py-4 px-4 w-full lg:w-4/5 gap-4"
            >
              <Icon as={FaEnvelope} color="gray.500" boxSize="20px" mr={2} />
              <Box>
                <Text fontWeight="bold">Email</Text>
                <Text color="gray.500">contact@rumanazainab.com</Text>
              </Box>
            </Box>
            <Box
              mb={4}
              display="flex"
              alignItems="center"
              className="border-2 shadow-md py-4 px-4 w-full lg:w-4/5 gap-4"
            >
              <Icon as={FaPhone} color="gray.500" boxSize="20px" mr={2} />
              <Box>
                <Text fontWeight="bold">Phone</Text>
                <Text color="gray.500">+1 234-567-8910</Text>
              </Box>
            </Box>
            <Box
              mb={4}
              display="flex"
              alignItems="center"
              className="border-2 shadow-md py-4 px-4 w-full lg:w-4/5 gap-4"
            >
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
        </motion.div>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: { base: "100%", lg: "50%" } }}
        >
          <Box
            w="100%"
            minW={{ base: "90vw", md: "60vw", lg: "500px" }}
            className=" border-2 shadow-xl p-4 rounded-md"
            mb={{ base: 8, lg: 12 }}
          >
            <Heading
              as="h3"
              fontWeight="semibold"
              fontSize="2xl"
              mb={2}
              color="gray.800"
            >
              Support
            </Heading>
            {loading ? (
              <Box className="flex text-orange-600 justify-center items-center h-48">
                Sending...
              </Box>
            ) : isSubmit ? (
              <Box className="flex text-lg font-bold text-green-600 justify-center items-center h-80">
                Your message has sent...
              </Box>
            ) : (
              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  mb={4}
                  isInvalid={formik.touched.name && formik.errors.name}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    border="1px solid"
                    {...formik.getFieldProps("name")}
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                  mb={4}
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    border="1px solid"
                    placeholder="Email"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  mb={4}
                  isInvalid={formik.touched.phone && formik.errors.phone}
                >
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    type="text"
                    border="1px solid"
                    placeholder="Phone"
                    {...formik.getFieldProps("phone")}
                  />
                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>
                <FormControl
                  mb={4}
                  isInvalid={formik.touched.message && formik.errors.message}
                >
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    border="1px solid"
                    placeholder="Message"
                    {...formik.getFieldProps("message")}
                  />
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="orange">
                  Send Message
                </Button>
              </form>
            )}
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default ContactHero;
