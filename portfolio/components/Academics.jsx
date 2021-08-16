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
                            <Text fontSize="14px">{acd.tenure}</Text>
                            <Text fontSize="22px" fontWeight="bold" color="teal.500">{acd.title}</Text>
                            <Text fontSize="20px" fontWeight="bold" color="gray.700">{acd.result}</Text>
                    </ListItem>
                );
            })}
            </SimpleGrid>
        </List>
    </Flex>
    );
}

export default Academics;
