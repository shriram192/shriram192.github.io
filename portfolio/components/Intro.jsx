import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { about } from '../data';

const Intro = () => {
    return (
        <Flex w="100vw" h="50vh" alignItems="center" justifyContent="center">
            <Avatar w="300px" h="300px" src="/shriram.jpeg" name="B SHRIRAM ATHREYA" mr="50px" />
            <Box>
                <Text fontSize="4xl" fontWeight="bold" color="teal.500">B SHRIRAM ATHREYA</Text>
            <Text fontWeight="bold" fontSize="3xl" fontStyle="italic" w="60vw" color="gray.700">
                {about}
            </Text>
            </Box>
        </Flex>
    );
}

export default Intro;
