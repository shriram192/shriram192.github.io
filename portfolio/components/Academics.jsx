import { Flex, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { academics } from '../data';

const Academics = () => {
    return (
        <Flex>
        <List>
        <SimpleGrid columns="1" spacingY="5">
            {academics.map((acd) => {
                return (
                    <ListItem boxShadow="md" borderWidth="1px" borderRadius="10px" py="10px" px="20px">
                        <Text fontSize={{base: "12px", md:"14px"}}>{acd.tenure}</Text>
                        <Text fontSize={{base: "20px", md:"22px"}} fontWeight="bold" color="teal.500">{acd.title}</Text>
                        <Text fontSize={{base: "18px", md:"20px"}} fontWeight="bold" color="gray.700">{acd.result}</Text>
                    </ListItem>
                );
            })}
            </SimpleGrid>
        </List>
    </Flex>
    );
}

export default Academics;
