import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'strech'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>VTube</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Name"
            type="text"
            focusBorderColor="purple.500"
            required
          />
          <Input
            placeholder="Email"
            type="email"
            focusBorderColor="purple.500"
            required
          />
          <Input
            placeholder="Password"
            type="password"
            focusBorderColor="purple.500"
            required
          />
          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up{' '}
            <Button variant={'link'} textDecoration={'underline'} colorScheme={'purple'}>
              <Link to={'/login'} >Log In Here!</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
