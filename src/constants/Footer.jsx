import React from "react";
import { Box, Flex, Spacer, useColorModeValue, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const linkColor = useColorModeValue("gray.600", "gray.400");
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com/zrumana",
      icon: <FaInstagram color={linkColor} />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebook color={linkColor} />,
    },
    {
      label: "Whatsapp",
      href: "https://whatsapp.com/",
      icon: <FaWhatsapp color={linkColor} />,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className=" bg-gray-800 text-slate-50"
    >
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingY="2rem"
        paddingX={{ base: "2rem", md: "5rem", lg: "8rem" }}
      >
        <Box fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
          ©{currentYear} All rights reserved to Rumana Zainab Products
        </Box>
        <Spacer />
        <Flex align="center">
          <Box fontSize={{ base: "sm", md: "md" }} fontWeight="medium" mr={4}>
            Connect with us:
          </Box>
          {socialLinks.map((link) => (
            <Box key={link.href} mr={4}>
              <Link
                fontSize={20}
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
