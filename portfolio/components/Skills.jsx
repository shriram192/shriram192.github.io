import { Flex, List, ListIcon, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { skills } from '../data';

const Skills = () => {
    return (
        <Flex>
            <List>
            <SimpleGrid columns="2" spacingY="2" spacingX="10">
                {skills.map((skill) => {
                    return (
                        <ListItem>
                                <Flex alignItems="center">
                                <ListIcon as={AiOutlineCheckCircle} w={7} h={7} color="green.500" />
                                <Text fontSize="20px">{skill}</Text>
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
