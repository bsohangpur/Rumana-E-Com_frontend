import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";


function ShopSide({toggle}) {

  return (
    <Box
      w={toggle ? "20%" : "0%"}
      className=" transition-all relative hidden lg:block"
    >
      <Box display={toggle ? "block" : "none"} className="">
        <VStack
          py={{ base: 8, md: 12 }}
          px={{ base: 4, md: 8 }}
          spacing={6}
          align="stretch"
          boxShadow="md"
          borderRadius="md"
        >
          {/* Search */}
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Search
            </Heading>
            <Input placeholder="Search products" size="md" />
          </Box>
          {/* Categories */}
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Categories
            </Heading>
            <Checkbox value="clothing">Clothing</Checkbox>
            <Checkbox value="accessories">Accessories</Checkbox>
            <Checkbox value="electronics">Electronics</Checkbox>
            <Checkbox value="home">Home</Checkbox>
          </Box>
          {/* Price Range */}
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Price Range
            </Heading>
            <Select placeholder="Select range" size="md">
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-250">$100 - $250</option>
              <option value="250-500">$250 - $500</option>
              <option value="500+">$500+</option>
            </Select>
          </Box>
          {/* Sizes */}
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Sizes
            </Heading>
            <Checkbox value="small">Small</Checkbox>
            <Checkbox value="medium">Medium</Checkbox>
            <Checkbox value="large">Large</Checkbox>
            <Checkbox value="x-large">X-Large</Checkbox>
          </Box>
          {/* Colors */}
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Colors
            </Heading>
            <Checkbox value="red">Red</Checkbox>
            <Checkbox value="blue">Blue</Checkbox>
            <Checkbox value="green">Green</Checkbox>
            <Checkbox value="yellow">Yellow</Checkbox>
          </Box>
          {/* Ratings */}
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Ratings
            </Heading>
            <Checkbox value="4+">4+ Stars</Checkbox>
            <Checkbox value="3+">3+ Stars</Checkbox>
            <Checkbox value="2+">2+ Stars</Checkbox>
            <Checkbox value="1+">1+ Stars</Checkbox>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default ShopSide;
