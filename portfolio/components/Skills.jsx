import { Flex, List, ListIcon, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { GrTechnology } from 'react-icons/gr';
import { skills } from '../data';

const Skills = () => {
    return (
        <Flex>
            <List>
                <SimpleGrid columns={{ base:"1",md:"2"}} spacingY="2" spacingX="10">
                {skills.map((skill) => {
                    return (
                        <ListItem boxShadow="md" borderWidth="1px" borderRadius="10px" py="10px" px={{base:"30px",md: "20px"}}>
                                <Flex alignItems="center">
                                <ListIcon as={GrTechnology} w={7} h={7} />
                                <Text fontSize="22px" fontWeight="bold" color="teal.500" minW="10vw" maxW={{ base:"60vw",md:'40vw'}}>{skill}</Text>
                                </Flex>
                        </ListItem>
                    );
                })}
                </SimpleGrid>
            </List>
        </Flex>
    );
}

export default Skills;
