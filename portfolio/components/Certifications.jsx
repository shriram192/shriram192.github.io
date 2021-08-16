import { Flex, List, ListIcon, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { SiGooglescholar } from 'react-icons/si';
import { certifications } from '../data';

const Certifications = () => {
    return (
        <Flex>
            <List>
            <SimpleGrid columns="2" spacingY="2" spacingX="10">
                {certifications.map((cert) => {
                    return (
                        <ListItem>
                                <Flex alignItems="flex-start">
                                <ListIcon as={SiGooglescholar} w={7} h={7} color="gray.700" />
                                <Text maxW='40vw'>{cert}</Text>
                                </Flex>
                        </ListItem>
                    );
                })}
                </SimpleGrid>
            </List>
        </Flex>
    );
}

export default Certifications;
