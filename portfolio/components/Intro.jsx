import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { about } from '../data';

const Intro = () => {
    return (
        <Flex w="100vw" h="60vh" alignItems="center" justifyContent="center">
            <Avatar w="300px" h="300px" src="/shriram.jpeg" name="B SHRIRAM ATHREYA" mr="50px" />
            <Text fontWeight="bold" fontSize="3xl" fontStyle="italic" w="60vw" color="gray.700">
                {about}
            </Text>
        </Flex>
    );
}

export default Intro;
