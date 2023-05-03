import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'strech'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back!</Heading>
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
          <Button variant={'link'} alignSelf={'end'}>
            <Link to={'/forgetpassword'}>Forget password?</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up Here!</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
