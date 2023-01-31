import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./Join.module.css";

const ModalForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} mt="30px" className={styles.learnMore}>
        Join us now
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join Us!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input ref={initialRef} type="text" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Join = () => {
  return (
    <div className="joinDiv">
      <Container maxW={"7xl"} p="12">
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
              Join The Biggest Pakistan Web 3 Community
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              className={styles.mb_para}
            >
              Panaverse DAO helps individuals who are stuck in a low-paying job
              by offering a welcome community and a 15-month-long Web 3
              Certification program that will make them specialized
              professionals in Web 3.
            </Text>
            <ModalForm />
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
              <img
                src="https://static.euronews.com/articles/stories/06/33/17/40/1200x675_cmsv2_ee29dadf-9615-567e-bc6f-fd725bc2c680-6331740.jpg"
                alt="community"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Join;
