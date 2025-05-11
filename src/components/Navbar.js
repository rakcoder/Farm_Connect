import React from 'react';
import {
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  HStack,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Box
      bgGradient="linear(to-r, teal.500, green.500)"
      px={6}
      py={4}
      boxShadow="md"
    >
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={3}>
          <Image src={logo} alt="FarmConnect Logo" boxSize="50px" />
          <Heading size="lg" color="white" letterSpacing="wider">
            FarmConnect
          </Heading>
        </Flex>
        <HStack spacing={6}>
          {isLoggedIn ? (
            <>
              <ChakraLink
                as={Link}
                to="/add-product"
                color="white"
                fontWeight="semibold"
                _hover={{ textDecoration: 'none', color: 'teal.100' }}
              >
                Add Product
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/buyer-product-list"
                color="white"
                fontWeight="semibold"
                _hover={{ textDecoration: 'none', color: 'teal.100' }}
              >
                Buyer Product List
              </ChakraLink>
            </>
          ) : (
            <>
              <ChakraLink
                as={Link}
                to="/"
                color="white"
                fontWeight="semibold"
                _hover={{ textDecoration: 'none', color: 'teal.100' }}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/login"
                color="white"
                fontWeight="semibold"
                _hover={{ textDecoration: 'none', color: 'teal.100' }}
              >
                Login
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/register"
                color="white"
                fontWeight="semibold"
                _hover={{ textDecoration: 'none', color: 'teal.100' }}
              >
                Register
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/contact-us"
                color="white"
                fontWeight="semibold"
                _hover={{ textDecoration: 'none', color: 'teal.100' }}
              >
                Contact Us
              </ChakraLink>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
