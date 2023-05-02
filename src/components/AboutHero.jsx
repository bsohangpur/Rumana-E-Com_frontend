import React from "react";
import { Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { about_hero_img } from "../assets";

function AboutHero() {
  return (
    <Box py={20} className=" flex flex-col justify-center items-center">
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
            well, that’s not entirely true. Because if you’ve ever had to buy a
            gift for the relative who has everything, or for a team of many
            remote employees, or for a massive crowd of virtual event guests
            you’ve never even met, you know: It’s waaaayyy more stressful to
            give than to receive. Our team is connected with you 24x7 to help
            you with any gifts box enquire to ensure you are satisfied with the
            final product you receive and our customer service makes sure you
            feel satisfied.
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
  );
}

export default AboutHero;
