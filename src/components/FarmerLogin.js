import React from 'react';
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Image,
} from '@chakra-ui/react';
import logo from '../assets/logo.png';

function FarmerLogin() {
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      h="100vh"
      bg="gray.100"
      p={8}
      rounded="md"
    >
      <Box width="50%" p={8}>
        <Heading mb={4} color="green.500" shadow="sm">
          Welcome to FarmConnect
        </Heading>
        <Image
          src="https://images.unsplash.com/photo-1483729558043-7a7418ca93c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="FarmConnect"
          mb={4}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = logo;
          }}
        />
        <p>
          FarmConnect is a platform that connects farmers with buyers.
        </p>
      </Box>
      <Flex direction="column" width="50%" p={8}>
        <Heading mb={4} color="blue.500">
          Farmer Login
        </Heading>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Username" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button colorScheme="blue" mt={4} width="100%" _hover={{ bg: 'blue.600' }}>
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}

export default FarmerLogin;