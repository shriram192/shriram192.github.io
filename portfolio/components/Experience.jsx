import { Badge, Box, Flex, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { experience } from '../data';

const Experience = () => {
    return (
        <Flex>
            <List>
                <SimpleGrid columns={{ base:"1",md:"2"}} spacingY="2" spacingX="10">
                {experience.map((exp) => {
                    return (
                        <ListItem boxShadow="md" borderWidth="1px" borderRadius="10px" py="10px" px="20px" w={{base: '85vw', md:"40vw"}}>
                            <Text fontSize={{base:"12px", md:"14px"}}>{exp.tenure}</Text>
                            <Text fontSize={{base: "20px", md:"22px"}} fontWeight="bold" color="teal.500">{exp.desig}</Text>
                            <Text fontSize={{base: "18px", md:"20px"}} fontWeight="bold" color="gray.700">{exp.title}, { exp.domain}</Text>
                            <Text fontSize={{base:"14px", md:"16px"}} fontWeight="bold" color="gray.600">{exp.desc}</Text>
                            <Box my="5px">
                            {
                                exp.tech.map((item) => { return <Badge mr="15px" colorScheme="teal" >{item}</Badge>; })
                                }
                                </Box>
                        </ListItem>
                    );
                })}
                </SimpleGrid>
            </List>
        </Flex>
    );
}

export default Experience;
