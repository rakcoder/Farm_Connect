import React from 'react';
import {
  Flex,
  Heading,
  SimpleGrid,
  Box
} from '@chakra-ui/react';

function BuyerProductList() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bg="gray.100"
      p={8}
    >
      <Heading mb={4} color="blue.500">
        Buyer Product List
      </Heading>
      <SimpleGrid columns={3} spacing={4}>
        <Box bg="white" shadow="md" rounded="md" p={4} textAlign="center">
          Product 1
        </Box>
        <Box bg="white" shadow="md" rounded="md" p={4} textAlign="center">
          Product 2
        </Box>
        <Box bg="white" shadow="md" rounded="md" p={4} textAlign="center">
          Product 3
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default BuyerProductList;