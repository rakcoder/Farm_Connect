import React from 'react';
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

function AddProduct() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bg="gray.100"
      p={8}
      rounded="md"
    >
      <Heading mb={4} color="blue.500">
        Add Product
      </Heading>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" placeholder="Title" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Image</FormLabel>
        <Input type="file" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Quality</FormLabel>
        <Input type="text" placeholder="Quality" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Certificate</FormLabel>
        <Input type="file" />
      </FormControl>
      <Button colorScheme="blue" mt={4} width="100%">
        Add Product
      </Button>
    </Flex>
  );
}

export default AddProduct;