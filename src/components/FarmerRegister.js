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

function FarmerRegister() {
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
          src={logo}
          alt="FarmConnect"
          mb={4}
        />
        <p>
          FarmConnect is a platform that connects farmers with buyers.
        </p>
      </Box>
      <Flex direction="column" width="50%" p={8}>
        <Heading mb={4} color="blue.500" shadow="sm">
          Farmer Register
        </Heading>
        <FormControl mt={4}>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Username" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" placeholder="Phone Number" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button colorScheme="blue" mt={4} width="100%" _hover={{ bg: 'blue.600' }}>
          Register
        </Button>
      </Flex>
    </Flex>
  );
}

export default FarmerRegister;