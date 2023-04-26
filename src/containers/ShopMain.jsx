import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Product } from '../components';

function ShopMain({toggle}) {

  const {product} = useSelector(state=>state.product)

  // Sample product data
  const products = product && product;

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Number of products to show per page
  const productsPerPage = 10;

  // Get current products based on current page and products per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Box w={toggle?'75%':'100%'} className='flex' py={{ base: 12, lg: 24 }}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent='center'
        align={{ base: 'center', lg: 'flex-start' }}
        // maxW={{ base: '100%', lg: '80%', xl: '1200px' }}
        mx="auto"
      >
        {/* Main section with products and pagination */}
        <Box w={'100%'}>
          {/* Product grid */}
          <Flex
            flexWrap='wrap'
            justifyContent='center'
            gap={4}
            mb={{ base: 8, lg: 12 }}
          >
            {currentProducts.map((product) => (
              <Box key={product.id} p={4}>
                <Product data={product}/>
              </Box>
            ))}
          </Flex>
          {/* Pagination */}
          <Flex justify="center">
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map(
              (_, index) => (
                <Box
                  key={index}
                  as="button"
                  bg={currentPage === index + 1 ? 'orange.500' : 'gray.200'}
                  color={currentPage === index + 1 ? 'white' : 'gray.800'}
                  fontWeight="bold"
                  px={4}
                  py={2}
                  mx={2}
                  borderRadius="md"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Box>
              )
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default ShopMain;
