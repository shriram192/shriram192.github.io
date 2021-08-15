import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from 'react';
import Academics from './Academics';
import Activities from './Activities';
import Certifications from './Certifications';
import Experience from './Experience';
import Skills from './Skills';

const TabsComponent = () => {
    return (
        <Flex w="100vw" h="50vh" justifyContent="center">
            <Tabs variant="soft-rounded" colorScheme="teal">
                <TabList>
                    <Tab>Skills</Tab>
                    <Tab>Certifications</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Academics</Tab>
                    <Tab>Activities</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel><Skills /></TabPanel>
                    <TabPanel><Certifications /></TabPanel>
                    <TabPanel><Experience /></TabPanel>
                    <TabPanel><Academics /></TabPanel>
                    <TabPanel><Activities /></TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}

export default TabsComponent;
