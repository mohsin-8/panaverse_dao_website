import React from "react";
import {
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const syllabus = () => {
  return (
    <div>
      <section className={styles.syllabus}>
        <Container>
          <Heading textAlign="center">Course Details</Heading>
          <Text mt={"25px"} textAlign="center">
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </Text>
          <div className={styles.tabsDiv}>
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>Object-Oriented Programming using TypeScript</Tab>
                <Tab>Tab 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack>
                    <Flex></Flex>
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default syllabus;
