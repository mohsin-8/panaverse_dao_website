import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import styles from "./Proud.module.css";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Proud() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"5xl"}
        paddingBottom="5px"
        fontFamily={"Montserrat"}
        fontWeight={"bold"}
        textTransform={"capitalize"}
        color={"#a8172c"}
        className={styles.mb_heading}
      >
        Core Courses
        <span className={styles.greenSpan}>
          (Common in All Specializations):
        </span>
      </chakra.h1>

      <chakra.p
        textAlign={"center"}
        fontSize={"17px"}
        fontFamily={"Montserrat"}
        fontWeight={"medium"}
        textTransform={"capitalize"}
        color={"#718096"}
        className={styles.mb_para}
      >
        Every participant of the program will start by completing the following
        three core courses:
      </chakra.p>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        mt="50px"
      >
        <div className={styles.proudBox}>
          <h2>Quarter I (Core)</h2>
          <p>CS-101: Object-Oriented Programming using TypeScript</p>
        </div>

        <div className={styles.proudBox}>
          <h2>Quarter II (Core)</h2>
          <p>
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
            and APIs using Next.js 13 and Cloud Development Kit (CDK) for
            Terraform
          </p>
        </div>

        <div className={styles.proudBox}>
          <h2>Quarter III (Core)</h2>
          <p>
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </p>
        </div>
      </SimpleGrid>
    </Box>
  );
}
