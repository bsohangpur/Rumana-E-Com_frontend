import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    IconButton,
    useDisclosure,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { FaUser, FaSun, FaMoon, FaTimes } from 'react-icons/fa'; // Add FaTimes icon for close button
import { Link } from 'react-router-dom';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const linkColor = useColorModeValue('gray.800', 'white');

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg={useColorModeValue('white', 'gray.800')}
            color={linkColor}
        >
            <Flex align="center">
                <Link to="/">
                    <Box fontWeight="bold" fontSize="xl">
                        Rumana
                    </Box>
                </Link>
            </Flex>
            <Spacer />
            <Flex align="center" display={{ base: 'none', md: 'flex' }}>
                <Link to="/shop">
                    <Box fontSize="lg" fontWeight="medium" mr={6}>
                        Shop
                    </Box>
                </Link>
                <Link to="/about">
                    <Box fontSize="lg" fontWeight="medium" mr={6}>
                        About
                    </Box>
                </Link>
                <Link to="/contact">
                    <Box fontSize="lg" fontWeight="medium" mr={6}>
                        Contact
                    </Box>
                </Link>
                <Link to="/faq">
                    <Box fontSize="lg" fontWeight="medium">
                        FAQ
                    </Box>
                </Link>
            </Flex>
            <Flex mx={6} align="center">
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    variant="ghost"
                    mr={4}
                    onClick={toggleColorMode}
                />
                <IconButton
                    aria-label="Open menu"
                    icon={<FiMenu />}
                    variant="ghost"
                    display={{ base: 'block', md: 'none' }}
                    onClick={onOpen}
                />
                <IconButton
                    aria-label="Open shopping cart"
                    icon={<FiShoppingCart />}
                    variant="ghost"
                    mr={4}
                />
                <IconButton
                    aria-label="Open user profile"
                    icon={<FaUser />}
                    variant="ghost"
                />
            </Flex>
            <Box
                pos="fixed"
                top={0}
                right={0}
                h="100vh"
                w="80vw"
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                zIndex={20}
                p={4}
                display={{ base: 'block', md: 'none' }}
                transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
                transition="transform 0.3s ease-in-out"
            >
                <Flex align="center" justify="space-between" mb={4}>
                    <Box fontWeight="bold" fontSize="xl">
                        Rumana
                    </Box>
                    <IconButton
                        aria-label="Close menu"
                        icon={<FaTimes />}
                        variant="ghost" onClick={onClose}
                    />
                </Flex>
                <Flex direction="column" align="center">
                    <Link to="/shop">
                        <Box fontSize="lg" fontWeight="medium" mb={4}>
                            Shop
                        </Box>
                    </Link>
                    <Link to="/about">
                        <Box fontSize="lg" fontWeight="medium" mb={4}>
                            About
                        </Box>
                    </Link>
                    <Link to="/contact">
                        <Box fontSize="lg" fontWeight="medium" mb={4}>
                            Contact
                        </Box>
                    </Link>
                    <Link to="/faq">
                        <Box fontSize="lg" fontWeight="medium" mb={4}>
                            FAQ
                        </Box>
                    </Link>
                    <IconButton
                        aria-label="Toggle color mode"
                        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                        variant="ghost"
                        mb={4}
                        onClick={toggleColorMode}
                    />
                    <IconButton
                        aria-label="Open shopping cart"
                        icon={<FiShoppingCart />}
                        variant="ghost"
                        mb={4}
                    />
                    <IconButton
                        aria-label="Open user profile"
                        icon={<FaUser />}
                        variant="ghost"
                        mb={4}
                    />
                </Flex>
            </Box>
        </Flex>
    );
}

export default Navbar;
