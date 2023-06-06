import React from "react";
import { Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { about_hero_img } from "../assets";

function AboutHero() {
  return (
    <Box  className="relative">
      <Box
        bg="url(https://img.freepik.com/free-photo/front-view-shop-word-red-table_23-2148281114.jpg?w=1060&t=st=1686044575~exp=1686045175~hmac=700e844392702fb49e4c3caaafdfff73f5637e9937dca1902e2d1b5cb9da35fb)"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        className="w-full h-screen fixed top-0 -z-10"
      />
      <Box py={20} color="white" className="flex flex-col justify-center items-center">
        <Heading textAlign="center" mb={10}>
          About Us
        </Heading>
        <Box className=" w-5/6" display={{ md: "flex" }}>
          <Box flex={1} mr={{ md: 20 }}>
            <Text fontSize={20} fontWeight="bold" mb={8}>
              Hi, we’re build our own gift box that’s super easy to give and
              ridiculously fun to get.
            </Text>
            <Text>
              You know that saying, “it’s better to give than to receive”? Yeah,
              well, that’s not entirely true. Because if you’ve ever had to buy
              a gift for the relative who has everything, or for a team of many
              remote employees, or for a massive crowd of virtual event guests
              you’ve never even met, you know: It’s waaaayyy more stressful to
              give than to receive. Our team is connected with you 24x7 to help
              you with any gifts box enquire to ensure you are satisfied with
              the final product you receive and our customer service makes sure
              you feel satisfied.
              <span className=" text-lg font-semibold">
                That’s the magic of Rumana Zaniab.
              </span>
            </Text>
          </Box>
          <Box flex={1}>
            <Image
              src={about_hero_img}
              alt="About Us"
              w="full"
              rounded="lg"
              boxShadow="lg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutHero;
