import React from "react";
import { Box, Flex, Text, Avatar, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay, Pagination]);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "william Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Amrite Smith",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      py={12}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        What our customer's says
      </Text>
      <Box maxWidth="600px" p={4} borderRadius="md">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="h-32 bg-white rounded-md mx-4 md:mx-0 p-4 shadow-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className=" " key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                mb={4}
              >
                <Flex alignItems="center" mb={2}>
                  <Avatar name={testimonial.name} size="sm" mr={2} />
                  <Text color="gray.900" fontSize="xl" fontWeight="bold">
                    {testimonial.name}
                  </Text>
                </Flex>
                <Text color="gray.600">{testimonial.message}</Text>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default TestimonialSection;
