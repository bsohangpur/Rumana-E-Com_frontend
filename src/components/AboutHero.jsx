import React from 'react';
import { Box, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';
import {about_hero_img} from '../assets';

function AboutHero() {
  return (
    <Box py={20} className=' flex flex-col justify-center items-center'>
      <Heading textAlign="center" mb={10}>
        About Us
      </Heading>
      <Box className=' w-5/6' display={{ md: 'flex' }}>
        <Box flex={1} mr={{ md: 20 }}>
          <Text mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nunc libero. Suspendisse euismod sapien
            vitae arcu laoreet, vel tristique sapien blandit. Fusce malesuada justo in ante bibendum laoreet. Duis
            pharetra ex vitae est accumsan, ac malesuada nisi fringilla. Ut elementum augue eu tellus rutrum, eget
            scelerisque tortor bibendum. Pellentesque mattis velit a ipsum hendrerit, vel dignissim quam maximus. Ut ac
            nisi vel mi euismod consequat. Mauris a dolor vel lacus maximus ultrices sit amet sed risus.
          </Text>
          <Text>
            Phasellus vulputate ante vel fermentum vulputate. In malesuada euismod finibus. Sed non metus eget sapien
            lacinia viverra. Nam laoreet vestibulum mauris sed ultrices. Ut pharetra, quam vel gravida posuere, augue
            massa commodo ante, sed rutrum nisi libero eu tellus. Proin et efficitur mauris. Integer ullamcorper
            vehicula tellus, ac dignissim augue rhoncus in. Suspendisse pharetra tristique odio, quis eleifend arcu
            luctus vel.
          </Text>
        </Box>
        <Box flex={1}>
          <Image src={about_hero_img} alt="About Us" w="full" rounded="lg" boxShadow="lg" />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutHero;
