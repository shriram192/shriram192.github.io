import { Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { email, github, instagram, linkedin } from '../data';

const Footer = () => {
    return (
        <Flex w="100vw" h="10vh" bgColor="teal.500" justifyContent="center" alignItems="center" px="50px" position="relative" bottom="0">
            <Icon as={AiOutlineMail} mx="5px" color="white" href={email} w={9} h={9} cursor="pointer" />
            <Icon as={AiOutlineInstagram} mx="2.5px" color="white" href={instagram} w={9} h={9} cursor="pointer" />
            <Icon as={AiOutlineLinkedin} mx="2.5px" color="white" href={linkedin} w={9} h={9} cursor="pointer" />
            <Icon as={AiOutlineGithub} mx="5px" color="white" href={github} w={9} h={9} cursor="pointer" />
        </Flex>
    );
}

export default Footer;
