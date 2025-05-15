import { useState } from 'react';
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Image,
  useToast,
} from '@chakra-ui/react';
import logo from '../assets/logo.png';

function FarmerRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // needed for cookies
        body: JSON.stringify({
          username,
          password,
          email,
          phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Registration successful',
          description: data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        // Optional: Clear the form
        setUsername('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
      } else {
        toast({
          title: 'Registration failed',
          description: data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: 'Registration failed',
        description: 'An error occurred during registration',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="row" align="center" justify="center" h="100vh" bg="gray.100" p={8} rounded="md">
      <Box width="50%" p={8}>
        <Heading mb={4} color="green.500">Welcome to FarmConnect</Heading>
        <Image src={logo} alt="FarmConnect" mb={4} />
        <p>FarmConnect is a platform that connects farmers with buyers.</p>
      </Box>
      <Flex direction="column" width="50%" p={8}>
        <Heading mb={4} color="blue.500">Farmer Register</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt={4}>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4} width="100%" _hover={{ bg: 'blue.600' }}>
            Register
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}

export default FarmerRegister;
