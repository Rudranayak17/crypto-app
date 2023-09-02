import {  Button, Container, Heading, Input,  Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Forget = () => {
  return (
    <Container maxW={"container.xl"}  h={"120vh"} p={"16"}>
    <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
<Heading textAlign={'center'}>Reset Password</Heading>
<Input placeholder='New password' type='password' focusBorderColor='purple.500' required />
<Input placeholder='Confirm Password' type='password' focusBorderColor='purple.500' required />





<Button type='submit' colorScheme='purple'>Reset Password </Button>
<Text textAlign={'right'}>New user?<Button variant={'link'} colorScheme='purple'>
    <Link to={"/signup"}>sign up</Link>
</Button>  </Text>

        </VStack>
    </form>
   </Container>
  )
}

export default Forget