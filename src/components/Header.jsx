import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        padding={'0'}
        width={'10'}
        height={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VTube</DrawerHeader>
          <DrawerBody>
            <VStack mt={'5'}>
              <Button
                colorScheme="purple"
                variant={'ghost'}
                width={'90%'}
                justifyContent={'flex-start'}
                onClick={onClose}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                colorScheme="purple"
                variant={'ghost'}
                width={'90%'}
                justifyContent={'flex-start'}
                onClick={onClose}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                colorScheme="purple"
                variant={'ghost'}
                width={'90%'}
                justifyContent={'flex-start'}
                onClick={onClose}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                colorScheme="purple"
                variant={'ghost'}
                width={'90%'}
                justifyContent={'flex-start'}
                onClick={onClose}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack mt={'5'} pos={'absolute'} bottom={'5'} left={'10'}>
              <Button colorScheme="purple"
              onClick={onClose}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button colorScheme="purple" variant={'outline'}
              onClick={onClose}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
