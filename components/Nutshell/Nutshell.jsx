import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import styles from "./Nutshell.module.css";
import Nutshell_details from "../Nutshell_details/Nutshell_details";

const Nutshell = () => {
  return (
    <div className={styles.nutshell_main}>
      <div>
        <Container padding="30px">
          <Heading
            textAlign={"center"}
            fontSize="40px"
            fontWeight={700}
            className={styles.mb_heading}
          >
            The Program in a Nutshell Earn While You Learn
          </Heading>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            textAlign="center"
            mt={"15px"}
            className={styles.mb_para}
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the programs beginning. It resembles a cross
            between a corporate venture and an educational project.
          </Text>
        </Container>

        <Nutshell_details />
      </div>
    </div>
  );
};

export default Nutshell;
