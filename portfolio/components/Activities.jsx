import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { hobbies, languages, socialwork } from '../data';

const Activities = () => {
    return (
        <Flex flexDir="column">
            <Box boxShadow="md" borderWidth="1px" borderRadius="10px" py="10px" px="20px" mb="10px">
                <Text color="teal.500" fontWeight="bold" fontSize="22px">Hobbies</Text>
                {hobbies.map((hobby) => {
                    return (
                        <Text fontSize="18px" minW="10vw" maxW='40vw'>{hobby}</Text>
                    );
                })}
            </Box>

            <Box boxShadow="md" borderWidth="1px" borderRadius="10px" py="10px" px="20px" mb="10px">
                <Text color="teal.500" fontWeight="bold" fontSize="22px">Language</Text>
                {languages.map((lang) => {
                    return (
                                <Text fontSize="18px" minW="10vw" maxW='40vw'>{lang}</Text>
                    );
                })}
            </Box>

            <Box boxShadow="md" borderWidth="1px" borderRadius="10px" py="10px" px="20px" mb="10px">
                <Text color="teal.500" fontWeight="bold" fontSize="22px">Social Work</Text>
                {socialwork.map((social) => {
                    return (
                        <>
                                <Text fontSize="18px" minW="10vw" maxW='40vw' fontWeight="bold" color="gray.700">{social.title}</Text>
                            <Text fontSize="16px" minW="10vw" maxW='40vw' color="gray.600">{social.desc}</Text>
                            </>
                    );
                })}
            </Box>
        </Flex>
    );
}

export default Activities;
