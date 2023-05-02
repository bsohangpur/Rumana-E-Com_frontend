import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box h='100vh' className='flex justify-center items-center flex-col' textAlign="center" py={{ base: 12, lg: 24 }} bg="gray.100">
      <Heading
        as="h2"
        fontWeight="extrabold"
        fontSize={{ base: '3xl', md: '4xl' }}
        color="gray.800"
        mb={{ base: 4, lg: 8 }}
      >
        Oops! Page Not Found.
      </Heading>
      <Text mb={{ base: 8, lg: 12 }} color="gray.600">
        The page you are looking for doesn&apos;t exist or has been moved.
      </Text>
      <Button colorScheme="orange" size="lg" onClick={handleGoBack}>
        Go Back
      </Button>
    </Box>
  );
}

export default PageNotFound;
