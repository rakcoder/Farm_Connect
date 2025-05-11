import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FarmerLogin from './components/FarmerLogin';
import FarmerRegister from './components/FarmerRegister';
import AddProduct from './components/AddProduct';
import BuyerProductList from './components/BuyerProductList';
import { ChakraProvider, Flex, Heading, Image, HStack, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Flex
              direction="column"
              align="center"
              justify="center"
              p={8}
              bg="gray.100"
            >
              <Heading mb={4} color="green.500" shadow="sm">
                About FarmConnect
              </Heading>
              <Image
                src="https://images.unsplash.com/photo-1483729558043-7a7418ca93c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="FarmConnect"
                mb={4}
                width="300px"
              />
              <p>
                FarmConnect is a platform that connects farmers with buyers,
                enabling them to trade their products directly.
              </p>
            </Flex>
          } />
          <Route path="/login" element={<FarmerLogin />} />
          <Route path="/register" element={<FarmerRegister />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/buyer-product-list" element={<BuyerProductList />} />
          <Route path="/contact-us" element={<Box>Contact Us Content</Box>} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
