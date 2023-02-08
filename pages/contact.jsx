import React, { useEffect, useState } from "react";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thankyou, setThankyou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setThankyou(true);

    setTimeout(() => {
      setThankyou(false);
    }, 1500);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container bg="#a8172c" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#fff"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color={"#a8172c"}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: "2px solid #a8172c" }}
                        leftIcon={<MdPhone color="#a8172c" size="20px" />}
                      >
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: "2px solid #a8172c" }}
                        leftIcon={<MdEmail color="#a8172c" size="20px" />}
                      >
                        abc@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: "2px solid #a8172c" }}
                        leftIcon={<MdLocationOn color="#a8172c" size="20px" />}
                      >
                        Karachi, Pakistan
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form onSubmit={handleSubmit}>
                      <VStack spacing={5}>
                        <FormControl>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </FormControl>
                        <FormControl float="right">
                          <Button
                            variant="solid"
                            bg="#a8172c"
                            color="white"
                            _hover={{}}
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </FormControl>

                        {thankyou && (
                          <div>
                            <Text
                              textAlign={"center"}
                              color="white"
                              fontWeight={"600"}
                              backgroundColor={"green.900"}
                              padding="10px"
                            >
                              Thank you for submitting
                            </Text>
                          </div>
                        )}
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
