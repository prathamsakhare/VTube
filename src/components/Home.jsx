import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
const Home = () => {
  return (
    <Box className="box-chakra" w={'full'} h={'100vh'}>
        <Container maxW={'container.xl'} minH={'100vh'} p='16' >
            <Heading textTransform={'uppercase'} py={'2'}  borderBottom={'2px solid'} >Services</Heading>
            <Stack h={'full'} padding={'4'} alignItems={'center'} direction={['column', 'row']}>
                <Img src={img5} height={['40', '400']} filter={'hue-rotate(-130deg'} />
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi accusamus reprehenderit architecto tempora unde delectus incidunt, minima laudantium ea necessitatibus est et impedit voluptates quam consequuntur! Inventore quidem quae expedita commodi nemo sunt consequatur, 
            </Text>
            </Stack>
        </Container>
    </Box>
  )
}


export default Home