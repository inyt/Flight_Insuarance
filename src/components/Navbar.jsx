import { Flex, Spacer, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex bg="blue.50" p={4}>
      <Heading as="h1">FlightSafe</Heading>
      <Spacer />
      <Flex>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
