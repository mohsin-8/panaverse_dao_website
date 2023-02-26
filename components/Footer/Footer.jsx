import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaFacebookF, FaGithub } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Image from "next/image";
import Footer_Logo from "../../public/footer_logo.png";
import styles from "./Footer.module.css";

const Logo = () => {
  return (
    <Image src={Footer_Logo} alt="footer logo" className={styles.footer_logo} />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("#e5f0f3")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Panaverse Dao. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/Panaverse_edu"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                href={
                  "https://www.youtube.com/channel/UCu8v7dLyAix44NXjKCNNgRA"
                }
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={
                  "https://www.facebook.com/groups/panaverse/?mibextid=6NoCDW"
                }
              >
                <FaFacebookF />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://github.com/panaverse"}
              >
                <FaGithub />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"https://www.piaic.org/"} target="_blank">
              PIAIC
            </Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("#a8172c")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "#3a3a3a",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
