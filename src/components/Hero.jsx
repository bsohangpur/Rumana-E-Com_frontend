import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
  ScaleFade,
} from '@chakra-ui/react';
import { Product } from '../components';
import { useSelector } from 'react-redux';

const Hero = () => {
  const {product} =  useSelector(state=>state.product);
  const data = product && product.slice(0,3);

  return (
    <Box position="relative" >
      <Box
        bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.700')}
        w="full"
        overflow="hidden"
      >
        <Box
          w={{ base: '80%', lg: '50%' }}
          maxW="lg"
          mx="auto"
          mb={{ base: 8, lg: 0 }}
          boxShadow="2xl"
          display='none'
        >
          <ScaleFade in={true}>
            <Box my={6} bg="orange.400" p={2}>
              <Text fontWeight="bold" color="white">
                Get 20% discount on all products! Use code: DISCOUNT20
              </Text>
            </Box>
          </ScaleFade>
        </Box>

        {/* Latest Products */}
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify={'center'}
          align={{ base: 'center', lg: 'flex-end' }}
          mx="auto"
          px={{ base: 6, lg: 0 }}
          w="full"
          bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.700')}
          py={4}
        >
          <Box
            mb={{ base: 8, lg: 0 }}
            textAlign={'center'}
          >
            <Heading
              as="h1"
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight="bold"
              mb={4}
              lineHeight="shorter"
              className=' capitalize'
              color={useColorModeValue('gray.800', 'white')}
            >
              Discover <br />
              the latest products
            </Heading>
            <Button mx='auto' colorScheme="orange" size="lg" mb={8}>
              Shop now
            </Button>
            <Flex justifyContent='center' flexFlow='wrap' gap={8} mx={6}>
            {
              data.map((product)=>{
                return <Product key={product.id} data={product} />
              })
            }
             

            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero