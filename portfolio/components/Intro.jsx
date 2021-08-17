import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { about } from '../data';

const Intro = () => {
    return (
        <Flex mt={{base: "20px",md: "0px"}} w="100vw" minH="50vh" h="auto" alignItems="center" justifyContent="center" flexDir={{base: 'column',md: 'row'}}>
            <Avatar w="300px" h="300px" src="/shriram.jpeg" name="B SHRIRAM ATHREYA" mr={{base: "0px", md:"50px"}} />
            <Box>
                <Text fontSize={{base:"2xl",  md:"4xl"}} fontWeight="bold" textAlign={{base: "center",md:'left'}} color="teal.500">B SHRIRAM ATHREYA</Text>
                <Text fontWeight="bold" fontSize={{base: "xl", md:"3xl"}} textAlign={{base: "center",md: 'left'}}  fontStyle="italic" w={{base:'80vw', md:"60vw"}} color="gray.700">
                {about}
            </Text>
            </Box>
        </Flex>
    );
}

export default Intro;
