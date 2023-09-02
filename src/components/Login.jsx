import {  Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"120vh"} p={"16"}>
    <form >
        <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
<Heading textAlign={'center'}>Welcome Back</Heading>
<Input placeholder='Email' type='email' focusBorderColor='purple.500' required />
<Input placeholder='Password' type='password' focusBorderColor='purple.500' required />


<Text textAlign={'center'}>Did you forget?{" "}
 <Button variant={'link'}>
    <Link to={"/forgetPassword"}>forget Password</Link>
</Button>
</Text>


<Button colorScheme='purple'>Log in </Button>
<Text textAlign={'right'}>New user?<Button variant={'link'} colorScheme='purple'>
    <Link to={"/signup"}>sign up</Link>
</Button>  </Text>

        </VStack>
    </form>
   </Container>
  )
}

export default Login
