import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      label: 'Github',
      href: 'https://github.com/',
      icon: <FaGithub color={linkColor} />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: <FaLinkedin color={linkColor} />,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/',
      icon: <FaTwitter color={linkColor} />,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className=' bg-gray-800 text-slate-50'
    >
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingY="2rem"
        paddingX={{ base: '1rem', md: '1.5rem', lg: '2rem' }}
      >
        <Box fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
        ©{currentYear} All rights reserved to Rumana Products
        </Box>
        <Spacer />
        <Flex align="center">
          <Box fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" mr={4}>
            Connect with us:
          </Box>
          {socialLinks.map((link) => (
            <Box key={link.href} mr={4}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </motion.footer>
  );
}

export default Footer;
