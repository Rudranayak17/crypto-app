import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {  AiOutlineGoogle} from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxW={"container.xl"} h={"full"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading textAlign={"center"}>Xcrypto</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input
            placeholder="Name"
            type="text"
            focusBorderColor="purple.500"
            required
          />
          <Input
            placeholder="Email"
            type="email"
            focusBorderColor="purple.500"
            required
          />
          <Input
            placeholder="Password"
            type="password"
            focusBorderColor="purple.500"
            required
          />

          <Button colorScheme="purple">Sign Up</Button>
          <Text textAlign={"center"}>
            Already Exist Sign up?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/login"}>Login Now</Link>
            </Button>{" "}
          </Text>
          <Text textAlign={'center'}>OR</Text>
          <Button colorScheme="teal"><AiOutlineGoogle/> Google</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
