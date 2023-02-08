import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <>
        <Component {...pageProps} />
      </>
      <Footer />
    </ChakraProvider>
  );
}
