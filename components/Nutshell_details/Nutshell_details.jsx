import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

import styles from "./Nutshell_details.module.css";

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" className={styles.mb_heading}>
        Dollar Making Bootcamp - Full-Stack Template and API Product Development
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Image
              borderRadius="lg"
              src={
                "https://img.freepik.com/free-psd/world-graphics-day-web-template_23-2148911074.jpg?w=826&t=st=1675056955~exp=1675057555~hmac=ee548e88e455f7bc1cba07af6de4d8b19e9f0414e28c5a11a9b21937cd8c0690"
              }
              alt="some good alt text"
              objectFit="contain"
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading marginTop="1" className={styles.mb_heading}>
            Build Full-Stack Next.js 13 Jamstack Templates
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
            className={styles.mb_para}
          >
            You will be assigned to build a template which we will sell on Theme
            Forest and Panaverse DAO marketplace. The Panaverse DAO will receive
            25% share on the sale of the template which will be used to manage
            the platform. An additional 15% will be spent on marketing the
            template. 60% of the revenues will be distributed to the developer
            through the Panaverse DAO in the form of Panaverse tokens.
          </Text>
        </Box>
      </Box>

      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading marginTop="1" className={styles.mb_heading}>
            Build QraphQL APIs
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
            className={styles.mb_para}
          >
            You will be assigned to build APIs for which you will sell
            subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO
            will receive 25% share on the sale of the template which will be
            used to manage the platform. An additional 15% will be spent on
            marketing the template. 60% of the revenues will be distributed to
            the developer through the Panaverse DAO in the form of Panaverse
            tokens.
          </Text>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Image
              borderRadius="lg"
              src={
                "https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149377877.jpg?w=740&t=st=1675057364~exp=1675057964~hmac=fadcf8b28a77997f85dceaf61f8895b1f32d5675fdeaab8bf5dec1a48f59130c"
              }
              alt="some good alt text"
              objectFit="contain"
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
