import React from "react";
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa"; // Add FaTimes icon for close button
import { Link } from "react-router-dom";
import { Cart } from "../components";
import { useSelector } from "react-redux";
import { links } from "../Data/data";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const linkColor = useColorModeValue("gray.800", "white");
  const { product } = useSelector((state) => state.cart);
  const items = product;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={useColorModeValue("white", "gray.800")}
      color={linkColor}
    >
      <Flex align="center">
        <Link to="/">
          <Box fontWeight="bold" fontSize="xl">
            Rumana Zainab
          </Box>
        </Link>
      </Flex>
      <Spacer />
      <Flex align="center" display={{ base: "none", md: "flex" }}>
        {links.map((link) => (
          <Link key={link.name} to={link.url}>
            <Box fontSize="lg" fontWeight="medium" mr={6}>
              {link.name}
            </Box>
          </Link>
        ))}
      </Flex>
      <Flex mx={6} gap={2} align="center">
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          variant="ghost"
          onClick={toggleColorMode}
        />
        <IconButton
          aria-label="Open menu"
          icon={<FiMenu />}
          variant="ghost"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
        <Box mr={4}>
          <Cart items={items} />
        </Box>
      </Flex>
      <Box
        pos="fixed"
        top={0}
        right={0}
        h="100vh"
        w="80vw"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        zIndex={20}
        p={4}
        display={{ base: "block", md: "none" }}
        transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.3s ease-in-out"
      >
        <Flex align="center" justify="space-between" mb={4}>
          <Box fontWeight="bold" fontSize="xl">
            Rumana
          </Box>
          <IconButton
            aria-label="Close menu"
            icon={<FaTimes />}
            variant="ghost"
            onClick={onClose}
          />
        </Flex>
        <Flex direction="column" align="center">
          {links.map((link) => (
            <Link onClick={onClose} key={link.name} to={link.url}>
              <Box fontSize="lg" fontWeight="medium" mb={4}>
                {link.name}
              </Box>
            </Link>
          ))}
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            variant="ghost"
            mb={4}
            onClick={toggleColorMode}
          />
          <Box mr={4}>
            <Cart items={items} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
